import React from "react";

function Input({ inputType, title, placeholder, handleClick }) {
  return (
    <div className="mt-10 w-full">
      <p className="font-poppins text-nft-black-1 font-semibold text-xl">
        {title}
      </p>
      {inputType === "number" ? (
        <div className="bg-white border border-nft-gray-2 rounded-lg w-full outline-none font-poppins text-nft-gray-2 text-base px-4 py-3 mt-4 flexBetween flex-row">
          <input
            type="number"
            className="flex w-full bg-white outline-none"
            placeholder={placeholder}
            onChange={handleClick}
          />
          <p className="font-poppins text-nft-black-1 font-semibold text-xl">
            ETH
          </p>
        </div>
      ) : inputType === "textarea" ? (
        <textarea
          rows={10}
          className="bg-white border border-nft-gray-2 rounded-lg w-full outline-none font-poppins text-nft-gray-2 text-base px-4 py-3 mt-4"
          placeholder={placeholder}
          onChange={handleClick}
        />
      ) : (
        <input
          className="bg-white border border-nft-gray-2 rounded-lg w-full outline-none font-poppins text-nft-gray-2 text-base px-4 py-3 mt-4"
          placeholder={placeholder}
          onChange={handleClick}
        />
      )}
    </div>
  );
}

export default Input;
