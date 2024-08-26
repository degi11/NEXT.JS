import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectCom = ({ placeholder }) => {
  const Categories = [
    {
      value: "Food & drinks",
      name: "Food & drinks",
    },

    {
      value: "Shopping",
      name: "Shopping",
    },
    {
      value: "Housing",
      name: "Housing",
    },
    {
      value: "Transportation",
      name: "Transportation",
    },
  ];

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {Categories.map((e, i) => {
          return <SelectItem value={e.value}>{e.name} </SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};
