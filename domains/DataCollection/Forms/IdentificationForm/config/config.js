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
    fieldType: 'multiInputRowNum',
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
      {
        label: 'Male',
        value: 'male'
      },
      {
        label: 'Female',
        value: 'female'
      },
      {
        label: 'Prefer Not to Say',
        value: 'prefer_not_to_say'
      }
    ]
  },
  {
    label: 'Telephone Number',
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
    label: 'Marriage Status',
    formikKey: 'marriageStatus',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Single',
        value: 'single'
      },
      {
        label: 'Married',
        value: 'married'
      },
      {
        label: 'Cohabitation',
        value: 'free_union'
      },
      {
        label: 'Widow',
        value: 'widow'
      }
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
      {
        label: 'Less than Primary',
        value: 'lessThanprimary'
      },
      {
        label: 'Primary',
        value: 'primary'
      },
      {
        label: 'Some high school',
        value: 'someHighSchool'
      },
      {
        label: 'Highschool',
        value: 'highschool'
      },
      {
        label: 'Some college',
        value: 'someCollege'
      },
      {
        label: 'College',
        value: 'college'
      },
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
