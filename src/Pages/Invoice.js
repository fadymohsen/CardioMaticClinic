import { Sidebar } from "../Components/Sidebar";
import { InvoiceTable } from "../Components/InvoiceTable";
export default function Invoice() {
  return (
    <>
      <div className="flex">
        <Sidebar tab_index={4} />
        <section className="ml-12 mr-8 container mx-auto my-8">
          <div className="mb-8"></div>
          <div>
            <InvoiceTable></InvoiceTable>
          </div>
        </section>
      </div>
    </>
  );
}
