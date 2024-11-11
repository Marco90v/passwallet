const getColor = (color:string) => {
  if(color === "green") {
    return "bg-green-600 border-green-600 text-white hover:bg-green-500"
  }
  if(color === "red") {
    return "bg-red-600 border-red-600 text-black hover:bg-red-500"
  }
  if(color === "blue") {
    return "bg-blue-600 border-blue-600 text-white hover:bg-blue-500"
  }
  if(color === "link") {
    return "bg-transparent border-transparent text-blue-800 content-center underline underline-offset-2 hover:text-blue-600"
  }
  return "bg-white border-white text-black"
}

const Button = (props:ButtonProps) => {
  const { children, className, onClick, type="button", disabled=false, color="" } = props;
  return (
    <button
      className={`${getColor(color)} rounded-md m-1 px-4 py-1 font-bold flex gap-1 border-solid border-2 justify-center items-center transition-colors duration-300 ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      >
        {children}
    </button>
  )
};

export default Button;