import { RecordsTimeSection } from "../second-components/lastRecords";
import { Checkbox } from "../ui/checkbox";

export const HistoryControl = ({ cost }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <RecordsTimeSection cost={cost} />
    </div>
  );
};
