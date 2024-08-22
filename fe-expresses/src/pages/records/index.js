import { CategorySection } from "@/components/my-components/categorySection";
import { HistoryControl } from "@/components/my-components/historyControl";
import { Layout } from "@/components/my-components/layout";
import { RecordsHistory } from "@/components/my-components/recordsHistory";
import { Selection } from "@/components/second-components/selection";

export default function Home() {
  return (
    <Layout>
      <Selection>
        <div className="flex gap-6">
          <CategorySection />
          <div className="w-full flex flex-col gap-6">
            <RecordsHistory />
            <HistoryControl cost={-10000} allCost={350000} />
          </div>
        </div>
      </Selection>
    </Layout>
  );
}
