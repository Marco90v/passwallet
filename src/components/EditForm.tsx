import { useState } from "react";
import Input from "@components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { capitalize } from "@utils/functions";
import Button from "./Button";
import Salect from "./Select";

interface EditFormProps {
  item: ItemType;
  onSave: (item: ItemType) => void;
  onCancel: () => void;
}

function EditForm({ item, onSave, onCancel }: EditFormProps) {
  const [editedItem, setEditedItem] = useState<ItemType>(item);

  const {register, handleSubmit, setValue} = useForm<ItemType>({
    defaultValues: {
      title: '',
      username: '',
      email: '',
      password: '',
      category: 'social',
    },
  });

  setValue('id', editedItem.id);
  setValue('title', editedItem.title);
  setValue('username', editedItem.username);
  setValue('email', editedItem.email);
  setValue('password', editedItem.password);
  setValue('category', editedItem.category);
  setValue('url', editedItem.url);

  const onSubmit: SubmitHandler<ItemType> = (data) => {
    onSave(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {
        Object.keys(editedItem).map((key, index) => {
          if(key === "id" ) return null;
          if(key === "category") return (            
            <Salect
              key={index}
              identify={key}
              register={register}
              // className="w-full px-3 py-2 border border-slate-300 rounded-md"
            />
          )
          return (
            <Input
              key={index}
              identify={key}
              type="text"
              placeholder={capitalize(key)}
              register={register}
            />
          )
        })
      }



      {/* <select
        value={editedItem.category}
        onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
        className="w-full px-3 py-2 border border-slate-300 rounded-md"
      >
        <option value="social">Social</option>
        <option value="banking">Banking</option>
        <option value="other">Other</option>
      </select> */}



      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          Cancel
        </Button>
        <Button
          color="indigo"
          type="submit"
          className="px-4 py-2 text-sm font-medium "
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
}

export default EditForm;