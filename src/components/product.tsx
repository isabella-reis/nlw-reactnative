import {
  View,
  Text,
  Image,
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { forwardRef } from "react";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
};

type ProductProps = TouchableOpacityProps & {
  productData: ProductDataProps;
};

const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ productData, ...rest }, ref) => {
    return (
      <TouchableOpacity className="w-full flex-row items-center pb-4" {...rest} ref={ref}>
        <Image
          source={productData.thumbnail}
          className="h-20 w-20 rounded-md"
        />
        <View className="flex-1 ml-3">
          <Text className="text-slate-100 font-subtitle text-base flex-1">
            {productData.title}
          </Text>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {productData.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default Product