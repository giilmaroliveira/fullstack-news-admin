import { useState } from 'react';
import FormInput from '../components/inputs/FormInput';
import useAuth from '../data/hook/useAuth';

export default function Authentication() {

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    login(email, password);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-6 w-full md:w-1/3">

        <h1 className="text-3xl font-bold mb-5 text-center">FullStack News</h1>

        <FormInput
          label="E-mail"
          value={email}
          type={'email'}
          changeValue={setEmail} />

        <FormInput
          label="Senha"
          value={password}
          type={'password'}
          changeValue={setPassword} />

        <button onClick={submit} className={`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `}>
          Entrar
        </button>
      </div>
    </div>
  );
}