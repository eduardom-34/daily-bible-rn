/** @format */

import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function VerseScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Ionicons name="heart-outline"></Ionicons>
      <Text className="text-2xl text-gray-900 font-inter-bold">
        ¿Cómo está tu corazón hoy?
      </Text>
      <Text className="font-inter text-base text-secondary">
        Presiona la opción que mejor describe tu estado actual para recibir un
        versículo de la Biblia para tu día
      </Text>
    </View>
  );
}
