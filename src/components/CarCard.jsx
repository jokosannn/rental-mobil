import CustomButton from "./CustomButton";

const CarCard = () => {
  return (
    <div className="car-card group overflow-hidden transition-all">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">Toyota Corolla</h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">$</span>
        52
        <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
      </p>

      <div className="relative w-full my-3 object-contain overflow-hidden">
        <img src="/hero.png" alt="car model" className="object-contain w-full aspect-video" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px] leading-[17px]">Automatic</p>
          </div>
          <div className="car-card-icon">
            <img src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card-icon-text">FWD</p>
          </div>
          <div className="car-card-icon">
            <img src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card-icon-text">35 MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
          />
        </div>
      </div>

      {/* <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} /> */}
    </div>
  );
};

export default CarCard;
