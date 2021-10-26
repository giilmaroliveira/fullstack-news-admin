import LateralMenu from './LateralMenu';
import Header from './Header';
import Content from './Content';
import CheckAuthencation from '../../auth/CheckAuthentication';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <CheckAuthencation>
      <div className="flex h-screen w-screen">
        <LateralMenu />
        <div className={`flex flex-col w-full p-7`}>
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>
            {props.children}
          </Content>
        </div>
      </div>
    </CheckAuthencation>
  );
}