import Layout from '../components/template/Layout';
import BaseResponse from '../model/BaseResponse';
import { ApiService } from '../services/ApiService';
import { useState, useEffect } from 'react';
import useAuth from '../data/hook/useAuth';
import Profile from '../model/Profile';
import { EditIcon, TrashIcon } from '../components/icons';
import FormInput from '../components/inputs/FormInput';

export default function Profiles() {

  // Tela
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [tableMode, setTableMode] = useState(true);

  // Formulário
  const [name, setName] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<Profile>();
  const _id = selectedProfile?._id;

  const { getToken } = useAuth();

  useEffect(() => { getProfiles() }, []);

  async function getProfiles() {
    const response = await ApiService
      .get<BaseResponse<Profile[]>>('profiles', { headers: { 'x-access-token': getToken() } });

    setProfiles(response.data.data);
  }

  async function addProfile() {
    await ApiService
      .post<BaseResponse<Profile>>('profiles', JSON.stringify({ _id, name }),
        { headers: { 'x-access-token': getToken() } });

    getProfiles();
  }

  async function updateProfile() {
    const url = `profiles/${_id}`;

    await ApiService
      .put<BaseResponse<Profile>>(url, JSON.stringify({ _id, name }),
        { headers: { 'x-access-token': getToken() } });

    getProfiles();
  }

  async function removeProfile(id: string) {
    const url = `profiles/${id}`;

    await ApiService
      .delete<BaseResponse<Profile>>(url,
        { headers: { 'x-access-token': getToken() } });

    getProfiles();
  }

  function renderTable() {
    return (
      <div className="mt-6">
        <div className="flex justify-end">
          <button onClick={() => setTableMode(false)} className={`
            bg-blue-500 text-white px-4 py-2
            rounded-md mr-2
          `}>
            Novo Perfil
          </button>
        </div>
        <div>
          <table className="w-full rounded-xl overflow-hidden mt-6 shadow-lg">
            <thead>
              <tr>
                <th className="w-2/12 p-4">ID</th>
                <th className="w-8/12">Nome</th>
                <th className="w-2/12">Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                profiles?.map((profile, index) => {
                  return (
                    <tr className={`text-left ${index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`} key={index}>
                      <td className="p-4">{profile._id}</td>
                      <td className="">{profile.name}</td>
                      <td className="flex justify-center">
                        <button onClick={() => editProfile(profile)} className={`
                          flex justify-center items-center
                          text-blue-600 rounded-full p-2 m-1
                          hover:bg-blue-50
                        `}>
                          {EditIcon}
                        </button>
                        <button onClick={() => removeProfile(profile._id)} className={`
                          flex justify-center items-center
                          text-red-600 rounded-full p-2 m-1
                          hover:bg-red-50
                        `}>
                          {TrashIcon}
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function renderForm() {
    return (
      <div>
        <div>
          {_id ?
            <FormInput
              label="ID"
              value={_id}
              readOnly
            /> : false}

          <FormInput
            label="Nome"
            value={name}
            changeValue={setName}
          />
        </div>
        <div className="flex justify-end mt-3">
          <button className={`
            bg-blue-500 text-white 
            px-4 py-2 rounded-md mr-2
          `} onClick={() => handleSubmit()}>
            {_id ? 'Alterar' : 'Salvar'}
          </button>

          <button className={`
            bg-red-500 text-white 
            px-4 py-2 rounded-md
          `} onClick={() => cancel()}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  async function handleSubmit() {
    if (_id) {
      await updateProfile();
    } else {
      await addProfile();
    }
    setSelectedProfile({ _id: '', name: '' });
    setName('');
    setTableMode(true);
  }

  function cancel() {
    setSelectedProfile({ _id: '', name: '' });
    setName('');
    setTableMode(true);
  }

  function editProfile(profile: Profile) {
    setSelectedProfile(profile);
    setName(profile.name);
    setTableMode(false);
  }

  return (
    <Layout title={'Perfis'} subtitle={'Gestão de perfis'}>
      {tableMode ? renderTable() : renderForm()}
    </Layout>
  );
};