import I18n from '../../../../../modules/i18n';

const configArray = {
  class: 'EvaluationMedical',
  name: I18n.t('evaluationMedical.name'),
  fields: [
    {
      label: I18n.t('evaluationMedical.chronicHypertension'),
      formikKey: 'chronic_condition_hypertension',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('global.yes'),
          value: 'Yes'
        },
        {
          label: I18n.t('global.no'),
          value: 'No'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.chronicDiabetes'),
      formikKey: 'chronic_condition_diabetes',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('global.yes'),
          value: 'Yes'
        },
        {
          label: I18n.t('global.no'),
          value: 'No'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.chronicOther'),
      formikKey: 'chronic_condition_other',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('global.yes'),
          value: 'Yes'
        },
        {
          label: I18n.t('global.no'),
          value: 'No'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.doctor'),
      formikKey: 'seen_doctor',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('global.yes'),
          value: 'Yes'
        },
        {
          label: I18n.t('global.no'),
          value: 'No'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('global.notes'),
      formikKey: 'received_treatment_notes',
      value: '',
      fieldType: 'input',
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.statusOfHealth.label'),
      formikKey: 'received_treatment_description',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('evaluationMedical.statusOfHealth.receivingNoSupport'),
          value: 'receiving_treatment_no_support_required'
        },
        {
          label: I18n.t('evaluationMedical.statusOfHealth.receivingSupport'),
          value: 'receiving_treatment_support_required'
        },
        {
          label: I18n.t('evaluationMedical.statusOfHealth.awaitingNoSupport'),
          value: 'awaiting_treatment_support_required'
        },
        {
          label: I18n.t('evaluationMedical.statusOfHealth.noTreatmentSupport'),
          value: 'no_treatment_support_required'
        },
        {
          label: I18n.t('global.other'),
          value: 'other'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.partOfBody.label'),
      formikKey: 'part_of_body',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('evaluationMedical.partOfBody.bonesJoints'),
          value: 'bones_or_joints'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.eyes'),
          value: 'eyes'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.earsNoseThroat'),
          value: 'ear_nose_throat'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.skin'),
          value: 'skin'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.headMental'),
          value: 'head_mental_issue'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.stomachIntestines'),
          value: 'stomach_intestines'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.bladderUrinary'),
          value: 'bladder_urinary'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.reproductiveOrgans'),
          value: 'reproductive_organs'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.nutritionIssues'),
          value: 'nutrition'
        },
        {
          label: I18n.t('evaluationMedical.partOfBody.---'),
          value: ''
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.partOfBodyDescription'),
      formikKey: 'part_of_body_description',
      value: '',
      fieldType: 'input',
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.duration.label'),
      formikKey: 'duration',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('evaluationMedical.duration.lastMonth'),
          value: 'within_last_month'
        },
        {
          label: I18n.t('evaluationMedical.duration.lastYear'),
          value: 'within_last_year'
        },
        {
          label: I18n.t('evaluationMedical.duration.last5Years'),
          value: 'within_last_5_years'
        },
        {
          label: I18n.t('evaluationMedical.duration.past5Years'),
          value: 'after_5_years'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.problemSuddenness.label'),
      formikKey: 'trauma_induced',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('evaluationMedical.problemSuddenness.suddenTrauma'),
          value: 'suddenly_due_to_trauma'
        },
        {
          label: I18n.t('evaluationMedical.problemSuddenness.suddenNoTrauma'),
          value: 'suddenly_but_not_due_to_trauma'
        },
        {
          label: I18n.t('evaluationMedical.problemSuddenness.gradually'),
          value: 'gradually'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.progressionOfCondition.label'),
      formikKey: 'condition_progression',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('evaluationMedical.progressionOfCondition.improving'),
          value: 'improve'
        },
        {
          label: I18n.t('evaluationMedical.progressionOfCondition.worsening'),
          value: 'worsen'
        },
        {
          label: I18n.t('evaluationMedical.progressionOfCondition.constant'),
          value: 'constant'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('global.notes'),
      formikKey: 'notes',
      value: '',
      fieldType: 'input',
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.generalHealthConsult'),
      formikKey: 'AssessmentandEvaluation',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('global.yes'),
          value: 'Yes'
        },
        {
          label: I18n.t('global.no'),
          value: 'No'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.surgicalRequired'),
      formikKey: 'AssessmentandEvaluation_Surgical',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('global.yes'),
          value: 'Yes'
        },
        {
          label: I18n.t('global.no'),
          value: 'No'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.yourGuess'),
      formikKey: 'AssessmentandEvaluation_Surgical_Guess',
      value: '',
      fieldType: 'input',
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.immediateFollowupRequired'),
      formikKey: 'immediate_follow_up',
      value: '',
      fieldType: 'select',
      options: [
        {
          label: I18n.t('global.yes'),
          value: 'Yes'
        },
        {
          label: I18n.t('global.no'),
          value: 'No'
        }
      ],
      validation: true
    },
    {
      label: I18n.t('evaluationMedical.plan'),
      formikKey: 'planOfAction',
      value: '',
      fieldType: 'input',
      validation: true
    },
  ]
};

export default configArray;
