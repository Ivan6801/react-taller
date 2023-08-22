import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../components/Layout";
import OrderCard from "../../components/OrderCard";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}
