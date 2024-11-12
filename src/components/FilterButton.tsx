import Button from "@components/Button";

interface FilterButtonProps {
  label: string;
  value: itemsfilterValue;
  current: string;
  onClick: (value: itemsfilterValue) => void;
}

function FilterButton({ label, value, current, onClick }: FilterButtonProps) {
  return (
    <Button
      onClick={() => onClick(value)}
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        current === value
          ? 'bg-indigo-100 text-indigo-800'
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {label}
    </Button>
  );
}

export default FilterButton;