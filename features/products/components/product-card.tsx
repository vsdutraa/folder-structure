// This should show an ESLint error on the IDE.
// Check eslint.config.mjs 😸
import SalesTestingComponent from "@/features/sales/components/sales-testing-component";

export default function ProductCard() {
  return (
    <>
      <div className="space-y-1.5 my-3">
        <div className="border border-blue-500">
          <p>Product-Card-Component</p>
        </div>

        <SalesTestingComponent />
      </div>
    </>
  );
}
