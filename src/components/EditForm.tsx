import Input from "@components/Input";
import { FieldValues, Path, SubmitHandler, useForm, useFormContext, UseFormRegister } from "react-hook-form";
import { capitalize } from "@utils/functions";
import Button from "@components/Button";
import Salect from "@components/Select";
import { CATEGORY, EMAIL, ID, NUMBER, PASSWORD, TEXT } from "@utils/const";
import GeneratePassword from "./GeneratePassword";

interface icon{
  [key:string]:JSX.Element;
}

interface EditFormProps<T extends FieldValues> {
  item: T;
  onCancel: () => void;
  // register: any;
  // setValue: any;
  onSubmit: SubmitHandler<any>;
  icons?:icon;
}

const validateTypeInput = (key:string):TypeInput => {
  if(key === PASSWORD || key === NUMBER || key === EMAIL) return key;
  if(key.toLowerCase().includes(PASSWORD)) return PASSWORD;
  return TEXT;
}

function EditForm<T extends FieldValues>({onSubmit, item, onCancel, icons }: EditFormProps<T>) {
  const { handleSubmit, register } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {
        Object.keys(item).map((key, index) => {
          if(key === ID ) return null;
          if(key === CATEGORY) return (            
            <Salect
              key={index}
              identify={key}
              register={register}
              icon={icons?.[key]}
            />
          )
          return (
            <Input
              key={index}
              identify={key}
              type={validateTypeInput(key)}
              placeholder={capitalize(key)}
              icon={icons?.[key]}
            >
              {
                key === PASSWORD &&
                <GeneratePassword />
              }
            </Input>
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