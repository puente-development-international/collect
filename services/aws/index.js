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
      const results = [];
      response.data.forEach((object) => {
        if (!results.includes(object[parameter])) {
          results.push(object[parameter]);
        }
      });
      return results;
    })
    .catch((error) => {
      console.log(error); // eslint-disable-line
    });
}

export default retrievePuenteAutofillData;
