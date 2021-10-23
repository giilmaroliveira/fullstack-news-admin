import Profile from './Profile';

export default interface User {
  id: string;
  name: string;
  lastname: string;
  fullname: string;
  email: string;
  profile: Profile;
}
