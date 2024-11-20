import Input from "@components/Input";
import { FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { capitalize } from "@utils/functions";
import Button from "@components/Button";
import Salect from "@components/Select";

interface EditFormProps<T extends FieldValues> {
  item: T;
  onSave: (item: T) => void;
  onCancel: () => void;
  edit?:boolean;
}

function EditForm<T extends FieldValues>({ item, onSave, onCancel, edit }: EditFormProps<T>) {

  const {register, handleSubmit, setValue} = useForm<T>();

  if(edit){    
    Object.keys(item).map((key:string, index) => {
      setValue(key as Path<T>, item[key]);
    });
  }

  const onSubmit: SubmitHandler<T> = (data) => {
    onSave(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {
        Object.keys(item).map((key, index) => {
          if(key === "id" ) return null;
          if(key === "category") return (            
            <Salect
              key={index}
              identify={key}
              register={register}
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