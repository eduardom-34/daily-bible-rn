import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
      className="bg-card rounded-2xl p-4 flex-row items-center gap-3 border border-border"
    >
      <Ionicons name={mood.icon} size={24} color="#4A8B8F" />
      <Text className="font-inter-semibold text-base text-primary">
        {mood.label}
      </Text>
    </Pressable>
  );
}
