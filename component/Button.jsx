function Button({ classStyles, btnName }) {
  return (
    <button
      type="button"
      className={`nft-gradient text-small minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
    >
      {btnName}{" "}
    </button>
  );
}

export default Button;
