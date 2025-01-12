import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-width mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <a href="/" className="flex justify-center items-center">
        <img src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
      </a>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-white xl:text-primary-blue rounded-full bg-primary-blue xl:bg-white min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
