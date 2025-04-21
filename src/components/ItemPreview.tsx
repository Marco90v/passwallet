import { Edit2, ExternalLink, Eye, EyeOff, Trash2 } from "lucide-react";
import { useState } from "react";
import Button from "@components/Button";
import { PASSNOTVIEW } from "@utils/const";
import { useStoreData } from "@store/store";
import { useShallow } from "zustand/shallow";

interface ItemPreviewProps {
  item: ItemType;
  setEditingItem: (id:string) => void;
}

const ItemPreview = ({item, setEditingItem}:ItemPreviewProps) => {

  const {removeItem} = useStoreData(
    useShallow( (state => ({
      removeItem: state.removeItem,
    })))
  )

  const [standby, setStandby] = useState(false);
  const [showPassword, togglePassword] = useState(false);

  const callback = () => {
    setStandby(prev => !prev)
  }

  const handlerDelete = (id:string) => {
    callback();
    removeItem(id, callback);
  }

	return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-0 items-start lg:items-center lg:flex-row lg:gap-6">
        <div className="flex items-center">
          <h3 className="text-lg font-medium text-slate-900">{item.title}</h3>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-indigo-600 hover:text-indigo-800"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        {
          item.username && (<p className="text-sm text-slate-500">{item.username}</p>)
          }
        {
          item.email && (<p className="text-sm text-slate-500">{item.email}</p>)
        }
        <div className="flex items-center mt-1">
          <span className="text-sm font-mono">
            {showPassword ? item.password : PASSNOTVIEW}
          </span>
          <Button
            onClick={() => togglePassword(prev => !prev)}
            className="ml-2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          onClick={() => setEditingItem(item.id)}
          className="p-2 text-slate-400 hover:text-indigo-600 rounded-full hover:bg-slate-100"
          disabled={standby}
        >
          <Edit2 className="h-5 w-5" />
        </Button>
        <Button
          onClick={() => handlerDelete(item.id)}
          className="p-2 text-slate-400 hover:text-red-600 rounded-full hover:bg-slate-100"
          disabled={standby}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
export default ItemPreview;