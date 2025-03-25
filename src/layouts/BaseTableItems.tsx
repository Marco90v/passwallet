interface props {
  children:React.ReactNode;
}
const BaseTableItems = ({children}:props) => {
  return (
    <div className="bg-white rounded-lg shadow">
      {children}
    </div>
  );
}

export default BaseTableItems;