interface props {
  children:React.ReactNode;
}

const MenuTableItems = ({children}:props) => {
  return (
    <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Stored Passwords</h2>
          <div className="flex space-x-2">
            {
              children
            }
          </div>
        </div>
      </div>
  );
}
export default MenuTableItems;