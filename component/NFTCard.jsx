import Image from "next/image";
import images from "../assets";
import Link from "next/link";
function NFTCard({ nft }) {
  return (
    <Link href={{ pathname: "/nftdetails", query: { nft } }} passHref>
      <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 bg-white rounded-2xl p-4 m-4 minlg:m:8 sm:my-2 sm:mx-2  cursor-pointer shadow-md">
        <div className="relative w-full h-52 sm:h-36 xs:h-56 mind:h-60 minlg:h-300 rounded-2xl overflow-hidden">
          <Image
            src={nft.image || images[`nft${nft.i}`]}
            alt="nft image"
            layout="fill"
            objectfit="cover"
          />
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-poppins text-nft-black-1 font-semibold text-sm minlg:text-xl">
            {nft.name}
          </p>
          <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
            <p className="font-poppins text-nft-black-1 font-semibold text-xs minlg:text-lg">
              {nft.price} <span className="normal">ETH</span>
            </p>
            <p className="font-poppins text-nft-black-1 font-semibold text-xs minlg:text-lg">
              {nft.seller}
            </p>
          </div>
        </div>{" "}
      </div>
    </Link>
  );
}

export default NFTCard;
