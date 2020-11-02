import I18n from '../../../../../modules/i18n';

const configArray = {
  class: 'HistoryEnvironmentalHealth',
  name: I18n.t('environmentalHealth.name'),
  fields: [{
    label: I18n.t('environmentalHealth.yearsLived.community'),
    formikKey: 'yearsLivedinthecommunity',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.yearsLived.less1'),
        value: 'lessThan1'
      },
      {
        label: I18n.t('environmentalHealth.yearsLived.1_2'),
        value: '1_2'
      },
      {
        label: I18n.t('environmentalHealth.yearsLived.3_4'),
        value: '3_4'
      },
      {
        label: I18n.t('environmentalHealth.yearsLived.3_4'),
        value: '5_10'
      },
      {
        label: I18n.t('environmentalHealth.yearsLived.moreThan10'),
        value: 'moreThan10'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.yearsLived.house'),
    formikKey: 'yearsLivedinThisHouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.yearsLived.less1'),
        value: 'lessThan1'
      },
      {
        label: I18n.t('environmentalHealth.yearsLived.1_2'),
        value: '1_2'
      },
      {
        label: I18n.t('environmentalHealth.yearsLived.3_4'),
        value: '3_4'
      },
      {
        label: I18n.t('environmentalHealth.yearsLived.3_4'),
        value: '5_10'
      },
      {
        label: I18n.t('environmentalHealth.yearsLived.moreThan10'),
        value: 'moreThan10'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.biggestProblemComm'),
    formikKey: 'biggestproblemofcommunity',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.waterAccess.label'),
    formikKey: 'waterAccess',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.waterAccess.everyday'),
        value: 'everyday'
      },
      {
        label: I18n.t('environmentalHealth.waterAccess.4_6'),
        value: '4-6AWeek'
      },
      {
        label: I18n.t('environmentalHealth.waterAccess.2_3'),
        value: '2-3AWeek'
      },
      {
        label: I18n.t('environmentalHealth.waterAccess.1perWeek'),
        value: '1AWeek'
      },
      {
        label: I18n.t('environmentalHealth.waterAccess.1perMonth'),
        value: '1AMonth'
      },
      {
        label: I18n.t('environmentalHealth.waterAccess.never'),
        value: 'Never'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.typeOfWater.label'),
    formikKey: 'typeofWaterdoyoudrink',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.typeOfWater.bottled'),
        value: 'bottled'
      },
      {
        label: I18n.t('environmentalHealth.typeOfWater.tap'),
        value: 'tap'
      },
      {
        label: I18n.t('environmentalHealth.typeOfWater.filtered'),
        value: 'filtered'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.bathroomAccess'),
    formikKey: 'bathroomAccess',
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
    label: I18n.t('environmentalHealth.latrineAccess'),
    formikKey: 'latrineAccess',
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
    label: I18n.t('environmentalHealth.clinicAccess'),
    formikKey: 'clinicAccess',
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
    label: I18n.t('environmentalHealth.medicalProblemsGo'),
    formikKey: 'medicalproblemswheredoyougo',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.dentalProblemsGo'),
    formikKey: 'dentalproblemswheredoyougo',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.timesPerWeekTrash'),
    formikKey: 'timesperweektrashcollected',
    value: '',
    fieldType: 'numberInput',
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.trashBetweenPickups'),
    formikKey: 'wheretrashleftbetweenpickups',
    value: '',
    fieldType: 'input',
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.houseOwnership'),
    formikKey: 'houseownership',
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
    label: I18n.t('environmentalHealth.floorCondition.label'),
    formikKey: 'conditionoFloorinyourhouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.floorCondition.dirtFloorPoor'),
        value: 'dirtPoor'
      },
      {
        label: I18n.t('environmentalHealth.floorCondition.dirtFloorWork'),
        value: 'dirtWorking'
      },
      {
        label: I18n.t('environmentalHealth.floorCondition.cementPoor'),
        value: 'cementPoor'
      },
      {
        label: I18n.t('environmentalHealth.floorCondition.cementWorking'),
        value: 'cementWorking'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.roofCondition.label'),
    formikKey: 'conditionoRoofinyourhouse',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.roofCondition.poor'),
        value: 'poor'
      },
      {
        label: I18n.t('environmentalHealth.roofCondition.work'),
        value: 'working'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.typeStove.label'),
    formikKey: 'stoveType',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.typeStove.constructedVentilation'),
        value: 'cementStove-Ventilation'
      },
      {
        label: I18n.t('environmentalHealth.typeStove.stoveTop'),
        value: 'stoveTop'
      },
      {
        label: I18n.t('environmentalHealth.typeStove.openFire'),
        value: 'openfire-noVentilation'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.houseMaterials.label'),
    formikKey: 'houseMaterial',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.houseMaterials.zinc'),
        value: 'zinc'
      },
      {
        label: I18n.t('environmentalHealth.houseMaterials.wood'),
        value: 'wood'
      },
      {
        label: I18n.t('environmentalHealth.houseMaterials.partBlock_partWood'),
        value: 'partBlock_partWood'
      },
      {
        label: I18n.t('environmentalHealth.houseMaterials.block'),
        value: 'block'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.electricityAccess.label'),
    formikKey: 'electricityAccess',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.electricityAccess.never'),
        value: 'never'
      },
      {
        label: I18n.t('environmentalHealth.electricityAccess.sometimes'),
        value: 'sometimes'
      },
      {
        label: I18n.t('environmentalHealth.electricityAccess.always'),
        value: 'always'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.foodSecurity'),
    formikKey: 'foodSecurity',
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
      },
      {
        label: I18n.t('global.notSure'),
        value: 'not_sure'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.govAssistance.label'),
    formikKey: 'govAssistance',
    value: '',
    fieldType: 'select',
    options: [
      {
        label: I18n.t('environmentalHealth.govAssistance.foodStamps'),
        value: 'solidaridad'
      },
      {
        label: I18n.t('environmentalHealth.govAssistance.adultLiteracy'),
        value: 'aprendiendo'
      },
      {
        label: I18n.t('global.other'),
        value: 'other'
      }
    ],
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.numberIndividualsHouse'),
    formikKey: 'numberofIndividualsLivingintheHouse',
    value: '',
    fieldType: 'numberInput',
    validation: true
  },
  {
    label: I18n.t('environmentalHealth.numberChildrenUnder5'),
    formikKey: 'numberofChildrenLivinginHouseUndertheAgeof5',
    value: '',
    fieldType: 'numberInput',
    validation: true
  },
  ]
};

export default configArray;
