import { getApiData } from "@/api/api";
import { Utils } from "@/contants/Utils";
import { useQuery } from "@tanstack/react-query";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["propertyData"],
    queryFn: getApiData,
  });

  const viewDetails = (data: any) => {
    router.push({
      pathname: "/viewDetails",
      params: { data: JSON.stringify(data) }, // Assuming `data` has an `id` field
    });
  };
  const renderItembox = (data: any) => {
    console.log("datt flatlist", data);
    return (
      <TouchableOpacity
        className="m-5 rounded-xl bg-white overflow-hidden"
        onPress={() => viewDetails(data)}
        style={{
          elevation: 2,
          // margin: Utils.calculatedHeight(1.5),
        }}
      >
        <Image
          style={{ width: "100%", height: Utils.calculatedHeight(15) }}
          source={{ uri: data.images[0] }}
        />
        <View className="mx-3 my-3 flex-row justify-between">
          <Text className="font-medium text-xl">{data?.title}</Text>
          <Text className="font-bold text-2xl">${data?.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={(item) => renderItembox(item.item)}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default home;
