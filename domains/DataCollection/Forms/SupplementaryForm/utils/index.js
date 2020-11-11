function addSelectTextInputs(values, formObject) {
  Object.entries(values).forEach(([key, val]) => {
    if (key.slice(0, 2) === '__') {
      let keys = key.split("__")
      const formikKey = keys[1];
      const formikOrigVal = keys[2];
      const index = formObject[formikKey].indexOf(formikOrigVal)
      formObject[formikKey][index] = formikOrigVal + "__" + val;
      delete formObject[key];
    }
  })
  return formObject;
}

export default addSelectTextInputs;