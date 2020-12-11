import { postObjectsToClass, postObjectsToClassWithRelation } from '../../services/parse/crud';
import checkOnlineStatus from '../offline';
import generateRandomID from '../utils';
import {
  getData,
  storeData
} from '../async-storage';

function postIdentificationForm(postParams) {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then((connected) => {
      if (connected) {
        postObjectsToClass(postParams).then((surveyee) => {
          const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
          resolve(surveyeeSanitized);
        }, (error) => {
          reject(error);
        });
      } else {
        getData('offlineIDForms').then(async (idForms) => {
          const id = `PatientID-${generateRandomID()}`;
          if (idForms !== null) {
            console.log(idForms);
            idForms[id] = postParams;
            await storeData(idForms, 'offlineIDForms');
            resolve('success')
          }
          else {
            console.log('No data yet...')
            let idData = {};
            idData[id] = postParams;
            await storeData(idData, 'offlineIDForms');
            resolve('success');
          }
          console.log(idForms);
        })
        // storeData(postParams, id);
        // resolve('success');
      }
    });
  });
}

function postSupplementaryForm(postParams) {
  return new Promise((resolve, reject) => {
    postObjectsToClassWithRelation(postParams).then(() => {
      resolve('success');
    }, (error) => {
      reject(error);
    });
  });
}

function postHousehold(postParams) {
  return new Promise((resolve, reject) => {
    postObjectsToClass(postParams).then((result) => {
      resolve(result.id);
    }, (error) => {
      reject(error);
    });
  });
}

function postHouseholdWithRelation(postParams) {
  return new Promise((resolve, reject) => {
    postObjectsToClassWithRelation(postParams).then((result) => {
      resolve(result.id);
    }, (error) => {
      reject(error);
    });
  });
}

export {
  postIdentificationForm,
  postSupplementaryForm,
  postHousehold,
  postHouseholdWithRelation
};
