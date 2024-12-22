import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  return (
    <View>
      <Text>Property</Text>
    </View>
  );
};

export default Property;
