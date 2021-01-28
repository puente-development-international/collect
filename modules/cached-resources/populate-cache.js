import { cacheAutofillData, cacheResidentData, customFormsQuery } from './read';
import { retrieveCurrentUserAsyncFunction } from '../../services/parse/auth';
import { storeData } from '../async-storage';

export default function populateCache(user) {
  // communities called since we need a paramter, all data would be cached in the
  // cacheAutofillData function
  cacheAutofillData('Communities')
    .then(() => {

    })
    .then(async () => {
      // store information after sign up/sign in
      if (user) {
        await storeData(user.get('organization'), 'organization');
        await storeData(user, 'currentUser');
      } else {
        // fail safe in case no user is passed in for some reason
        await retrieveCurrentUserAsyncFunction()
          .then(async (currentUser) => {
            await storeData(currentUser.organization, 'organization');
            await storeData(currentUser, 'currentUser');
          });
      }
    })
    .then(() => {
      // store ID forms
      const queryParams = {
        skip: 0,
        offset: 0,
        limit: 100000,
        parseColumn: 'surveyingOrganization',
        parseParam: user.get('organization'),
      };
      cacheResidentData(queryParams);
    })
    .then(() => {
      customFormsQuery(user.get('organization'));
    })
}
