import Button from "@components/Button";
import { PASSWORD } from "@utils/const";
import { keyGenerate } from "@utils/functions";
import { RefreshCw } from "lucide-react";
import { useFormContext } from "react-hook-form";

// interface props {
//   setValue2: any;
//   identify: string;
// }

const GeneratePassword = () => {
  const { setValue } = useFormContext();

  const genertaPassword = () => {
      setValue(PASSWORD, keyGenerate());
  }
  return (
    <div className="absolute right-2 top-1/2 -translate-y-1/2" >
      <Button
        className="text-indigo-800 flex items-center"
        onClick={genertaPassword}
      >
        <RefreshCw className="h-4 w-4 mr-1" />
        Generate
      </ Button>
    </div>
  );
}
export default GeneratePassword;