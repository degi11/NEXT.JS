import { Card } from "@/components/my-components/card";
import { Graphic } from "@/components/my-components/graphic";
import { LastRecords } from "@/components/second-components/lastRecords";
import { Layout } from "@/components/my-components/layout";
import { Selection } from "@/components/second-components/selection";
import { Cash } from "@/components/second-components/cash";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/record/get-user-records?userId=${user.id}`
        )
        .then((response) => {
          setData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(data);

  return (
    <Layout>
      <Selection>
        <div className="flex gap-[24px] mt-[24px]">
          <Cash money={"0"} />
          <Card
            color={"bg-[#84CC16]"}
            title={"Your Income"}
            balance={"-12,000,000"}
          ></Card>
          <Card
            color={"bg-[#0166FF]"}
            title={"Total Income"}
            balance={"+99,999,999"}
          ></Card>
        </div>
        <div className="flex gap-[24px]">
          <Graphic date={"Jun 1 - Nov 30"} />
        </div>
        <div className="bg-white rounded-[12px]">
          <div className="w-full border-b border-gray-300">
            <h3 className="py-4 px-6">Last Records</h3>
          </div>
          {data &&
            data.map((e, i) => {
              return (
                <LastRecords categoryName={e.categoryname} cost={e.amount} />
              );
            })}
        </div>
      </Selection>
    </Layout>
  );
}
