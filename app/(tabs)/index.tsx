/** @format */

import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import type { MoodOption } from "../../components/MoodCard";
import MoodCardList from "../../components/MoodCardList";

export default function VerseScreen() {
  const handleSelectMood = (mood: MoodOption) => {
    console.log("Mood selected:", mood.id);
  };

  return (
    <View className="flex-1 bg-base">
      <View className="items-center pt-12 pb-6 px-5">
        <Ionicons name="heart-outline" size={36} color="#4A8B8F" />
        <Text className="text-2xl text-primary font-inter-bold mt-3">
          ¿Cómo está tu corazón hoy?
        </Text>
        <Text className="font-inter text-sm text-secondary text-center mt-2">
          Presiona la opción que mejor describe tu estado actual para recibir un
          versículo de la Biblia para tu día
        </Text>
      </View>
      <MoodCardList
        onSelectMood={(mood) => console.log(mood.id)}
      ></MoodCardList>
    </View>
  );
}
