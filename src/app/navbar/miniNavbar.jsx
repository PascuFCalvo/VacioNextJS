import { ArrowBack } from "@mui/icons-material";

const MiniNavbar = () => {
  return (
    <div>
      <nav
        className={` fixed flex flex-col text-center py-4 px-6 bg-neutral-800/70  w-full shadow lg:items-baseline  text-amber-50  z-50`}
      >
        <div className={`mb-2 lg:mb-0 flex flex-row items-center`}>
          <a href="/" className="text-2xl hover:text-teal-500 ">
            <ArrowBack />
            Juan Vacio
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MiniNavbar;
