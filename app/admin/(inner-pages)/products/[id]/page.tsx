import PageTitle from "@/app/components/admins/PageTitle";
import ProductForm from "@/app/components/admins/products/ProductForm";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <PageTitle title="Update product" />
      <ProductForm productId={params.id} />
    </>
  );
}
