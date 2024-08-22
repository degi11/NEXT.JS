import { LeftLogo, RightLogo } from "../rigtLeftLogo";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const RecordsHistory = () => {
  return (
    <div className="flex w-full mt-[32px] justify-between h-[38px]">
      <div className="flex items-center gap-4">
        <Button className="bg-gray-300 w-[32px] h-[32px]" size="icon">
          <LeftLogo />
        </Button>
        <p>Last 30 Days</p>
        <Button className="bg-gray-300 w-[32px] h-[32px]" size="icon">
          <RightLogo />
        </Button>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Newest</SelectItem>
          <SelectItem value="yesterday">Yesterday</SelectItem>
          <SelectItem value="3 day ago">3 Day Ago</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
