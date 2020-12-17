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
        const households = await getData('offlineHouseholds')
        const householdsRelation = await getData('offlineHouseholdsRelation')
        console.log(households);

        if (households !== null && households !== []) {
          // post new households
          households.forEach((household) => {
            const offlineHouseholdID = household.localObject.objectId;
            const householdParams = household;
            delete householdParams.localObject.objectId
            postObjectsToClass(householdParams).then((result) => {
              const parseHouseholdID = result.id
              if (householdsRelation !== null && householdsRelation !== []) {
                // post new households with relations to newly created households
                householdsRelation.forEach((householdRelation) => {
                  if (householdRelation.parseParentClassID === offlineHouseholdID) {
                    const householdRelationParams = householdRelation;
                    householdRelationParams.parseParentClassID = parseHouseholdID;
                    const offlineHouseholdRelationID = householdRelationParams.localObject.objectId
                    delete householdRelationParams.localObject.objectId
                    postObjectsToClassWithRelation(householdRelationParams).then((relationResult) => {
                      const parseHouseholdRelationID = relationResult.id;
                      // post id/sup forms with newly created related households
                      if (idForms !== null && idForms !== []) {
                        idForms.forEach((postParams) => {
                          if ("householdId" in postParams.localObject && postParams.localObject.householdId === offlineHouseholdRelationID) {
                            const offlineObjectID = postParams.localObject.objectId;
                            let idParams = postParams;
                            idParams.localObject.householdId = parseHouseholdRelationID;
                            delete idParams.localObject.objectId;
                            postObjectsToClass(idParams).then((surveyee) => {
                              const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
                              const parseObjectID = surveyeeSanitized.objectId;
                              console.log("POSTED 2 - ", surveyeeSanitized)
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
                          }
                        })
                      }
                    })
                  }
                })
              }
              // post id/sup with newly created households
              if (idForms !== null && idForms !== []) {
                idForms.forEach((postParams) => {
                  if ("householdId" in postParams.localObject && postParams.localObject.householdId === offlineHouseholdID) {
                    const offlineObjectID = postParams.localObject.objectId;
                    let idParams = postParams;
                    idParams.localObject.householdId = parseHouseholdID;
                    delete idParams.localObject.objectId;
                    postObjectsToClass(idParams).then((surveyee) => {
                      const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
                      console.log("POSTED 1 - ", surveyeeSanitized)
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
                  }
                })
              }
            })
          })
        }

        if (householdsRelation !== null && householdsRelation !== []) {
          // post new households with relations to existing households
          householdsRelation.forEach((householdRelation) => {
            if (!householdRelation.parseParentClassID.includes('Household-')) {
              const householdRelationParams = householdRelation;
              const offlineHouseholdRelationID = householdRelationParams.localObject.objectId
              delete householdRelationParams.localObject.objectId
              postObjectsToClassWithRelation(householdRelationParams).then((relationResult) => {
                const parseHouseholdRelationID = relationResult.id;
                // post id/sup forms with newly created households with relation tied to existing households
                if (idForms !== null && idForms !== []) {
                  idForms.forEach((postParams) => {
                    if (postParams.localObject.householdId === offlineHouseholdRelationID) {
                      const offlineObjectID = postParams.localObject.objectId;
                      let idParams = postParams;
                      idParams.localObject.householdId = parseHouseholdRelationID;
                      delete idParams.localObject.objectId;
                      postObjectsToClass(idParams).then((surveyee) => {
                        const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
                        const parseObjectID = surveyeeSanitized.objectId;
                        console.log("POSTED 3 - ", surveyeeSanitized)
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
                    }
                  })
                }
              })
            }
          })
        }

        // post Id/sup forms without a houshold
        if (idForms !== null && idForms !== []) {
          idForms.forEach((postParams) => {
            console.log(postParams)
            if (!("householdId" in postParams.localObject)) {
              const offlineObjectID = postParams.localObject.objectId;
              const idParams = postParams;
              delete idParams.localObject.objectId;
              postObjectsToClass(idParams).then((surveyee) => {
                const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
                const parseObjectID = surveyeeSanitized.objectId;
                console.log("POSTED 4 - ", surveyeeSanitized)
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
            }
          });
        }

        // post remaining sup forms tied to existing id forms
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
      }
      else {
        reject();
      }
    }, (error) => {
      reject(error);
    });
  });
}

function postHousehold(postParams) {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then((connected) => {
      if (connected) {
        postObjectsToClass(postParams).then((result) => {
          resolve(result.id);
        }, (error) => {
          reject(error);
        });
      }
      else {
        getData('offlineHouseholds').then(async (households) => {
          const id = `Household-${generateRandomID()}`;
          const householdParams = postParams;
          householdParams.localObject.objectId = id;
          if (households !== null || households === []) {
            const forms = households.concat(householdParams);
            await storeData(forms, 'offlineHouseholds');
            resolve(id);
          } else {
            const householdData = [householdParams];
            // idData[id] = postParams;
            await storeData(householdData, 'offlineHouseholds');
            resolve(id);
          }
        });
      }
    });
  })
}

function postHouseholdWithRelation(postParams) {
  return new Promise((resolve, reject) => {
    checkOnlineStatus().then((connected) => {
      if (connected) {
        postObjectsToClassWithRelation(postParams).then((result) => {
          resolve(result.id);
        }, (error) => {
          reject(error);
        });
      }
      else {
        getData('offlineHouseholdsRelation').then(async (householdsRelation) => {
          const id = `Household-${generateRandomID()}`;
          const householdParams = postParams;
          householdParams.localObject.objectId = id;
          if (householdsRelation !== null || householdsRelation === []) {
            const forms = households.concat(householdParams);
            await storeData(forms, 'offlineHouseholdsRelation');
            resolve(id);
          } else {
            const householdData = [householdParams];
            // idData[id] = postParams;
            await storeData(householdData, 'offlineHouseholdsRelation');
            resolve(id);
          }
        });
      }
    })
  });
}

export {
  postIdentificationForm,
  postSupplementaryForm,
  postOfflineForms,
  postHousehold,
  postHouseholdWithRelation
};
