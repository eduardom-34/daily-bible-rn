/** @format */

import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

export type MoodOption = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

type MoodCardProps = {
  mood: MoodOption;
  onPress: (mood: MoodOption) => void;
};

export default function MoodCard({ mood, onPress }: MoodCardProps) {
  return (
    <Pressable
      onPress={() => onPress(mood)}
      className="bg-card rounded-2xl px-2 py-10 items-center gap-2 border border-border flex justify-center flex-col flex-1"
    >
      <Ionicons name={mood.icon} size={22} color="#4A8B8F" />
      <Text className="font-inter-semibold text-sm text-primary">
        {mood.label}
      </Text>
    </Pressable>
  );
}
