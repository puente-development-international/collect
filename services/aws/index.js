const axios = require('axios');


function retrievePuenteAutofillData(parameter) {
  return axios.get('https://98kngyxax2.execute-api.us-east-1.amazonaws.com/default/s3-json-to-client', {
    params: {
      bucket_name: 'google-sheets-lambda',
      key: 'test/puente-test.json',
      parameter: 'all'
    }
  })
    .then(function (response) {
      // console.log(response['data']);
      // return response['data'];
      var results = []
      response['data'].forEach(object => {
        // console.log(city);
        // console.log(city['City']);
        if (!results.includes(object[parameter])) {
          results.push(object[parameter])
        }
      });
      console.log(parameter);
      console.log(results);
      return results;
    })
    .catch(function (error) {
      console.log(error);
    })
  //   .finally(function (data) {
  //     console.log("API Gateway and Lambda Finished")
  //     return data;
  //   });
}

export { retrievePuenteAutofillData }