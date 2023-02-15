import NavbarLink from './navbar-link';

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-16 items-center justify-between">
          <span className="text-2xl font-bold uppercase text-white">Navbar</span>
          <div className="flex items-center space-x-8">
            <NavbarLink href="#" name="home" />
            <NavbarLink href="#" name="blog" />
            <NavbarLink href="#" name="about" />
            <NavbarLink href="#" name="contact me" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
