import { postObjectsToClass, postObjectsToClassWithRelation } from '../../services/parse/crud';
import checkOnlineStatus from '../offline';
import generateRandomID from '../utils';
import {
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
        const id = `PatientID-${generateRandomID()}`;
        storeData(postParams, id);
        resolve('success');
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
