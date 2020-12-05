import { residentIDQuery } from '../../services/parse/crud';
import retrievePuenteAutofillData from '../../services/aws';
import { storeData, getData } from '../async-storage'
import checkOnlineStatus from '../offline';

async function residentQuery(queryParams) {
  let records = await residentIDQuery(queryParams);
  records = JSON.parse(JSON.stringify(records));
  return records;
}

async function cacheAutofillData(paramter) {
  console.log("REally first hi");
  checkOnlineStatus().then((connected) => {
    console.log("Connected", connected);
    if (connected) {
      retrievePuenteAutofillData('all').then((result) => {
        storeData(result, 'autofill_information')
        console.log("Resulkt", result)
        return result[paramter];
        // const data = await getData('autofill_information')
        // console.log(paramter, data[paramter]);
        // return data[paramter];
      }, (error) => {
        reject("1", error);
      })
    }
    else {
      return getData('autofill_information')[paramter];
    }
  })
  console.log("First hi");
}

export {
  residentQuery,
  cacheAutofillData
}
