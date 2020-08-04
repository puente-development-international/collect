const axios = require('axios');

function retrievePuenteAutofillData(parameter) {
  return axios.get('https://98kngyxax2.execute-api.us-east-1.amazonaws.com/default/s3-json-to-client', {
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
