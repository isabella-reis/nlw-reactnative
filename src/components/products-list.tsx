import { Link } from "expo-router";
import { useState, useRef } from "react";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { FlatList, SectionList, View, Text, ScrollView } from "react-native";

import Product from "@/components/product";
import CategoryButton from "@/components/category-button";

export default function ProductsList() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const sectionListRef = useRef<SectionList>(null);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  }

  return (
    <View className="h-[100%]">
      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryButton
              title={item}
              isCategorySelected={item === category}
              onPress={() => handleCategorySelect(item)}
            />
          )}
          horizontal
          className="max-h-10 mt-5"
          contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View className="p-5">
        <SectionList
          ref={sectionListRef}
          sections={MENU}
          keyExtractor={(item) => item.id}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }) => (
            <Link href={`/product/${item.id}`} asChild>
              <Product productData={item} />
            </Link>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="text-white text-xl font-heading mb-3">
              {title}
            </Text>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
        />
      </View>
    </View>
  );
}
