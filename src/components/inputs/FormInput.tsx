interface FormInputProps {
  label: string;
  value: string;
  type?: 'email' | 'text' | 'password';
  changeValue: (newValue: string) => void;
}

export default function FormInput(props: FormInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input 
        value={props.value}
        type={props.type ?? 'text'}
        onChange={e => props.changeValue?.(e.target.value)}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2
          border focus:border-blue-500 focus:bg-white
          focus:outline-none
        `} />
    </div>
  );
}