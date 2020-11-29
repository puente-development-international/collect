import { postObjectsToClass, postObjectsToClassWithRelation } from '../../services/parse/crud';
import checkOnlineStatus from '../../modules/offline';
import generateRandomID from '../../modules/utils';
import {
  storeData
} from '../../modules/async-storage';

function postIdentificationForm(postParams, setSurveyee, submitAction) {
  checkOnlineStatus().then((connected) => {
    if (connected) {
      postObjectsToClass(postParams).then((surveyee) => {
        const surveyeeSanitized = JSON.parse(JSON.stringify(surveyee));
        setSurveyee(surveyeeSanitized);
        submitAction();
      });
    } else {
      const id = `PatientID-${generateRandomID()}`;
      storeData(postParams, id);
      submitAction();
    }
  });
}

function postSupplementaryForm(postParams, actions, toRoot) {
  postObjectsToClassWithRelation(postParams).then(() => {
    setTimeout(() => {
      actions.setSubmitting(false);
      toRoot();
    }, 1000);
  });
}

function postHousehold(postParams, setFieldValue, formikKey) {
  postObjectsToClass(postParams).then((result) => {
    setFieldValue(formikKey, result.id);
  });
}

function postHouseholdWithRelation(postParams, setFieldValue, formikKey) {
  postObjectsToClassWithRelation(postParams).then((result) => {
    setFieldValue(formikKey, result.id);
  });
}

export { 
  postIdentificationForm,
  postSupplementaryForm,
  postHousehold,
  postHouseholdWithRelation 
};