import { createContext, useState, useEffect } from "react";
import { ApiService } from '../../services/ApiService';
import UserAuth from '../../model/UserAuth';
import router from 'next/router';

interface AuthContextProps {
  login?: (email: string, password: string) => Promise<void>;
  logout?: () => void;
  userLogged?: boolean;
  getToken?: () => string;
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {

  const [userLogged, setUserLogged] = useState(false);
  const sessionKey = 'fullstack-news-key';

  async function login(email: string, password: string) {
    const body = {
      email,
      password
    };

    const response = await ApiService.post<UserAuth>('auth', JSON.stringify(body));
    const user = response.data;

    if (user?.auth) {
      setToken(user.token);
      manageSession();
    }
  }

  function logout() {
    removeToken();
    setUserLogged(false);
    router.push('authentication');
  }

  function setToken(token: string): void {
    sessionStorage.setItem(sessionKey, token);
  }

  function getToken(): string {
    return sessionStorage.getItem(sessionKey) || '';
  }

  function removeToken(): void {
    sessionStorage.removeItem(sessionKey);
  }

  function manageSession() {
    const token = getToken();

    if (token) {
      setUserLogged(true);
      router.push('/profiles');
    } else {
      router.push('/authentication');
    }
  }

  useEffect(() => { 
    manageSession();
  }, []);

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      userLogged,
      getToken
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;