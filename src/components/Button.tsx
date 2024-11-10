const getColor = (color:string) => {
  if(color === "green") {
    return "bg-green-600 text-white hover:bg-green-500"
  }
  if(color === "red") {
    return "bg-red-600 text-black hover:bg-red-500"
  }
  return "bg-blue-600 text-white hover:bg-blue-500"
}

const Button = (props:ButtonProps) => {
  const { children, onClick, type="button", disabled=false, color="blue" } = props;
  return (
    <button
      className={`${getColor(color)} rounded-sm m-1 px-4 py-1 font-bold transition-colors duration-200`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      >
        {children}
    </button>
  )
};

export default Button;