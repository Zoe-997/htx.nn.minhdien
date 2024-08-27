import PageTitle from "@/app/components/admins/PageTitle";
import ProductForm from "@/app/components/admins/products/ProductForm";

export default async function ProductCreate() {
  return (
    <>
      <PageTitle title="Create a new product" />
      <ProductForm />
    </>
  );
}
