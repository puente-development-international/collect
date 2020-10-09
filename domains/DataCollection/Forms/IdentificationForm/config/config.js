const configArray = [
  {
    label: 'Demographics',
    fieldType: 'header',
    formikKey: 'none_bi',

  },
  {
    label: 'First Name',
    formikKey: 'fname',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Last Name',
    formikKey: 'lname',
    value: '',
    fieldType: 'input'

  },
  {
    label: 'Nickname',
    formikKey: 'nickname',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Date of Birth',
    formikKey: 'dob',
    value: '',
    fieldType: 'multiInputRow',
    options: [
      'Month',
      'Day',
      'Year'
    ]
  },
  {
    label: 'Sex',
    formikKey: 'sex',
    value: '',
    fieldType: 'select',
    options: [
      'Male',
      'Female',
      'Prefer Not to Say'
    ]
  },
  {
    label: 'Telephone Number',
    formikKey: 'telephoneNumber',
    value: '',
    fieldType: 'input'
  },
  // {
  //   label: 'Demographic Information',
  //   fieldType: 'header',
  //   formikKey: 'none_bi2',

  // },
  {
    label: 'Marriage Status',
    formikKey: 'marriageStatus',
    value: '',
    fieldType: 'select',
    options: [
      'single',
      'married',
      'free_union',
      'widow'
    ]
  },
  {
    label: 'Occupation',
    formikKey: 'occupation',
    value: '',
    fieldType: 'input'

  },
  {
    label: 'Education Level',
    formikKey: 'educationLevel',
    value: '',
    fieldType: 'select',
    options: [
      'lessThanprimary',
      'primary',
      'someHighSchool',
      'highschool',
      'someCollege',
      'college'
    ]
  },
  {
    label: 'Location',
    fieldType: 'header',
    formikKey: 'none_location',
  },
  {
    label: 'Community Name',
    formikKey: 'communityname',
    value: '',
    fieldType: 'autofill',
    parameter: 'Communities'
  },
  {
    label: 'City',
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
    label: 'Insurance',
    fieldType: 'header',
    formikKey: 'none_insurance',

  },
  {
    label: 'Insurance Number',
    formikKey: 'insuranceNumber',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Insurance Provider',
    formikKey: 'insuranceProvider',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Clinic Provider',
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
    label: 'Latitude',
    formikKey: 'latitude',
    value: 0,
    fieldType: 'geolocation'
  },
  {
    label: 'Longitude',
    formikKey: 'longitude',
    value: 0,
    fieldType: 'geolocation'
  },
  {
    label: 'Household',
    fieldType: 'header',
    formikKey: 'none_household',

  },
  {
    label: 'Household',
    formikKey: 'householdId',
    value: '',
    fieldType: 'household'
  }
];

export default configArray;
