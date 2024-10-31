"use client";
import { useState, useCallback, useContext, useMemo } from "react";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button, Input } from "@/component";
import { FaCloudUploadAlt } from "react-icons/fa";

function Createnft() {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });

  const onDrop = useCallback(() => {
    // upload image to the ipfs
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  const fileStyle = useMemo(
    () =>
      `bg-white border border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed ${
        isDragActive && "border-file-active"
      } ${isDragAccept && "border-file-accept"} ${
        isDragReject && "border-file-reject"
      }`,
    [isDragAccept, isDragActive, isDragReject]
  );

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          Create new NFT
        </h1>
        <div className="mt-16">
          <p className="font-poppins text-nft-black-1 font-semibold text-xl">
            Upload File
          </p>
          <div className="=" mt-4>
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p className="font-poppins text-nft-black-1 font-semibold text-xl">
                  JPG, PNG, GIF, SVG, WEBM, Max 100mb.
                </p>
                <div className="my-12 w-full flex justify-center">
                  <FaCloudUploadAlt className="w-[100px] h-[100px]" />
                </div>
                <p className="font-poppins text-nft-black-1 font-semibold text-sm">
                  Drag and Drop File{" "}
                </p>
                <p className="font-poppins text-nft-black-1 font-semibold text-sm mt-2">
                  or Browse media on your device{" "}
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <Image src={fileUrl} alt="asset_file" />
                </div>
              </aside>
            )}
          </div>
        </div>
        <div>
          <Input
            inputType="input"
            title="Name"
            placeholder="NFT Name"
            handleClick={(e) =>
              setFormInput({ ...formInput, name: e.target.value })
            }
          />
          <Input
            inputType="textarea"
            title="Description"
            placeholder="NFT Description"
            handleClick={(e) =>
              setFormInput({ ...formInput, description: e.target.value })
            }
          />{" "}
          <Input
            inputType="number"
            title="Price"
            placeholder="NFT Price"
            handleClick={(e) =>
              setFormInput({ ...formInput, price: e.target.value })
            }
          />
          <div className="mt-7 w-full flex justify-end">
            <Button
              btnName="Create NFT"
              className="rounded-xl"
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createnft;
