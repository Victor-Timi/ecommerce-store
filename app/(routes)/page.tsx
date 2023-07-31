import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import BillBoard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 60;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("f2d0f3da-f73c-4302-84a8-9ac3f125167a");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
