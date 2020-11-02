import * as yup from 'yup';

export default function yupValidationPicker(fields) {
  var validationSchema = yup.object().shape({});
  fields.map((result) => {
    const { label, formikKey, fieldType, validation, options } = result;
    if (validation) {
      switch (fieldType) {
        case 'input':
          var resultSchema = {};
          resultSchema[formikKey] = yup.string().label(label).required()
          var resultObject = yup.object().shape(resultSchema);
          validationSchema = validationSchema.concat(resultObject);
          break;
        case 'numberInput':
          var resultSchema = {};
          resultSchema[formikKey] = yup.string().label(label).required()
          var resultObject = yup.object().shape(resultSchema);
          validationSchema = validationSchema.concat(resultObject);
          break;
        case 'select':
          var resultSchema = {};
          resultSchema[formikKey] = yup.string().label(label).required()
          var resultObject = yup.object().shape(resultSchema);
          validationSchema = validationSchema.concat(resultObject);
          break;
        case 'autofill':
          var resultSchema = {};
          resultSchema[formikKey] = yup.string().label(label).required()
          var resultObject = yup.object().shape(resultSchema);
          validationSchema = validationSchema.concat(resultObject);
          break;
        case 'geolocation':
          var resultSchema = {};
          resultSchema[formikKey] = yup.object().label(label).required()
          var resultObject = yup.object().shape(resultSchema);
          validationSchema = validationSchema.concat(resultObject);
          break;
        case 'multiInputRow':
          options.map((option) => {
            var resultSchema = {};
            resultSchema[option] = yup.string().label(label).required()
            var resultObject = yup.object().shape(resultSchema);
            validationSchema = validationSchema.concat(resultObject);
          })
          break;
        case 'multiInputRowNum':
          options.map((option) => {
            var resultSchema = {};
            resultSchema[option] = yup.string().label(label).required()
            var resultObject = yup.object().shape(resultSchema);
            validationSchema = validationSchema.concat(resultObject);
          })
          break;
        default:
          break;
      }
    }
  })
  return validationSchema;
}