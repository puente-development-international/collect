import { getData } from '../../../../modules/async-storage';

const surveyingUserFailsafe = async () => {
  const user = await getData('currentUser');
  return user.username || user.email || user.id || user.firstname || user.lastname;
};

export default surveyingUserFailsafe;
