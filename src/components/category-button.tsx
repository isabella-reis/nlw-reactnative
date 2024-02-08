import clsx from "clsx";
import { Text, Pressable, PressableProps } from "react-native";

type CategoryProps = PressableProps & {
  title: string;
  isCategorySelected?: boolean;
};

export default function CategoryButton({
  title,
  isCategorySelected,
  ...rest
}: CategoryProps) {
  return (
    <Pressable
      className={clsx('bg-slate-800 px-4 justify-center rounded-md h-10', isCategorySelected && "border-2 border-lime-300")}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
