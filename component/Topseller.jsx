"use client";
import { useState, useEffect, useRef } from "react";
import CreatorCard from "./CreatorCard";
import images from "../assets";
import makeid from "@/utils/makeid";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function Topseller() {
  const [hideButtons, setHideButtons] = useState(false);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1000 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);

    return () => {
      window.removeEventListener("resize", isScrollable);
    };
  });

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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <CreatorCard
              key={`creator-${i}`}
              rank={i}
              creatorImage={images[`creator${i}`]}
              creatorName={`0x${makeid(3)} ...${makeid(4)}`}
              creatorEths={10 - i * 0.5}
            />
          ))}

          {!hideButtons && (
            <>
              <div
                onClick={() => handleScroll("left")}
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
              >
                <IoIosArrowDropleft
                  layout="fill"
                  objectfit="contain"
                  alt="left-arrow"
                  className="w-7 h-7"
                />
              </div>
              <div
                onClick={() => handleScroll("right")}
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
              >
                <IoIosArrowDropright
                  layout="fill"
                  objectfit="contain"
                  alt="right-arrow"
                  className="w-7 h-7"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topseller;
