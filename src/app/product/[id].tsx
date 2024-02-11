import { PRODUCTS } from "@/utils/data/products";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { formatCurrency } from "@/utils/functions/format-currency";
import { useCartStore } from "@/stores/cart-store";

import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";
import { Button } from "@/components/add-to-cart-button";
import { View, Image, Text, ScrollView } from "react-native";

export default function Product() {
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  function handleAddToCart() {
    cartStore.addToCart(product);
    navigation.goBack();
  }

  return (
    <ScrollView>
      <View className="flex-1">
        <Image source={product.cover} resizeMode="cover" />
        <View className="p-5 mt-8 flex-1">
          <Text className="text-lime-400 text-2xl font-heading my-2">
            {formatCurrency(product.price)}
          </Text>
          <Text className="text-slate-400 font-body text-base leading-6 mb-6">
            {product.description}
          </Text>

          {product.ingredients.map((ingredient) => (
            <Text
              key={ingredient}
              className="text-slate-400 font-body text-sm leading-6"
            >
              {"\u2022 "}
              {ingredient}
            </Text>
          ))}
        </View>
        <View className="p-5 pb-8 gap-5">
          <Button onPress={handleAddToCart}>
            <Button.Icon>
              <Feather name="plus-circle" size={20} />
            </Button.Icon>
            <Button.Text>Adicionar ao pedido</Button.Text>
          </Button>

          <LinkButton title="Voltar ao início" href="/" />
        </View>
      </View>
    </ScrollView>
  );
}
