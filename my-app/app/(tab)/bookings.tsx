import { useBookingStore } from "@/store/bookingStore";
import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

const bookings = () => {
  const { bookings } = useBookingStore();
  const [properties, setProperties] = useState([]);

  const data = [
    {
      id: "1",
      propertyId: "1",
      userId: "user1",
      checkIn: "2024-02-01",
      checkOut: "2024-02-05",
      status: "confirmed",
    },
    {
      id: "2",
      propertyId: "2",
      userId: "user1",
      checkIn: "2024-02-01",
      checkOut: "2024-02-05",
      status: "confirmed",
    },
    {
      id: "3",
      propertyId: "3",
      userId: "user1",
      checkIn: "2024-02-01",
      checkOut: "2024-02-05",
      status: "confirmed",
    },
  ];

  const bookeingfun = (title: string, val: string) => {
    return (
      <View className="w-1/5">
        <Text className="font-bold text-sm text-gray-400">{title}</Text>
        <Text className="font-semibold text-sm text-purple-800">{val}</Text>
      </View>
    );
  };

  const bookingRender = (item: any) => {
    console.log("booking flalist", item);

    return (
      <View className="flex-row justify-around p-5 mx-2 my-1 rounded-md bg-white elevation">
        {bookeingfun("User ID", item?.item?.userId)}
        <View style={{ width: 1, backgroundColor: "black" }} />
        {bookeingfun("Check In", item?.item?.checkIn)}
        <View style={{ width: 1, backgroundColor: "black" }} />
        {bookeingfun("Check Out", item?.item?.checkOut)}
        <View style={{ width: 1, backgroundColor: "black" }} />
        {bookeingfun("Status", item?.item?.status)}
      </View>
    );
  };

  // if (properties.length === 0) return <Text className="p-4 ">No bookings yet.</Text>;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={data}
        renderItem={bookingRender}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default bookings;
