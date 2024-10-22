import Image from "next/image";
import images from "@/assets";
import Link from "next/link";
import Button from "./Button";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineDiscord } from "react-icons/ai";

const FooterLinks = ({ heading, items }) => {
  return (
    <div className="flex-1 justify-start items-start">
      <h3 className="font-poppins text-nft-black-1 font-semibold text-xl mb-10">
        {heading}
      </h3>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
function Footer() {
  return (
    <footer className="flexCenter flex-col border-t border-nft-gray-1 sm:py-8 py-16">
      {" "}
      <div className="w-full minmd:w-4/5 sm:px-4 px-16 flex flex-row md:flex-col">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image
              src={images.logo02}
              alt="logo"
              objectFit="contain"
              width={32}
              height={32}
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              CryptoKet
            </p>
          </div>
          <p className="font-poppins text-nft-black-1 font-semibold mt-6 text-base">
            Get the latest updates
          </p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 bg-white border border-nft-gray-2 rounded-md">
            <input
              type="email"
              placeholder="Your Email"
              className="h-full flex-1 w-full bg-white px-4 rounded-md text-nft-black-1 text-xs font-normal outline-none minlg:text-lg"
            />
            <div className="flex-initial">
              <Button btnName="Email me" classStyles="rounded-md" />
            </div>
          </div>
        </div>
        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks
            heading="CryptoKet"
            items={["Explore", "How it Works", "COntact Us"]}
          />
          <FooterLinks
            heading="Support"
            items={[
              "Help Center",
              "Terms of Service",
              "Legal",
              "Privacy Policy",
            ]}
          />
        </div>
      </div>
      <div className="flexCenter w-full mt-5 border-t border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins text-nft-black-1 font-semibold text-base">
            CryptoKet, Inc. All Rights Reserved.
          </p>
          <div className="mx-2 cursor-pointer flex gap-2">
            <CiInstagram className="w-7 h-7" />
            <CiTwitter className="w-7 h-7" />
            <AiOutlineDiscord className="w-7 h-7" />
            <PiTelegramLogo className="w-7 h-7" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
