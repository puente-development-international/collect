import { residentIDQuery, customQueryService } from '../../services/parse/crud';
import retrievePuenteAutofillData from '../../services/aws';
import checkOnlineStatus from '../offline';
import { getData, storeData } from '../async-storage';
import checkOnlineStatus from '../offline';
import getTasks from '../../services/tasky';

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
  })
}

function customFormsQuery(surveyingOrganization) {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then((online) => {
      if (online) {
        customQueryService(0, 5000, 'FormSpecificationsV2', 'organizations', surveyingOrganization).then(async (forms) => {
          await storeData(forms, 'customForms');
          resolve(JSON.parse(JSON.stringify(forms)));
        }, (error) => {
          reject(error);
        });
      } else {
        getData('customForms').then((forms) => {
          resolve(forms);
        }, (error) => {
          reject(error);
        });
      }
    }, (error) => {
      reject(error);
    });
  });
}

function getTasksAsync() {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then(async (online) => {
      if (online) {
        await getTasks().then(async (result) => {
          await storeData(result, 'tasks');
          resolve(result);
        }, (error) => {
          reject(error);
        });
      } else {
        getData('tasks').then((tasks) => {
          resolve(tasks);
        }, (error) => {
          reject(error);
        });
      }
    }, (error) => {
      reject(error);
    });
  });
}

export {
  residentQuery,
  cacheAutofillData,
  customFormsQuery,
  getTasksAsync
};
