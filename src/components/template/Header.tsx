import Title from './Title';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  return (
    <Title title={props.title} subtitle={props.subtitle} />
  );
}