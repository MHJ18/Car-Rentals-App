import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="w-full flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="car hub logo"
            className="object-contain"
            width={118}
            height={18}
          />
          <CustomButton
            title={"Sign In"}
            styles={"text-primary-blue rounded-full bg-white min-w-[130px]"}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
