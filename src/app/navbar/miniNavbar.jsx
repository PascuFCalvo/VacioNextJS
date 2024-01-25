const MiniNavbar = () => {
  return (
    <div>
      <nav
        className={`hidden md:fixed md:flex md:flex-col lg:flex-row lg:text-left lg:justify-evenly py-8 px-6 bg-neutral-800/70 w-1/2 sm:w-full shadow lg:items-baseline  text-white  z-50`}
      >
        <div className={`mb-2 lg:mb-0`}>
          <a href="/" className="text-2xl hover:text-teal-500 ">
            JUAN VACIO
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MiniNavbar;
