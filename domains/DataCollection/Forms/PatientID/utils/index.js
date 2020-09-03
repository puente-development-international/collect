import { checkOnlineStatus } from '../../../../../modules/offline';
import { getAllData, getData, deleteData } from '../../../../../modules/async-storage'
import { postObjectsToClass } from '../../../../../services/parse/crud';

const backgroundPostPatient = () => {
  const interval = setInterval(() => {
    checkOnlineStatus()
      .then((isConnected) => {
        // only post if connected to internet
        if (isConnected) {
          getAllData().then((allAsyncData) => {
            // contains all the available keys
            const allKeys = allAsyncData.map((a) => a[0]);
            allKeys.forEach((item) => {
              // check for PatiendID objects stored in async
              if (item.includes('PatientID-')) {
                getData(item)
                  .then((postParams) => {
                    postObjectsToClass(postParams)
                      .then(() => {
                        // delete item from async after it has been posted to parse
                        deleteData(item);
                      }, () => {
                      });
                  });
              }
            });
          });
        }
      });
  }, 10000);
  // not sure if this is needed
  return () => {
    clearInterval(interval);
  };
}

export { backgroundPostPatient };