import NFTCard from "./NFTCard";
import makeid from "@/utils/makeid";

function Hotbirds() {
  return (
    <div className="mt-10">
      <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
        <h1 className="flex-1 before:first:font-poppins text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4">
          Hot Bids
        </h1>
        <div className="">search bar</div>
      </div>
      <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <NFTCard
            key={`nft-${i}`}
            nft={{
              i,
              name: `Nifty NFT ${i}`,
              price: 10 - i * (0.534).toFixed(2),
              seller: `0x${makeid(3)} ...${makeid(4)}`,
              owner: `0x${makeid(3)} ...${makeid(4)}`,
              description: "Cool NFT on Sale",
            }}
          />
        ))}{" "}
      </div>
    </div>
  );
}

export default Hotbirds;
