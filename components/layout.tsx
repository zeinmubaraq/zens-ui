import Navbar from './navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="mt-16">{children}</main>
    </>
  );
};

export default Layout;
