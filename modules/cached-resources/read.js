import { residentIDQuery } from '../../services/parse/crud';
import retrievePuenteAutofillData from '../../services/aws';
import { storeData } from '../async-storage'

async function residentQuery(queryParams) {
  let records = await residentIDQuery(queryParams);
  records = JSON.parse(JSON.stringify(records));
  return records;
}

function cacheAutofillData() {
  retrievePuenteAutofillData('all').then((result) => {
    storeData(result, 'autofill_information')
  })
}

export {
  residentQuery,
  cacheAutofillData
}
