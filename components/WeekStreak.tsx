/** @format */

import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const DAYS = ["L", "M", "M", "J", "V", "S", "D"] as const;

type WeekStreakProps = {
  completedDays?: boolean[];
};

export default function WeekStreak({
  completedDays = Array(7).fill(false),
}: WeekStreakProps) {
  const today = (new Date().getDay() + 6) % 7; // 0=Lunes … 6=Domingo

  return (
    <View className="bg-card rounded-2xl px-4 py-4 border border-border">
      <Text className="font-inter-semibold text-sm text-secondary mb-3">
        Tu semana
      </Text>
      <View className="flex-row justify-between">
        {DAYS.map((day, index) => {
          const isCompleted = completedDays[index];
          const isToday = index === today;

          return (
            <View key={index} className="items-center gap-1.5">
              <Text
                className={`font-inter-semibold text-xs ${
                  isToday ? "text-teal-deep" : "text-secondary"
                }`}
              >
                {day}
              </Text>
              <View
                className={`w-9 h-9 rounded-full items-center justify-center ${
                  isCompleted
                    ? "bg-teal-deep"
                    : isToday
                      ? "border-2 border-teal-deep bg-transparent"
                      : "bg-surface"
                }`}
              >
                {isCompleted && (
                  <Ionicons name="checkmark" size={18} color="#FFFDF7" />
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
