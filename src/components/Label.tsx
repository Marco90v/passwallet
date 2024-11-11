const Label = (props:LabelProps) => {
  const { children, className="", ...other } = props;
  return (
    <label className={`text-black m-1 dark:text-white ${className}`} {...other}>
      {children}
    </label>
  )
}

export default Label;