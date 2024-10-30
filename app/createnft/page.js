import { useState, useCallback, useContext, useMemo } from "react";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@/component";
import images from "../../assets";

function Createnft() {
  const [fileUrl, setFileUrl] = useState(null);

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

  const fileStyle = useMemo(() => ``, []);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          Creator new NFT
        </h1>
        <div className="mt-16">
          <p className="font-poppins text-nft-black-1 font-semibold text-xl">
            Upload File
          </p>
          <div className="=" mt-4>
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createnft;
