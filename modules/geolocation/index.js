import * as Location from 'expo-location';

export default async function getLocation() {
  const { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') {
    return 'Permission to access location was denied';
  }

  const currentLocation = await Location.getCurrentPositionAsync({});
  return currentLocation;
}
// import * as React from 'react';
// import * as Location from 'expo-location';

// const getLocation = () => {
//   const [location, setLocation] = React.useState(null);
//   const [errorMsg, setErrorMsg] = React.useState(null);

//   React.useEffect(() => {
//     (async () => {
//       const { status } = await Location.requestPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//       }

//       const currentLocation = await Location.getCurrentPositionAsync({});
//       setLocation(currentLocation);
//     })();
//   });

//   let text = 'Waiting..';

//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return text;
// };

// export default getLocation;
