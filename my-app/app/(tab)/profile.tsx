import { getProfileData } from "@/api/api";
import { FontAwesome } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const profile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileData,
  });

  const textfun = (title: string, val: String) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text className="font-semibold text-lg mx-3 text-purple-800">
          {title} :
        </Text>
        <Text className="font-semibold text-lg  text-gray-400">{val}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-white pt-4">
      <FontAwesome
        className="mx-2 my-2"
        size={responsiveFontSize(13)}
        name="user-circle"
      />
      {textfun("Username", data?.id)}
      {textfun("Name", data?.name)}
      {textfun("Email", data?.email)}
    </SafeAreaView>
  );
};

export default profile;
