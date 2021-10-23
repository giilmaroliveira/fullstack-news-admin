import User from './User';

export default interface UserAuth {
  auth: boolean;
  user: User;
  token: string;
}