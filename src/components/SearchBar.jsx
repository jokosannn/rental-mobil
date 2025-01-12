/* eslint-disable react/prop-types */

import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <img
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();

    // Your logic serach here
  };

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="searchbar-item">
        <SearchManufacturer />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar-item">
        <img
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input type="text" name="model" placeholder="Tiguan..." className="searchbar-input" />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
