import { Edit2, ExternalLink, Eye, EyeOff, Trash2 } from "lucide-react";
import { useState } from "react";
import Button from "@components/Button";
import { PASSNOTVIEW } from "@utils/const";

interface ItemPreviewProps {
  item: ItemType;
  onDelete:(id: string) => void;
  setEditingItem: (id:string) => void;
}

const ItemPreview = ({item, onDelete, setEditingItem}:ItemPreviewProps) => {

  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});

  const togglePassword = (id: string) => {
    setShowPasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
            {showPasswords[item.id] ? item.password : PASSNOTVIEW}
          </span>
          <Button
            onClick={() => togglePassword(item.id)}
            className="ml-2 text-slate-400 hover:text-slate-600"
          >
            {showPasswords[item.id] ? (
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
        >
          <Edit2 className="h-5 w-5" />
        </Button>
        <Button
          onClick={() => onDelete(item.id)}
          className="p-2 text-slate-400 hover:text-red-600 rounded-full hover:bg-slate-100"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
export default ItemPreview;