const configArray = {
  class: 'EvaluationMedical',
  name: 'Medical Assessment Form',
  fields: [{
    label: 'Chronic Condition Hypertension',
    formikKey: 'chronic_condition_hypertension',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Yes',
        value: 'Yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ]
  },
  {
    label: 'Chronic Condition Diabetes',
    formikKey: 'chronic_condition_diabetes',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Yes',
        value: 'Yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ]
  },
  {
    label: 'Chronic Condition Other',
    formikKey: 'chronic_condition_other',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Yes',
        value: 'Yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ]
  },
  {
    label: 'Have you seen a doctor for this problem',
    formikKey: 'seen_doctor',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Yes',
        value: 'Yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ]
  },
  {
    label: 'Notes',
    formikKey: 'received_treatment_notes',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Status of Health',
    formikKey: 'received_treatment_description',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Receiving Treatment or Follow-up Care | No Support Needed',
        value: 'receiving_treatment_no_support_required'
      },
      {
        label: 'Receiving Treatment or Follow-up Care | Support Needed',
        value: 'receiving_treatment_support_required'
      },
      {
        label: 'Awaiting Treatment or Follow-up Care |  No Support Needed',
        value: 'awaiting_treatment_support_required'
      },
      {
        label: 'No Treatment | Support Needed',
        value: 'no_treatment_support_required'
      },
      {
        label: 'Other',
        value: 'other'
      }
    ]
  },
  {
    label: 'Part of Body',
    formikKey: 'part_of_body',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Bones or Joints',
        value: 'bones_or_joints'
      },
      {
        label: 'Eyes',
        value: 'eyes'
      },
      {
        label: 'Ears, Nose or Throat',
        value: 'ear_nose_throat'
      },
      {
        label: 'Skin',
        value: 'skin'
      },
      {
        label: 'Head or Mental Issues',
        value: 'head_mental_issue'
      },
      {
        label: 'Stomach, Intestines',
        value: 'stomach_intestines'
      },
      {
        label: 'Bladder, Urinary tract',
        value: 'bladder_urinary'
      },
      {
        label: 'Reproductive Organs',
        value: 'reproductive_organs'
      },
      {
        label: 'Nutrition Issue',
        value: 'nutrition'
      },
      {
        label: '---',
        value: ''
      }
    ]
  },
  {
    label: 'Part of Body Description',
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
      {
        label: 'Within Last Month',
        value: 'within_last_month'
      },
      {
        label: 'Within Last Year',
        value: 'within_last_year'
      },
      {
        label: 'Within Last 5 Years',
        value: 'within_last_5_years'
      },
      {
        label: 'Past 5 Years',
        value: 'after_5_years'
      }
    ]
  },
  {
    label: 'Problem Suddenness',
    formikKey: 'trauma_induced',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Sudden and due to trauma',
        value: 'suddenly_due_to_trauma'
      },
      {
        label: 'Sudden but not to trauma',
        value: 'suddenly_but_not_due_to_trauma'
      },
      {
        label: 'Gradually',
        value: 'gradually'
      }
    ]
  },
  {
    label: 'Progression of Condition',
    formikKey: 'condition_progression',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Improving',
        value: 'improve'
      },
      {
        label: 'Worsening',
        value: 'worsen'
      },
      {
        label: 'Constant',
        value: 'constant'
      }
    ]
  },
  {
    label: 'Notes',
    formikKey: 'notes',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'General Health Consult Required?',
    formikKey: 'AssessmentandEvaluation',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Yes',
        value: 'Yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ]
  },
  {
    label: 'Surgical Need Required?',
    formikKey: 'AssessmentandEvaluation_Surgical',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Yes',
        value: 'Yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ]
  },
  {
    label: 'Your Guess',
    formikKey: 'AssessmentandEvaluation_Surgical_Guess',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Immediate Follow Up Required?',
    formikKey: 'immediate_follow_up',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Yes',
        value: 'Yes'
      },
      {
        label: 'No',
        value: 'No'
      }
    ]
  },
  {
    label: 'Plan',
    formikKey: 'planOfAction',
    value: '',
    fieldType: 'input'
  },
  ]
};

export default configArray;
