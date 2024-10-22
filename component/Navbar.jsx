"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import images from "@/assets";
import Button from "./Button";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const MenuItems = ({ active, setActive, isMobile }) => {
  const generateLink = (index) => {
    switch (index) {
      case 0:
        return "/";
      case 1:
        return "/creatednft";
      case 2:
        return "/mynft";
      default:
        return "/";
    }
  };

  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && "flex-col h-full"
      }`}
    >
      {["Explore NFTs", "Listed NFTs", "My NFTs"].map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 ${
            active === item
              ? "dark:text-white text-nft-black-1"
              : "dark:text-nft-gray-3 text-nft-gray-2"
          }`}
        >
          <Link href={generateLink(index)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ setActive }) => {
  const hasConnected = true;

  return hasConnected ? (
    <Link href="/creatednft" passHref>
      <Button
        btnName="Create"
        classStyles="mx-2 rounded-xl"
        handleClick={() => setActive("")}
      />
    </Link>
  ) : (
    <Button btnName="Connect" classStyles="mx-2 rounded-xl" />
  );
};

function Navbar() {
  const [active, setActive] = useState("Explore NFTs");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-row justify-start">
        <Link href="/" passHref>
          <div
            className="flexCenter md:hidden cursor-pointer"
            onClick={() => {}}
          >
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
        </Link>
        <Link href="/" passHref>
          <div className="hidden md:flex" onClick={() => {}}>
            <Image
              src={images.logo02}
              alt="logo"
              objectFit="contain"
              width={32}
              height={32}
            />
          </div>
        </Link>
      </div>

      <div className="md:hidden flex">
        <MenuItems active={active} setActive={setActive} />
        <div className="ml-4">
          <ButtonGroup setActive={setActive} />
        </div>
      </div>

      <div className="hidden md:flex ml-2">
        {isOpen ? (
          <AiOutlineClose
            alt="crossbar"
            style={{ objectFit: "contain" }}
            width={30}
            height={30}
            onClick={() => setIsOpen(false)}
            className="w-7 h-7"
          />
        ) : (
          <CiMenuFries
            alt="menubar"
            style={{ objectFit: "contain" }}
            width={30}
            height={30}
            onClick={() => setIsOpen(true)}
            className="w-7 h-7"
          />
        )}
        {isOpen && (
          <div>
            <div></div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
