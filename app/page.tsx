import SalesChart from "@/features/sales/components/sales-chart";
import ProductCard from "@/features/products/components/product-card";

export default function Dashboard() {
  return (
    <>
      <div className="flex text-xs my-2 space-x-4">
        <p>Color labels:</p>
        <p className="text-yellow-500">Sales feature</p>
        <p>—</p>
        <p className="text-blue-500">Products feature</p>
      </div>

      <div className="space-y-2">
        <div className="border border-neutral-500">
          <SalesChart />
        </div>
        <div className="border border-neutral-500">
          <ProductCard />
        </div>
      </div>
    </>
  );
}
