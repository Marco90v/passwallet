const Label = (props:LabelProps) => {
  const { children, className="", ...other } = props;
  return (
    <label className={`block font-medium text-slate-700 mb-1 ${className}`} {...other}>
      {children}
    </label>
  )
}

export default Label;