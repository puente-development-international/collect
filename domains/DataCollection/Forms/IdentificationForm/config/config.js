import I18n from '../../../../../modules/i18n';

const configArray = [
  {
    label: I18n.t('identificationForm.demographics'),
    fieldType: 'header',
    formikKey: 'none_bi',
  },
  {
    label: I18n.t('global.fName'),
    formikKey: 'fname',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('global.lName'),
    formikKey: 'lname',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('identificationForm.nickname'),
    formikKey: 'nickname',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('identificationForm.dob.label'),
    formikKey: 'dob',
    value: '',
    fieldType: 'multiInputRowNum',
    options: [
      I18n.t('identificationForm.dob.month'),
      I18n.t('identificationForm.dob.day'),
      I18n.t('identificationForm.dob.year')
    ],
    validation: true
  },
  {
    label: I18n.t('identificationForm.sex.label'),
    formikKey: 'sex',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('identificationForm.sex.male'),
        value: 'male'
      },
      {
        label: I18n.t('identificationForm.sex.female'),
        value: 'female'
      },
      {
        label: I18n.t('identificationForm.sex.notSay'),
        value: 'prefer_not_to_say'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('identificationForm.telephone'),
    formikKey: 'telephoneNumber',
    value: '',
    fieldType: 'numberInput',
    validation: true
  },
  // {
  //   label: 'Demographic Information',
  //   fieldType: 'header',
  //   formikKey: 'none_bi2',

  // },
  {
    label: I18n.t('identificationForm.marriageStatus.label'),
    formikKey: 'marriageStatus',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('identificationForm.marriageStatus.single'),
        value: 'single'
      },
      {
        label: I18n.t('identificationForm.marriageStatus.married'),
        value: 'married'
      },
      {
        label: I18n.t('identificationForm.marriageStatus.cohabitation'),
        value: 'free_union'
      },
      {
        label: I18n.t('identificationForm.marriageStatus.widow'),
        value: 'widow'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('identificationForm.occupation'),
    formikKey: 'occupation',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('identificationForm.educationLevel.label'),
    formikKey: 'educationLevel',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('identificationForm.educationLevel.lessPrim'),
        value: 'lessThanprimary'
      },
      {
        label: I18n.t('identificationForm.educationLevel.prim'),
        value: 'primary'
      },
      {
        label: I18n.t('identificationForm.educationLevel.someHS'),
        value: 'someHighSchool'
      },
      {
        label: I18n.t('identificationForm.educationLevel.hs'),
        value: 'highschool'
      },
      {
        label: I18n.t('identificationForm.educationLevel.someCollege'),
        value: 'someCollege'
      },
      {
        label: I18n.t('identificationForm.educationLevel.college'),
        value: 'college'
      },
    ],
    validation: true
  },
  {
    label: I18n.t('identificationForm.location'),
    fieldType: 'header',
    formikKey: 'none_location',
    validation: true
  },
  {
    label: I18n.t('global.commName'),
    formikKey: 'communityname',
    value: '',
    fieldType: 'autofill',
    parameter: 'Communities',
    validation: true
  },
  {
    label: I18n.t('global.city'),
    formikKey: 'city',
    value: '',
    fieldType: 'autofill',
    parameter: 'City',
    validation: true
  },
  // {
  //   label: "Province",
  //   formikKey: 'province',
  //   value: ""
  // },
  {
    label: I18n.t('identificationForm.insurance'),
    fieldType: 'header',
    formikKey: 'none_insurance',
  },
  {
    label: I18n.t('identificationForm.insNumber'),
    formikKey: 'insuranceNumber',
    value: '',
    fieldType: 'numberInput',
    validation: true
  },
  {
    label: I18n.t('identificationForm.insProvider'),
    formikKey: 'insuranceProvider',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('identificationForm.clinicProvider'),
    formikKey: 'clinicProvider',
    value: '',
    fieldType: 'input',
    validation: true
  },
  // {
  //   label: "Cedula Number",
  //   formikKey: 'cedulaNumber',
  //   value: ""
  // },
  {
    label: I18n.t('identificationForm.location'),
    formikKey: 'location',
    value: {},
    fieldType: 'geolocation',
    validation: true
  },
  // {
  //   label: 'Latitude',
  //   formikKey: 'latitude',
  //   value: 0,
  //   fieldType: 'geolocation'
  // },
  // {
  //   label: 'Longitude',
  //   formikKey: 'longitude',
  //   value: 0,
  //   fieldType: 'geolocation'
  // },
  {
    label: I18n.t('identificationForm.household'),
    fieldType: 'header',
    formikKey: 'none_household'
  },
  {
    label: I18n.t('identificationForm.household'),
    formikKey: 'householdId',
    value: '',
    fieldType: 'household'
  }
];

export default configArray;
