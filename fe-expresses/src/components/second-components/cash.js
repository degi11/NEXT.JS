import Image from "next/image";
import Large from "@/components/Large.png";

export const Cash = () => {
  return (
    <Image
      className=" box-border "
      src={Large}
      alt="Visacard"
      width={384}
      height={216}
      priority
      quality={100}
    />
  );
};
