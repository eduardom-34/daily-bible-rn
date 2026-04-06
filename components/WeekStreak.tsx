/** @format */

import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"] as const;

function getWeekDates(): number[] {
  const now = new Date();
  const dayOfWeek = (now.getDay() + 6) % 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - dayOfWeek);

  return DAYS.map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.getDate();
  });
}

type WeekStreakProps = {
  completedDays?: boolean[];
};

export default function WeekStreak({
  completedDays = Array(7).fill(false),
}: WeekStreakProps) {
  const today = (new Date().getDay() + 6) % 7;
  const dates = getWeekDates();

  return (
    <View className="flex-row justify-between items-center px-4 py-3">
      {DAYS.map((day, index) => {
        const isCompleted = completedDays[index];
        const isToday = index === today;
        const isFuture = index > today;

        return (
          <View key={index} className="items-center gap-1">
            <Text
              className={`text-[10px] font-inter-medium ${
                isToday
                  ? "text-teal-deep font-inter-bold"
                  : isFuture
                    ? "text-secondary/40"
                    : "text-secondary"
              }`}
            >
              {day}
            </Text>
            <View
              className={`w-8 h-8 rounded-full items-center justify-center ${
                isCompleted
                  ? "bg-teal-deep"
                  : isToday
                    ? "border border-teal-deep/30 bg-teal-deep/5"
                    : "bg-surface"
              }`}
            >
              {isCompleted ? (
                <Ionicons name="checkmark" size={16} color="#FFFDF7" />
              ) : (
                <Text
                  className={`text-xs font-inter-semibold ${
                    isToday
                      ? "text-teal-deep"
                      : isFuture
                        ? "text-secondary/40"
                        : "text-secondary"
                  }`}
                >
                  {dates[index]}
                </Text>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}
