
interface props{
  children: React.ReactNode;
  // key: number;
}
const RowTableItem = ({children}:props) => {
  return (
    <div className="p-4 hover:bg-slate-50">
      {children}
    </div>
  )
}
export default RowTableItem;