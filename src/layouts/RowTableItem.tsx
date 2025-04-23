
interface props {
  children: React.ReactNode;
}
const RowTableItem = ({children}:props) => {
  return (
    <div className="p-4 hover:bg-slate-50">
      {children}
    </div>
  )
}
export default RowTableItem;