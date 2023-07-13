import { footerLinks } from "@/constants";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-top border-gray-700">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-5">
          <Image
            src="/logo.svg"
            alt="logo car"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            © 2022 Car Advisor Pte Ltd, All rights reserved.{" "}
          </p>
        </div>
        <div className="footer__links">
          {footerLinks?.map((res, ind) => {
            return (
              <>
                <div key={ind} className="footer__link">
                  <h3 className="font-bold">{res.title}</h3>
                  {res?.links!.map((res, ind) => {
                    return (
                      <Link key={ind} href={res.url} className="text-gray-500">
                        {res.title}
                      </Link>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
