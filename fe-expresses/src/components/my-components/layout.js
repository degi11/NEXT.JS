import Link from "next/link";
import { GeldHalfLogo } from "../GeldHalfLogo";
import Image from "next/image";
import { AddRecords } from "./addRecords";

export const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#F3F4F6]">
      <div className="flex w-full bg-white">
        <div className="flex justify-between w-[1200px] mx-auto h-[72px] py-[16px] bg-white">
          <div className="flex gap-6">
            <GeldHalfLogo />
            <Link href="/dashboard" className="text-[16px] font-semibold">
              Dashboard
            </Link>
            <Link href="/records" className="text-[16px]">
              Records
            </Link>
          </div>
          <div className="flex gap-6">
            <AddRecords />
            <Image
              className="rounded-full box-border "
              src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/toji-in-jjk.jpg"
              alt="ProfilePicure"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
