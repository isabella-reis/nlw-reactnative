import { View } from "react-native";

import Header from "@/components/header";
import { useCartStore } from "@/stores/cart-store";
import ProductsList from "@/components/products-list";

export default function Home() {
  const cartStore = useCartStore();

  const cartQuantityItems = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <View className="pt-8">
      1
      <Header title="Faça seu pedido" cartQuantityItems={cartQuantityItems} />
      <ProductsList />
    </View>
  );
}
