const generateRandomID = () => Math.random().toString(20).substr(2, 12);
const isEmpty = (str) => (!str || str.length === 0);

export { isEmpty, generateRandomID };
