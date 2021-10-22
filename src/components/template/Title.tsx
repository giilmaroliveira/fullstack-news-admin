interface TitleProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="font-black text-3xl text-black">{props.title}</h1>
      <h2 className="font-light text-s text-gray-600">{props.subtitle}</h2>
    </div>
  );
}