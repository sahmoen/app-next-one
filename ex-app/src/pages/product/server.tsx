import ProductView from "@/views/Product";
import { ProductType } from "@/types/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};
export default ProductPage;

// getServerSideProps dipanggil setiap melakukan request
export async function getServerSideProps() {
  // Logic untuk mengambil data dari API
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}
