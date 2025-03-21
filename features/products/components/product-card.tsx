// Eslint Config: You shouldn't be able to import files from other feature.
import SalesTestingComponent from "@/features/sales/components/sales-testing-component";

export default function ProductCard() {
  return (
    <>
      <div>Product-Card-Component</div>
      <SalesTestingComponent />
    </>
  );
}
