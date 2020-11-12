const configArray = {
  class: 'HistoryEnvironmentalHealth',
  name: 'environmentalHealth.name',
  customForm: true,
  fields: [
    {
      label: 'Vitals',
      fieldType: 'header',
      formikKey: 'none_vitals',
    },
    {
      label: 'Height',
      sideLabel: 'Inches',
      formikKey: 'height',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'Weight',
      sideLabel: 'Pounds',
      formikKey: 'weight',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'Body Mass Index',
      formikKey: 'bmi',
      value: '',
      fieldType: 'input',
      validation: false
    },
    {
      label: 'Body Temperature',
      sideLabel: '°Celcius',
      formikKey: 'bodyTemp',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'Pulse',
      sideLabel: 'Beats Per Minute',
      formikKey: 'pulse',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'Respiratory Rate',
      sideLabel: 'Breaths Per Minute',
      formikKey: 'respiratory',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'Blood Pressure',
      formikKey: 'blood_pressure',
      value: '',
      fieldType: 'multiInputRow',
      options: [
        {
          label: 'Systolic',
          value: 'Systolic'
        },
        {
          label: '/',
          textSplit: true
        },
        {
          label: 'Diastolic',
          value: 'Diastolic'
        }
      ],
    },
    {
      label: 'Blood Oxygen',
      sideLabel: 'mm Hg',
      formikKey: 'blood_oxygen',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'Blood Sugar',
      sideLabel: 'mg/dL',
      formikKey: 'blood_sugar',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'Hemoglobin Levels',
      sideLabel: 'g/dL',
      formikKey: 'blood_pressure',
      value: '',
      fieldType: 'inputSideLabel',
      validation: false
    },
    {
      label: 'Pain',
      formikKey: 'pain',
      value: '',
      fieldType: 'input',
      validation: false
    },
  ]
};

export default configArray;
