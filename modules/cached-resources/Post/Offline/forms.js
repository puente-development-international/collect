import { postObjectsToClass, postObjectsToClassWithRelation } from '../../../../services/parse/crud';


/*************************************************
 * Function to post offline id/sup forms not tied to a housheold
 * @name postForms
 * @example
 * postForms(idForms, supForms);
 * 
 * @param {Array} idForms Array of id forms created offline
 * @param {Array} supForms Array of all supplementary forms created offline
 * 
 ************************************************/

function postForms(idForms, supForms) {
  return new Promise((resolve, reject) => {
    if (idForms !== null && idForms !== []) {
      idForms.forEach((postParams, index, array) => {
        console.log("POST params", index, array.length - 1)
        if (!('householdId' in postParams.localObject)) {
          const offlineObjectID = postParams.localObject.objectId;
          const idParams = postParams;
          delete idParams.localObject.objectId;
          postObjectsToClass(idParams).then((surveyee) => {
            const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
            const parseObjectID = surveyeeSanitized.objectId;
            console.log("post successfull")
            if (supForms !== null && supForms !== []) {
              console.log("looking for sup forms")
              supForms.forEach((supForm) => {
                console.log("Sup form")
                if (supForm.parseParentClassID === offlineObjectID) {
                  const supParams = supForm;
                  supParams.parseParentClassID = parseObjectID;
                  postObjectsToClassWithRelation(supParams).then(() => {
                  }, (error) => {
                    // handleParseError(error, postOfflineForms);
                    reject(error);
                  });
                }
              });
            }
            console.log(index, array.length - 1)
            if (index === array.length - 1) {
              console.log("resolving..")
              resolve();
            }
          }, (error) => {
            // handleParseError(error, postOfflineForms).then(() => {
            //   resolve('succcess')
            // })
            // console.log('should have rejected')
            reject(error);
          });
        }
      });
      // resolve(true);
    }
    else {
      resolve(true);
    }
  })
}

/*************************************************
 * Function to post offline sup forms tied to existing id forms
 * @name postSupForms
 * @example
 * postForms(supForms);
 * 
 * @param {Array} supForms Array of all supplementary forms created offline
 * 
 ************************************************/
function postSupForms(supForms) {
  return new Promise((resolve, reject) => {
    if (supForms !== null && supForms !== []) {
      supForms.forEach((supForm, index, array) => {
        // supplementary forms not tied to an offline ID form
        if (!supForm.parseParentClassID.includes('PatientID-')) {
          postObjectsToClassWithRelation(supForm).then(() => {
            if (index === array.length - 1) resolve();
          }, (error) => {
            // handleParseError(error, postOfflineForms);
            reject(error);
          });
        }
      });
      // resolve(true);
    }
    else {
      resolve(true)
    }
  })
}

export {
  postForms,
  postSupForms
};