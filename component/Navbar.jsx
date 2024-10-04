"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import images from "@/assets";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="">
        <Link href="/" passHref>
          Name
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
