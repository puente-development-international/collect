import { postObjectsToClass, postObjectsToClassWithRelation } from '../../services/parse/crud';
import checkOnlineStatus from '../offline';
import { generateRandomID } from '../utils';
import {
  deleteData,
  getData,
  storeData
} from '../async-storage';

function postIdentificationForm(postParams) {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then((connected) => {
      if (connected) {
        postObjectsToClass(postParams).then((surveyee) => {
          const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
          console.log(surveyeeSanitized);
          resolve(surveyeeSanitized);
        }, (error) => {
          reject(error);
        });
      } else {
        console.log("ELSE")
        getData('offlineIDForms').then(async (idForms) => {
          console.log("TTEST")
          const id = `PatientID-${generateRandomID()}`;
          postParams.localObject['objectId'] = id;
          console.log(idForms)
          if (idForms !== null || idForms === []) {
            console.log(idForms);
            console.log(idForms);
            // postParams.localObject['objectId'] = id;
            idForms = idForms.concat(postParams);
            await storeData(idForms, 'offlineIDForms');
            resolve(postParams.localObject)
          }
          else {
            console.log('No data yet...')
            let idData = [postParams];
            // idData[id] = postParams;
            await storeData(idData, 'offlineIDForms');
            resolve(postParams.localObject);
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
    checkOnlineStatus().then((connected) => {
      if (connected && !postParams.parseParentClassID.includes('PatientID-')) {
        postObjectsToClassWithRelation(postParams).then(() => {
          resolve('success');
        }, (error) => {
          reject(error);
        });
      }
      else {
        getData('offlineSupForms').then(async (supForms) => {
          if (supForms !== null) {
            supForms = supForms.concat(postParams);
            await storeData(supForms, 'offlineSupForms')
            resolve('success')
          }
          else {
            console.log('no data supp');
            const supData = [postParams];
            await storeData(supData, 'offlineSupForms')
            resolve('success');
          }
        })
      }
    })
  });
}

function postOfflineForms() {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then(async (connected) => {
      if (connected) {
        let idForms = await getData('offlineIDForms');
        let supForms = await getData('offlineSupForms');

        idForms.forEach((postParams) => {
          const offlineObjectID = postParams.localObject.objectId;
          console.log("Offline O ID", offlineObjectID);
          delete postParams.localObject['objectId']
          console.log('postparmas after objectId deleted', postParams)
          postObjectsToClass(postParams).then((surveyee) => {
            console.log("Posted ID Form")
            const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
            const parseObjectID = surveyeeSanitized.objectId;
            supForms.forEach((supForm) => {
              if (supForm.parseParentClassID === offlineObjectID) {
                supForm.parseParentClassID = parseObjectID;
                postObjectsToClassWithRelation(supForm).then(() => {
                  console.log("Posted Supplementary Form")
                }, (error) => {
                  console.log("Failed to post supp form");
                  reject(error);
                });
              }
            })
          }, (error) => {
            reject(error);
          });
        });

        supForms.forEach((supForm) => {
          // supplementary forms not tied to an offline ID form
          if (!supForm.parseParentClassID.includes('PatientID-')) {
            postObjectsToClassWithRelation(supForm).then(() => {
              console.log("Posted Supplementary Form")
            }, (error) => {
              console.log("Failed to post supp form");
              reject(error);
            });
          }
        })
        await deleteData('offlineIDForms');
        await deleteData('offlineSupforms');
        resolve('success');
      }
      else {
        reject('No connection');
      }
    }, (error) => {
      reject(error);
    })
  })
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
