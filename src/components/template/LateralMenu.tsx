import MenuItem from './MenuItem';
import { 
  UsersIcon,
  ProfileIcon,
  CategoryIcon,
  NewsIcon,
  LogoutIcon
} from '../icons';
import Logo from './Logo';
import useAuth from '../../data/hook/useAuth';

export default function LateralMenu() {

  const { logout } = useAuth();

  return (
    <aside className={`
      flex flex-col
      bg-blue-700 text-white
    `}>
      <div className="flex flex-col items-center justify-center h-20 w-20">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/users" text="Usuários" icon={UsersIcon} />
        <MenuItem url="/profiles" text="Perfis" icon={ProfileIcon} />
        <MenuItem url="/categories" text="Categorias" icon={CategoryIcon} />
        <MenuItem url="/news" text="Notícias" icon={NewsIcon} />
      </ul>
      <ul>
        <MenuItem 
          text="Sair" 
          icon={LogoutIcon}
          onClick={logout}
          className={`
            text-red-600
            hover:bg-red-400 hover:text-white
          `}
          />
      </ul>
    </aside>
  );
}