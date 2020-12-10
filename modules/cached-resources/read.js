import { residentIDQuery } from '../../services/parse/crud';
import retrievePuenteAutofillData from '../../services/aws';
import { storeData, getData } from '../async-storage';
import checkOnlineStatus from '../offline';

async function residentQuery(queryParams) {
  let records = await residentIDQuery(queryParams);
  records = JSON.parse(JSON.stringify(records));
  return records;
}

async function cacheAutofillData(parameter) {
  checkOnlineStatus().then((connected) => {
    if (connected) {
      retrievePuenteAutofillData('all').then((result) => {
        storeData(result, 'autofill_information');
        return result[parameter];
      });
    } else {
      return getData('autofill_information')[parameter];
    }
  });
}

export {
  residentQuery,
  cacheAutofillData
};
