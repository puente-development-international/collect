import { postObjectsToClass, postObjectsToClassWithRelation } from '../../services/parse/crud';
import checkOnlineStatus from '../offline';
import { generateRandomID } from '../utils';
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
          const idParams = postParams;
          idParams.localObject.objectId = id;
          if (idForms !== null || idForms === []) {
            const forms = idForms.concat(idParams);
            await storeData(forms, 'offlineIDForms');
            resolve(idParams.localObject);
          } else {
            const idData = [idParams];
            // idData[id] = postParams;
            await storeData(idData, 'offlineIDForms');
            resolve(idParams.localObject);
          }
        });
      }
    });
  });
}

function postSupplementaryForm(postParams) {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then((connected) => {
      if (connected && !postParams.parseParentClassID.includes('PatientID-')) {
        postObjectsToClassWithRelation(postParams).then(() => {
          resolve('success');
        }, (error) => {
          reject(error);
        });
      } else {
        getData('offlineSupForms').then(async (supForms) => {
          if (supForms !== null) {
            const forms = supForms.concat(postParams);
            await storeData(forms, 'offlineSupForms');
            resolve('success');
          } else {
            const supData = [postParams];
            await storeData(supData, 'offlineSupForms');
            resolve('success');
          }
        });
      }
    });
  });
}

function postOfflineForms() {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then(async (connected) => {
      if (connected) {
        const idForms = await getData('offlineIDForms');
        const supForms = await getData('offlineSupForms');

        if (idForms !== null && idForms !== []) {
          idForms.forEach((postParams) => {
            const offlineObjectID = postParams.localObject.objectId;
            const idParams = postParams;
            delete idParams.localObject.objectId;
            postObjectsToClass(idParams).then((surveyee) => {
              const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
              const parseObjectID = surveyeeSanitized.objectId;
              if (supForms !== null && supForms !== []) {
                supForms.forEach((supForm) => {
                  if (supForm.parseParentClassID === offlineObjectID) {
                    const supParams = supForm;
                    supParams.parseParentClassID = parseObjectID;
                    postObjectsToClassWithRelation(supParams).then(() => {
                    }, (error) => {
                      reject(error);
                    });
                  }
                });
              }
            }, (error) => {
              reject(error);
            });
          });
        }

        if (supForms !== null && supForms !== []) {
          supForms.forEach((supForm) => {
            // supplementary forms not tied to an offline ID form
            if (!supForm.parseParentClassID.includes('PatientID-')) {
              postObjectsToClassWithRelation(supForm).then(() => {
              }, (error) => {
                reject(error);
              });
            }
          });
        }
        resolve(true);
      } else {
        reject();
      }
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
  postOfflineForms,
  postHousehold,
  postHouseholdWithRelation
};
