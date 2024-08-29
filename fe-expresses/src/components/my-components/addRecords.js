import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusLogo } from "../PlusLogo";
import { SelectCom } from "./selectCom";
import { MyButton } from "../second-components/My-button";

export const AddRecords = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-blue-600 text-white rounded-[20px] p-4 flex gap-1 "
          variant="outline"
        >
          <PlusLogo />
          <p>AddRecords</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[792px]">
        <DialogHeader className="w-full border-b border-solid border-gray-300 px-[24px] py-[20px]">
          <DialogTitle>Add Records</DialogTitle>
        </DialogHeader>
        <div className="w-full flex">
          <div className="flex flex-col py-4 px-[24px] w-1/2 gap-8">
            <div className="flex">
              <MyButton />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="name">Amount</Label>
              <Input
                id="name"
                placeholder="000.00"
                className="col-span-3 w-full"
              />
            </div>
            <div className="items-center gap-4">
              <Label htmlFor="username">Username</Label>
              <SelectCom placeholder={"Choose"} />
            </div>
            <div className="flex gap-3">
              <div className="w-1/2 flex flex-col gap-[5px]">
                <p>Date</p>
                <SelectCom placeholder={"Date"} />
              </div>
              <div className="w-1/2 flex flex-col gap-[5px]">
                <p>Date</p>
                <SelectCom placeholder={"Date"} />
              </div>
            </div>
            <Button className="bg-blue-600 rounded-[20px]" type="submit">
              Add Records
            </Button>
          </div>
          <div className="flex flex-col pb-10 px-[24px] w-1/2 gap-8 h-full">
            <div className="flex flex-col gap-4">
              <p>Payee</p>
              <SelectCom placeholder={"Write here"} />
            </div>
            <div className="w-full h-full flex flex-col gap-[5px]">
              <p>Note</p>
              <Textarea placeholder="Write here" className="h-full" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
