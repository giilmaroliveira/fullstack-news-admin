import Image from 'next/image';
import logoFullStackNews from '../../../public/images/logo.png';

export default function Logo() {
  return (
    <div className="h-16 w-16">
      <Image src={logoFullStackNews} alt={'Logo FullStack News'} />
    </div>
  );
}