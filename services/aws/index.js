import selectedENV from '../../environment';

const axios = require('axios');

function retrievePuenteAutofillData(parameter) {
  const { AWS_LAMBDA_URL } = selectedENV;
  return axios.get(AWS_LAMBDA_URL, {
    params: {
      bucket_name: 'google-sheets-lambda',
      key: 'test/puente-test.json',
      parameter: 'all'
    }
  })
    .then((response) => {
      if (parameter !== 'all') {
        const results = [];
        const resultsCapitalized = [];
        response.data.forEach((object) => {
          const objectCapitilized = object[parameter].toUpperCase().trim()
          if (!resultsCapitalized.includes(objectCapitilized) && object[parameter] != "") {
            resultsCapitalized.push(objectCapitilized);
            results.push(object[parameter]);
          }
        });
        return results;
      }
      else {
        console.log("KEYS", Object.keys(response.data[0]))
        const keys = Object.keys(response.data[0]);
        const allData = {}
        keys.forEach((key) => {
          const results = [];
          const resultsCapitalized = [];
          response.data.forEach((object) => {
            const objectCapitilized = object[key].toUpperCase().trim()
            console.log(object)
            if (!resultsCapitalized.includes(objectCapitilized) && object[key] != "") {
              resultsCapitalized.push(objectCapitilized);
              results.push(object[key]);
            }
          })
          allData[key] = results;
        })
        console.log(allData);
        return allData;
      }
    })
    .catch((error) => {
      console.log(error); // eslint-disable-line
    });
}

export default retrievePuenteAutofillData;
