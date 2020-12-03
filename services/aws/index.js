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
        response.data.forEach((object) => {
          if (!results.includes(object[parameter].toUpperCase().trim()) && object[parameter] != "") {
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
          response.data.forEach((object) => {
            if (!results.includes(object[key].toUpperCase().trim()) && object[key] != "") {
              results.push(object[key]);
            }
          })
          allData[key] = results;
        })
        return allData;
      }
    })
    .catch((error) => {
      console.log(error); // eslint-disable-line
    });
}

export default retrievePuenteAutofillData;
