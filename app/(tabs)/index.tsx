/** @format */

import { Pressable, Text, View } from "react-native";
import type { MoodOption } from "../../components/MoodCard";
import MoodCardList from "../../components/MoodCardList";
import WeekStreak from "../../components/WeekStreak";

export default function VerseScreen() {
  const handleSelectMood = (mood: MoodOption) => {
    console.log("Mood selected:", mood.id);
  };

  return (
    <View className="flex-1 bg-base px-4">
      <Text className="text-2xl font-inter-bold text-primary pt-14 pb-4">
        Alivio diario
      </Text>
      <WeekStreak />
      <View className="items-center pb-6 px-5 mt-4">
        <Text className="text-2xl text-primary font-inter-bold mt-3">
          ¿Cómo está tu corazón hoy?
        </Text>
      </View>
      <MoodCardList
        onSelectMood={(mood) => console.log(mood.id)}
      ></MoodCardList>
      <Pressable className="bg-teal-deep rounded-2xl px-2 py-4 items-center gap-2.5 font-inter-semibold text-sm text-card">
        <Text className="font-inter-semibold text-sm text-card">
          Obtener versículo
        </Text>
      </Pressable>
    </View>
  );
}
