import Link from 'next/link';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  href: string;
  name: string;
};

const NavbarLink = ({ href, name }: Props) => {
  return (
    <Link href={href} className={`${inter.className} uppercase text-white hover:text-yellow-300`}>
      {name}
    </Link>
  );
};

export default NavbarLink;
