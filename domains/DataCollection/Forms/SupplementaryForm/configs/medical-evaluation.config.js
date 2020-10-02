const configArray = {
  class: 'EvaluationMedical',
  name: 'Medical Assessment Form',
  fields: [{
    label: 'chronic_condition_hypertension',
    formikKey: 'chronic_condition_hypertension',
    value: '',
    fieldType: 'select',
    options: [
      'Yes',
      'No',
    ]
  },
  {
    label: 'chronic_condition_diabetes',
    formikKey: 'chronic_condition_diabetes',
    value: '',
    fieldType: 'select',
    options: [
      'Yes',
      'No',
    ]
  },
  {
    label: 'chronic_condition_other',
    formikKey: 'chronic_condition_other',
    value: '',
    fieldType: 'select',
    options: [
      'Yes',
      'No',
    ]
  },
  {
    label: 'seen_doctor',
    formikKey: 'seen_doctor',
    value: '',
    fieldType: 'select',
    options: [
      'Yes',
      'No',
    ]
  },
  {
    label: 'received_treatment_notes',
    formikKey: 'received_treatment_notes',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'received_treatment_description',
    formikKey: 'received_treatment_description',
    value: '',
    fieldType: 'select',
    options: [
      'receiving_treatment_no_support_required',
      'receiving_treatment_support_required',
      'awaiting_treatment_support_required',
      'no_treatment_support_required',
      'other'
    ]
  },
  {
    label: 'part_of_body',
    formikKey: 'part_of_body',
    value: '',
    fieldType: 'select',
    options: [
      'bones_or_joints',
      'eyes',
      'ear_nose_throat',
      'skin',
      'head_mental_issue',
      'stomach_intestines',
      'bladder_urinary',
      'reproductive_organs',
      'nutrition',
      '',
    ]
  },
  {
    label: 'part_of_body_description',
    formikKey: 'part_of_body_description',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'duration',
    formikKey: 'duration',
    value: '',
    fieldType: 'select',
    options: [
      'within_last_month',
      'within_last_year',
      'within_last_5_years',
      'after_5_years',
      '',
    ]
  },
  {
    label: 'trauma_induced',
    formikKey: 'trauma_induced',
    value: '',
    fieldType: 'select',
    options: [
      'suddenly_due_to_trauma',
      'suddenly_but_not_due_to_trauma',
      'gradually',
    ]
  },
  {
    label: 'condition_progression',
    formikKey: 'condition_progression',
    value: '',
    fieldType: 'select',
    options: [
      'improve',
      'worsen',
      'constant',
    ]
  },
  {
    label: 'notes',
    formikKey: 'notes',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'AssessmentandEvaluation',
    formikKey: 'AssessmentandEvaluation',
    value: '',
    fieldType: 'select',
    options: [
      'Yes',
      'No',
    ]
  },
  {
    label: 'AssessmentandEvaluation_Surgical',
    formikKey: 'AssessmentandEvaluation_Surgical',
    value: '',
    fieldType: 'select',
    options: [
      'Yes',
      'No',
    ]
  },
  {
    label: 'AssessmentandEvaluation_Surgical_Guess',
    formikKey: 'AssessmentandEvaluation_Surgical_Guess',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'immediate_follow_up',
    formikKey: 'immediate_follow_up',
    value: '',
    fieldType: 'select',
    options: [
      'Yes',
      'No',
    ]
  },
  {
    label: 'planOfAction',
    formikKey: 'planOfAction',
    value: '',
    fieldType: 'input'
  },
  ]
};

export default configArray;
