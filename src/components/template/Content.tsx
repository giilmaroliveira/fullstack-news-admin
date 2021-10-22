interface ContentProps {
  children?: any;
}

export default function Content(props: ContentProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}