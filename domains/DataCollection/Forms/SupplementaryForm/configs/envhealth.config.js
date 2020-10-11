const configArray = {
  class: 'HistoryEnvironmentalHealth',
  name: 'Environmental Health Form',
  fields: [{
    label: 'Years Lived in the Community',
    formikKey: 'yearsLivedinthecommunity',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Less than 1 Year',
        value: 'lessThan1'
      },
      {
        label: '1-2 years',
        value: '1_2'
      },
      {
        label: '3-4 years',
        value: '3_4'
      },
      {
        label: '5-10 years',
        value: '5_10'
      },
      {
        label: '10+ years',
        value: 'moreThan10'
      }
    ]
  },
  {
    label: 'Years Lived in This House',
    formikKey: 'yearsLivedinThisHouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Less than 1 Year',
        value: 'lessThan1'
      },
      {
        label: '1-2 years',
        value: '1_2'
      },
      {
        label: '3-4 years',
        value: '3_4'
      },
      {
        label: '5-10 years',
        value: '5_10'
      },
      {
        label: '10+ years',
        value: 'moreThan10'
      }
    ]

  },
  {
    label: 'Biggest Problem of the Community',
    formikKey: 'biggestproblemofcommunity',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Water Access',
    formikKey: 'waterAccess',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Everyday',
        value: 'everyday'
      },
      {
        label: '4-6 days a week',
        value: '4-6AWeek'
      },
      {
        label: '2-3 days per week',
        value: '2-3AWeek'
      },
      {
        label: 'Less than Or Equal to 1 Day per week',
        value: '1AWeek'
      },
      {
        label: '1 Day per month',
        value: '1AMonth'
      },
      {
        label: 'Never',
        value: 'Never'
      }
    ]
  },
  {
    label: 'Type of Water Do you Drink',
    formikKey: 'typeofWaterdoyoudrink',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Bottled',
        value: 'bottled'
      },
      {
        label: 'Tap',
        value: 'tap'
      },
      {
        label: 'Filtered',
        value: 'filtered'
      }
    ]
  },
  {
    label: 'Bathroom Access',
    formikKey: 'bathroomAccess',
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
    label: 'Latrine Access',
    formikKey: 'latrineAccess',
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
    label: 'Clinic Access',
    formikKey: 'clinicAccess',
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
    label: 'Where do you go for medical problems?',
    formikKey: 'medicalproblemswheredoyougo',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Where do you go for dental problems?',
    formikKey: 'dentalproblemswheredoyougo',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Times per Week Trash is Collected',
    formikKey: 'timesperweektrashcollected',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Where is trash left between pickups?',
    formikKey: 'wheretrashleftbetweenpickups',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'House Ownership',
    formikKey: 'houseownership',
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
    label: 'Condition of Floor in your house?',
    formikKey: 'conditionoFloorinyourhouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Dirt Floor Poor Condition',
        value: 'dirtPoor'
      },
      {
        label: 'Dirt Floor Working Condition',
        value: 'dirtWorking'
      },
      {
        label: 'Cement Floor Poor Condition',
        value: 'cementPoor'
      },
      {
        label: 'Cement Floor Working Condition',
        value: 'cementWorking'
      }
    ]
  },
  {
    label: 'Condition of Roof in your house?',
    formikKey: 'conditionoRoofinyourhouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Poor Condition',
        value: 'poor'
      },
      {
        label: 'Working Condition',
        value: 'working'
      }
    ]
  },
  {
    label: 'Type of Stove Top',
    formikKey: 'stoveType',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'Constructed stove with ventilation',
        value: 'cementStove-Ventilation'
      },
      {
        label: 'Stovetop with tank or electricity',
        value: 'stoveTop'
      },
      {
        label: 'Open Fire',
        value: 'openfire-noVentilation'
      }
    ]
  },
  {
    label: 'Number of Individuals Living in the House',
    formikKey: 'numberofIndividualsLivingintheHouse',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'Number of children Living in this House under age of 5',
    formikKey: 'numberofChildrenLivinginHouseUndertheAgeof5',
    value: '',
    fieldType: 'input'
  },
    // {
    //   label: "Latitude",
    //   formikKey: 'latitude',
    //   value: 0
    // },
    // {
    //   label: "Longitude",
    //   formikKey: 'longitude',
    //   value: 0
    // },
    // {
    //   label: "Surveying User",
    //   formikKey: 'surveyingUser',
    //   value: "Test"
    // },
    // {
    //   label: "Surveying Organization",
    //   formikKey: 'surveyingOrganization',
    //   value: "Test"
    // },
  ]
};

export default configArray;
