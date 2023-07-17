import Image from "next/image";
import Link from "next/link";

// import { footerLinks } from "@constants";
import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className='md:flex flex-col text-black-100  mt-5 border-t border-gray-100 hidden'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        &copy; 2023 Colitas. All rights reserved
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
