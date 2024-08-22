import { Checkbox } from "../ui/checkbox";

export const Types = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox className="flex rounded-full" />
      <p>{text}</p>
    </div>
  );
};
