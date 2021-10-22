import MenuItem from './MenuItem';
import { 
  UsersIcon,
  ProfileIcon,
  CategoryIcon,
  NewsIcon,
  LogoutIcon
} from '../icons';
export default function LateralMenu() {
  return (
    <aside className={`
      flex flex-col
      bg-blue-700 text-white
    `}>
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
          onClick={() => console.log('logout')}
          className={`
            text-red-600
            hover:bg-red-400 hover:text-white
          `}
          />
      </ul>
    </aside>
  );
}