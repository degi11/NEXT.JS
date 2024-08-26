import { useState } from "react/cjs/react.production.min";
import { Button } from "../ui/button";

export const MyButton = () => {
  const [color, setColor] = useState(true);
  const [textColor, setTextColor] = useState(true);

  const ColorChanger = () => {
    {
      !setColor ? "bg-blue-600" : "bg-gray-400";
      !setTextColor ? "text-black" : "text-white";
    }
  };
  return (
    // <Button
    //   onClick={() => ColorChanger}
    //   className={`${color} ${textColor} w-1/2 rounded-none ${rounded} hover:none`}
    // >
    //   {text}
    // </Button>
    <div className="flex" onClick={ColorChanger}>
      <Button
        className={`${color} ${textColor} rounded-none rounded-l-lg w-1/2`}
      >
        Expense
      </Button>
      <Button
        className={`${!color} ${!textColor} rounded-none rounded-r-lg w-1/2`}
      >
        Income
      </Button>
    </div>
  );
};
