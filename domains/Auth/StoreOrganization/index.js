import { retrieveCurrentUserFunction } from '../../../services/parse/auth';
import { storeData, getData } from '../../../modules/async-storage';

// currently not working...
// says 'StoreOrganization.storeorganization is not a function'
export default function storeOrganization() {
  const currentUser = retrieveCurrentUserFunction();
  getData('organization').then((organization) => {
    if (organization !== currentUser.organization) {
      storeData(currentUser.organization, 'organization');
      return true;
    }
    return false;
  }, () => {
    // error getting data from async
  });
  return true;
}
