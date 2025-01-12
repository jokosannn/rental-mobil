import { footerLinks } from "../constants";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <img src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
        <p className="text-base text-gray-700">
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <a key={link.title} href={link.url} className="text-gray-500">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-start sm:items-start flex-col sm:flex-row mt-10 border-t border-gray-100 sm:px-16 p-6">
      <p>@{new Date().getFullYear()} CarHub. All rights reserved</p>

      <div className="flex-1 flex sm:justify-end justify-start max-sm:mt-4 gap-10">
        <a href="/" className="text-gray-500">
          Privacy & Policy
        </a>
        <a href="/" className="text-gray-500">
          Terms & Condition
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
