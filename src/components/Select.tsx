import { BANKING, OTHER, SOCIAL } from "@utils/const";
import { capitalize } from "@utils/functions";
import { FieldValues } from "react-hook-form";

interface OptionsSelect {
  value: TypeOptionSelect;
  label: string;
}

const options:OptionsSelect[] = [
  { value: SOCIAL, label: capitalize(SOCIAL) },
  { value: BANKING, label: capitalize(BANKING) },
  { value: OTHER, label: capitalize(OTHER) },
];

const Salect = <T extends FieldValues>(props:SelectProps<T>) => {
  const { identify, register, className, disabled, required, icon } = props;
  return (
    <div className="relative flex w-full">
      <div
					className={`absolute left-2 top-1/2 -translate-y-1/2`}
				>
					{
						icon
					}
				</div>
      <select
        className={`w-full pl-10 pr-3 py-2 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent bg-white rounded-lg ${className}`}
        disabled={disabled}
        required={required}
        {...register(identify, {required})}
      >
        {
          options.map((option, index) => {
            return (
              <option
                key={index}
                value={option.value}
              >
                {option.label}
              </option>
            )
          })
        }
      </select>
    </div>
  );
};

export default Salect;