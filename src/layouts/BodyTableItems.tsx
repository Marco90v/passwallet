import NoItems from "@components/NoItems";

interface props{
  children: React.ReactNode;
  length: number;
}
const BodyTableItems = ({children,length}:props) => {
  return (
    <div className="divide-y divide-slate-200">
      {
        length === 0 ? <NoItems /> : children
      }
    </div>
  )
}
export default BodyTableItems;