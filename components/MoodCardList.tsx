/** @format */

import { FlatList } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
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
      numColumns={2}
      renderItem={({ item, index }) => (
        <Animated.View
          entering={FadeInUp.delay(500 + index * 100)
            .duration(400)
            .springify()}
          className="flex-1 p-1.5"
        >
          <MoodCard mood={item} onPress={onSelectMood} />
        </Animated.View>
      )}
      contentContainerClassName="pb-8"
      showsVerticalScrollIndicator={false}
    />
  );
}
