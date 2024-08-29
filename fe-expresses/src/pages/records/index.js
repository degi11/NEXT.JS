import { CategorySection } from "@/components/my-components/categorySection";
import { HistoryControl } from "@/components/my-components/historyControl";
import { Layout } from "@/components/my-components/layout";
import { RecordsHistory } from "@/components/my-components/recordsHistory";
import { RecordsTimeSection } from "@/components/second-components/lastRecords";
import { Selection } from "@/components/second-components/selection";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useState, useEffect } from "react";

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
        <div className="flex gap-6">
          <CategorySection />
          <div className="w-full flex flex-col gap-6">
            <RecordsHistory />
            <div className="w-full flex flex-col gap-6">
              <div className="flex justify-between w-full px-[24px] py-[12px] border-solid border-[1px] border-gray-300 rounded-[12px] bg-white">
                <div className="flex items-center gap-4 ">
                  <Checkbox />
                  <p>Select all</p>
                </div>
                <p>1000000</p>
              </div>
              <p>Today</p>
            </div>
            {data &&
              data.map((e, i) => {
                return (
                  <RecordsTimeSection
                    categoryName={e.categoryname}
                    cost={e.amount}
                  />
                );
              })}
          </div>
        </div>
      </Selection>
    </Layout>
  );
}
