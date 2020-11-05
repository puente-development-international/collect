const configArray = [
  {
    label: 'identificationForm.demographics',
    fieldType: 'header',
    formikKey: 'none_bi',

  },
  {
    label: 'global.fName',
    formikKey: 'fname',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'global.lName',
    formikKey: 'lname',
    value: '',
    fieldType: 'input'

  },
  {
    label: 'identificationForm.nickname',
    formikKey: 'nickname',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'identificationForm.dob.label',
    formikKey: 'dob',
    value: '',
    fieldType: 'multiInputRowNum',
    options: [
      'identificationForm.dob.month',
      'identificationForm.dob.day',
      'identificationForm.dob.year'
    ]
  },
  {
    label: 'identificationForm.sex.label',
    formikKey: 'sex',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'identificationForm.sex.male',
        value: 'male'
      },
      {
        label: 'identificationForm.sex.female',
        value: 'female'
      },
      {
        label: 'identificationForm.sex.notSay',
        value: 'prefer_not_to_say'
      }
    ]
  },
  {
    label: 'identificationForm.telephone',
    formikKey: 'telephoneNumber',
    value: '',
    fieldType: 'numberInput'
  },
  // {
  //   label: 'Demographic Information',
  //   fieldType: 'header',
  //   formikKey: 'none_bi2',

  // },
  {
    label: 'identificationForm.marriageStatus.label',
    formikKey: 'marriageStatus',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'identificationForm.marriageStatus.single',
        value: 'single'
      },
      {
        label: 'identificationForm.marriageStatus.married',
        value: 'married'
      },
      {
        label: 'identificationForm.marriageStatus.cohabitation',
        value: 'free_union'
      },
      {
        label: 'identificationForm.marriageStatus.widow',
        value: 'widow'
      }
    ]
  },
  {
    label: 'identificationForm.occupation',
    formikKey: 'occupation',
    value: '',
    fieldType: 'input'

  },
  {
    label: 'identificationForm.educationLevel.label',
    formikKey: 'educationLevel',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'identificationForm.educationLevel.lessPrim',
        value: 'lessThanprimary'
      },
      {
        label: 'identificationForm.educationLevel.prim',
        value: 'primary'
      },
      {
        label: 'identificationForm.educationLevel.someHS',
        value: 'someHighSchool'
      },
      {
        label: 'identificationForm.educationLevel.hs',
        value: 'highschool'
      },
      {
        label: 'identificationForm.educationLevel.someCollege',
        value: 'someCollege'
      },
      {
        label: 'identificationForm.educationLevel.college',
        value: 'college'
      },
    ]
  },
  {
    label: 'identificationForm.location',
    fieldType: 'header',
    formikKey: 'none_location',
  },
  {
    label: 'global.commName',
    formikKey: 'communityname',
    value: '',
    fieldType: 'autofill',
    parameter: 'Communities'
  },
  {
    label: 'global.city',
    formikKey: 'city',
    value: '',
    fieldType: 'autofill',
    parameter: 'City'
  },
  // {
  //   label: "Province",
  //   formikKey: 'province',
  //   value: ""
  // },
  {
    label: 'identificationForm.insurance',
    fieldType: 'header',
    formikKey: 'none_insurance',

  },
  {
    label: 'identificationForm.insNumber',
    formikKey: 'insuranceNumber',
    value: '',
    fieldType: 'numberInput'
  },
  {
    label: 'identificationForm.insProvider',
    formikKey: 'insuranceProvider',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'identificationForm.clinicProvider',
    formikKey: 'clinicProvider',
    value: '',
    fieldType: 'input'
  },
  // {
  //   label: "Cedula Number",
  //   formikKey: 'cedulaNumber',
  //   value: ""
  // },
  {
    formikKey: 'location',
    value: {},
    fieldType: 'geolocation'
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
    label: 'identificationForm.household',
    fieldType: 'header',
    formikKey: 'none_household',

  },
  {
    label: 'identificationForm.household',
    formikKey: 'householdId',
    value: '',
    fieldType: 'household'
  }
];

export default configArray;
