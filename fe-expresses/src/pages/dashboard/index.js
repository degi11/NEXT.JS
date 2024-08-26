import { Card } from "@/components/my-components/card";
import { Graphic } from "@/components/my-components/graphic";
import { LastRecords } from "@/components/second-components/lastRecords";
import { Layout } from "@/components/my-components/layout";
import { Selection } from "@/components/second-components/selection";
import { Cash } from "@/components/second-components/cash";

export default function Home() {
  return (
    <Layout>
      <Selection>
        <div className="flex gap-[24px] mt-[24px]">
          <Cash />
          <Card title={"Your Income"} balance={"-12,000,000"}></Card>
          <Card title={"My Income"} balance={"+99,999,999"}></Card>
        </div>
        <div className="flex gap-[24px]">
          <Graphic date={"Jun 1 - Nov 30"} />
        </div>
        <div className="bg-white rounded-[12px]">
          <LastRecords cost={"-1000$"} />
        </div>
      </Selection>
    </Layout>
  );
}
