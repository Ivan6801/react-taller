import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import { useFetch } from "../../hooks/useFetch";

export default function Home() {
  const { items } = useFetch();

  return (
    <Layout>
      Home
      <div className="grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg pt-2">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}
