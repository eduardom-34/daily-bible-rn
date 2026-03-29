/** @format */

import { FlatList, View } from "react-native";
import MoodCard, { type MoodOption } from "./MoodCard";

const MOODS: MoodOption[] = [
  { id: "grateful", label: "Agradecido", icon: "sunny-outline" },
  { id: "anxious", label: "Ansioso", icon: "thunderstorm-outline" },
  { id: "sad", label: "Triste", icon: "rainy-outline" },
  { id: "hopeful", label: "Esperanzado", icon: "leaf-outline" },
  { id: "lost", label: "Perdido", icon: "compass-outline" },
  { id: "joyful", label: "Alegre", icon: "heart-outline" },
];

type MoodCardListProps = {
  onSelectMood: (mood: MoodOption) => void;
};

export default function MoodCardList({ onSelectMood }: MoodCardListProps) {
  return (
    <FlatList
      data={MOODS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MoodCard mood={item} onPress={onSelectMood} />}
      ItemSeparatorComponent={() => <View className="h-3" />}
      contentContainerClassName="px-5 pb-8"
      showsVerticalScrollIndicator={false}
    />
  );
}
