import useAuth from '../data/hook/useAuth';
import router from 'next/router';

interface CheckAuthenticationProps {
  children?: any;
}

export default function CheckAuthentication(props: CheckAuthenticationProps) {
  const { userLogged } = useAuth();

  function renderContent() {
    return (
      <>
        {props.children}
      </>
    );
  }

  if (userLogged) {
    return renderContent();
  } else {
    () => router.push('/authentication');
    return null;
  }
}