/** @format */

import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeIn,
  FadeInUp,
  SlideInLeft,
} from "react-native-reanimated";
import MoodCardList from "../../components/MoodCardList";
import WeekStreak from "../../components/WeekStreak";

export default function VerseScreen() {
  const [focusKey, setFocusKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setFocusKey((k) => k + 1);
    }, []),
  );

  return (
    <View className="flex-1 bg-base px-4" key={focusKey}>
      <Animated.Text
        entering={FadeInDown.duration(600).springify()}
        className="text-2xl font-inter-bold text-primary pt-14 pb-4"
      >
        Alivio diario
      </Animated.Text>

      <Animated.View entering={SlideInLeft.duration(500).delay(200)}>
        <WeekStreak />
      </Animated.View>

      <Animated.View
        entering={FadeIn.duration(600).delay(400)}
        className="items-center pb-6 px-5 mt-4"
      >
        <Text className="text-2xl text-primary font-inter-bold mt-3">
          ¿Cómo está tu corazón hoy?
        </Text>
      </Animated.View>

      <MoodCardList onSelectMood={(mood) => console.log(mood.id)} />

      <Animated.View entering={FadeInUp.duration(500).delay(800)}>
        <Pressable className="bg-teal-deep rounded-2xl px-2 py-4 items-center gap-2.5 font-inter-semibold text-sm text-card">
          <Text className="font-inter-semibold text-sm text-card">
            Obtener versículo
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
