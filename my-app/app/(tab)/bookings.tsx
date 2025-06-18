import { Utils } from "@/contants/Utils";
import { useBookingStore } from "@/store/bookingStore";
import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";

const bookings = () => {
  const bookings = useBookingStore((state) => state.bookings);

  const bookeingfun = (title: string, val: string) => {
    return (
      <View className="w-1/5">
        <Text className="font-bold text-sm text-gray-400">{title}</Text>
        <Text className="font-semibold text-sm text-purple-800">{val}</Text>
      </View>
    );
  };

  const bookingRender = (item: any) => {
    console.log("booking flalist", bookings, item);

    return (
      <View className="mx-3 my-2 rounded-md bg-white elevation overflow-hidden">
        <Image
          style={{ width: "100%", height: Utils.calculatedHeight(15) }}
          source={{ uri: item?.item?.images }}
          className="w-full h-10"
        />
        <View className="mx-3 mt-3 flex-row justify-between">
          <Text className="font-medium text-xl">{item?.item?.title}</Text>
          <Text className="font-bold text-2xl">${item?.item?.price}</Text>
        </View>
        <View className="flex-row justify-around p-5 ">
          {bookeingfun("User ID", "User_1")}
          <View style={{ width: 1, backgroundColor: "black" }} />
          {bookeingfun("Check In", "25/05/2025")}
          <View style={{ width: 1, backgroundColor: "black" }} />
          {bookeingfun("Check Out", "30/05/2025")}
          <View style={{ width: 1, backgroundColor: "black" }} />
          {bookeingfun("Status", "Confirmed")}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white ">
      {bookings.length === 0 ? (
        <Text className="text-center font-bold text-lg text-gray-700 ">
          No bookings yet.
        </Text>
      ) : (
        <FlatList
          data={bookings}
          renderItem={bookingRender}
          keyExtractor={(item) => item?.id?.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default bookings;
