/** @format */

import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import type { MoodOption } from "../../components/MoodCard";
import MoodCardList from "../../components/MoodCardList";

export default function VerseScreen() {
  const handleSelectMood = (mood: MoodOption) => {
    console.log("Mood selected:", mood.id);
  };
 
  return (
    <View className="flex-1 bg-base px-4">
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
      <Pressable className="bg-teal-deep rounded-2xl px-2 py-4 items-center gap-2.5 font-inter-semibold text-sm text-card">
        <Text className="font-inter-semibold text-sm text-card">
          Obtener versículo
        </Text>
      </Pressable>
    </View>
  );
}
