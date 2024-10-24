"use client";
import { useState, useEffect, useRef } from "react";
import CreatorCard from "./CreatorCard";
import images from "../assets";
function Topseller() {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  return (
    <div>
      <h1 className="font-poppins text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
        Best Creators
      </h1>
      <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
        <div
          className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
          ref={scrollRef}
        >
          {[6, 7, 8, 9, 10].map((i) => (
            <CreatorCard
              key={`creator-${i}`}
              rank={i}
              creatorImage={images[`creator${i}`]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topseller;
