import SalesChart from "@/features/sales/components/sales-chart";
import ProductCard from "@/features/products/components/product-card";

export default function Dashboard() {
  return (
    <>
      <div className="space-y-2">
        <div className="border">
          <SalesChart />
        </div>
        <div className="border">
          <ProductCard />
        </div>
      </div>
    </>
  );
}
