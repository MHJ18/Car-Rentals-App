import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-3">
        <Link href="/" className=" flex justify-start items-center">
          <Image
            src="/logo.svg"
            alt="car hub logo"
            className="object-contain"
            width={118}
            height={18}
          />
        </Link>
        <div className="flex flex-center items-center gap-3">
          <CustomButton
            title={"Sign In"}
            styles={"text-primary-blue rounded-full bg-white min-w-[100px] "}
          />
          <CustomButton
            title={"Sign Up"}
            styles={
              "text-primary-blue rounded-full bg-white min-w-[120px] hover:bg-gray-100"
            }
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
