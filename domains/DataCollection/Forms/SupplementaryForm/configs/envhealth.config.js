const configArray = {
  class: 'HistoryEnvironmentalHealth',
  name: 'environmentalHealth.name',
  customForm: false,
  fields: [{
    label: 'environmentalHealth.yearsLived.community',
    formikKey: 'yearsLivedinthecommunity',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.yearsLived.less1',
        value: 'lessThan1'
      },
      {
        label: 'environmentalHealth.yearsLived.1_2',
        value: '1_2'
      },
      {
        label: 'environmentalHealth.yearsLived.3_4',
        value: '3_4'
      },
      {
        label: 'environmentalHealth.yearsLived.3_4',
        value: '5_10'
      },
      {
        label: 'environmentalHealth.yearsLived.moreThan10',
        value: 'moreThan10'
      }
    ]
  },
  {
    label: 'environmentalHealth.yearsLived.house',
    formikKey: 'yearsLivedinThisHouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.yearsLived.less1',
        value: 'lessThan1'
      },
      {
        label: 'environmentalHealth.yearsLived.1_2',
        value: '1_2'
      },
      {
        label: 'environmentalHealth.yearsLived.3_4',
        value: '3_4'
      },
      {
        label: 'environmentalHealth.yearsLived.3_4',
        value: '5_10'
      },
      {
        label: 'environmentalHealth.yearsLived.moreThan10',
        value: 'moreThan10'
      }
    ]

  },
  {
    label: 'environmentalHealth.biggestProblemComm',
    formikKey: 'biggestproblemofcommunity',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'environmentalHealth.waterAccess.label',
    formikKey: 'waterAccess',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.waterAccess.everyday',
        value: 'everyday'
      },
      {
        label: 'environmentalHealth.waterAccess.4_6',
        value: '4-6AWeek'
      },
      {
        label: 'environmentalHealth.waterAccess.2_3',
        value: '2-3AWeek'
      },
      {
        label: 'environmentalHealth.waterAccess.1perWeek',
        value: '1AWeek'
      },
      {
        label: 'environmentalHealth.waterAccess.1perMonth',
        value: '1AMonth'
      },
      {
        label: 'environmentalHealth.waterAccess.never',
        value: 'Never'
      }
    ]
  },
  {
    label: 'environmentalHealth.typeOfWater.label',
    formikKey: 'typeofWaterdoyoudrink',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.typeOfWater.bottled',
        value: 'bottled'
      },
      {
        label: 'environmentalHealth.typeOfWater.tap',
        value: 'tap'
      },
      {
        label: 'environmentalHealth.typeOfWater.filtered',
        value: 'filtered'
      }
    ]
  },
  {
    label: 'environmentalHealth.bathroomAccess',
    formikKey: 'bathroomAccess',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'global.yes',
        value: 'Yes'
      },
      {
        label: 'global.no',
        value: 'No'
      }
    ]
  },
  {
    label: 'environmentalHealth.latrineAccess',
    formikKey: 'latrineAccess',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'global.yes',
        value: 'Yes'
      },
      {
        label: 'global.no',
        value: 'No'
      }
    ]
  },
  {
    label: 'environmentalHealth.clinicAccess',
    formikKey: 'clinicAccess',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'global.yes',
        value: 'Yes'
      },
      {
        label: 'global.no',
        value: 'No'
      }
    ]
  },
  {
    label: 'environmentalHealth.medicalProblemsGo',
    formikKey: 'medicalproblemswheredoyougo',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'environmentalHealth.dentalProblemsGo',
    formikKey: 'dentalproblemswheredoyougo',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'environmentalHealth.timesPerWeekTrash',
    formikKey: 'timesperweektrashcollected',
    value: '',
    fieldType: 'numberInput'
  },
  {
    label: 'environmentalHealth.trashBetweenPickups',
    formikKey: 'wheretrashleftbetweenpickups',
    value: '',
    fieldType: 'input'
  },
  {
    label: 'environmentalHealth.houseOwnership',
    formikKey: 'houseownership',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'global.yes',
        value: 'Yes'
      },
      {
        label: 'global.no',
        value: 'No'
      }
    ]
  },
  {
    label: 'environmentalHealth.floorCondition.label',
    formikKey: 'conditionoFloorinyourhouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.floorCondition.dirtFloorPoor',
        value: 'dirtPoor'
      },
      {
        label: 'environmentalHealth.floorCondition.dirtFloorWork',
        value: 'dirtWorking'
      },
      {
        label: 'environmentalHealth.floorCondition.cementPoor',
        value: 'cementPoor'
      },
      {
        label: 'environmentalHealth.floorCondition.cementWorking',
        value: 'cementWorking'
      }
    ]
  },
  {
    label: 'environmentalHealth.roofCondition.label',
    formikKey: 'conditionoRoofinyourhouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.roofCondition.poor',
        value: 'poor'
      },
      {
        label: 'environmentalHealth.roofCondition.work',
        value: 'working'
      }
    ]
  },
  {
    label: 'environmentalHealth.typeStove.label',
    formikKey: 'stoveType',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.typeStove.constructedVentilation',
        value: 'cementStove-Ventilation'
      },
      {
        label: 'environmentalHealth.typeStove.stoveTop',
        value: 'stoveTop'
      },
      {
        label: 'environmentalHealth.typeStove.openFire',
        value: 'openfire-noVentilation'
      }
    ]
  },
  {
    label: 'environmentalHealth.houseMaterials.label',
    formikKey: 'houseMaterial',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.houseMaterials.zinc',
        value: 'zinc'
      },
      {
        label: 'environmentalHealth.houseMaterials.wood',
        value: 'wood'
      },
      {
        label: 'environmentalHealth.houseMaterials.partBlock_partWood',
        value: 'partBlock_partWood'
      },
      {
        label: 'environmentalHealth.houseMaterials.block',
        value: 'block'
      }
    ]
  },
  {
    label: 'environmentalHealth.electricityAccess.label',
    formikKey: 'electricityAccess',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.electricityAccess.never',
        value: 'never'
      },
      {
        label: 'environmentalHealth.electricityAccess.sometimes',
        value: 'sometimes'
      },
      {
        label: 'environmentalHealth.electricityAccess.always',
        value: 'always'
      }
    ]
  },
  {
    label: 'environmentalHealth.foodSecurity',
    formikKey: 'foodSecurity',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'global.yes',
        value: 'Yes'
      },
      {
        label: 'global.no',
        value: 'No'
      },
      {
        label: 'global.notSure',
        value: 'not_sure'
      }
    ]
  },
  {
    label: 'environmentalHealth.govAssistance.label',
    formikKey: 'govAssistance',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: 'environmentalHealth.govAssistance.foodStamps',
        value: 'solidaridad'
      },
      {
        label: 'environmentalHealth.govAssistance.adultLiteracy',
        value: 'aprendiendo'
      },
      {
        label: 'global.other',
        value: 'other'
      }
    ]
  },
  {
    label: 'environmentalHealth.numberIndividualsHouse',
    formikKey: 'numberofIndividualsLivingintheHouse',
    value: '',
    fieldType: 'numberInput'
  },
  {
    label: 'environmentalHealth.numberChildrenUnder5',
    formikKey: 'numberofChildrenLivinginHouseUndertheAgeof5',
    value: '',
    fieldType: 'numberInput'
  },
  ]
};

export default configArray;
