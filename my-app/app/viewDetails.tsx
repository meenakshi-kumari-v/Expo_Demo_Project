import CustomButton from "@/src/components/CustomButton";
import { useBookingStore } from "@/store/bookingStore";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const viewDetails = () => {
  const { data }: any = useLocalSearchParams();
  const parsedData = JSON.parse(data); // because router passes it as string
  const coordinates = parsedData?.location?.coordinates;
  const addressval = `${parsedData?.location?.address},${parsedData?.location?.city}, ${parsedData?.location?.state}`;
  const addBooking = useBookingStore((state) => state.addBooking);
  useEffect(() => {
    console.log("proertyd ata screm", parsedData);
  }, []);

  const imageRender = (item: { item: string; index: number }) => {
    return (
      <Image
        key={item?.index}
        className="rounded-lg m-2 w-40 h-40"
        source={{ uri: item?.item }}
      />
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates?.latitude,
          longitude: coordinates?.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: coordinates?.latitude,
            longitude: coordinates?.longitude,
          }}
          title={parsedData.title}
        />
      </MapView>
      <View className="bg-white p-5 rounded-3xl -mt-6">
        <Text className="font-bold text-2xl text-purple-800">
          {parsedData?.title}
        </Text>
        <Text className="font-medium text-base">{addressval}</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={parsedData?.images}
          renderItem={imageRender}
          keyExtractor={(id) => id.toString()}
        />
        <Text className="font-bold text-xl my-4">Services</Text>
        {parsedData?.features.map((item: string, index: number) => {
          return (
            <View key={index} className="flex-row m-1">
              <FontAwesome
                className="from-neutral-500 mx-2"
                size={responsiveFontSize(2)}
                name="check-square-o"
                style={{}}
                color={"gray"}
              />
              <Text className="font-medium text-base">{item}</Text>
            </View>
          );
        })}
      </View>
      <View className="flex-row items-center justify-between mx-6">
        <Text className="font-semibold text-xl">${parsedData?.price}</Text>
        <CustomButton
          onPress={() => {
            const alreadyBooked = useBookingStore
              .getState()
              .bookings.some((b) => b.id === parsedData.id);
            if (alreadyBooked) {
              Alert.alert("", "This property is already in your bookings.");
              return;
            }
            addBooking({
              id: parsedData?.id,
              title: parsedData?.title,
              images: parsedData?.images?.[0],
              price: parsedData?.price,
            });
            Alert.alert("Success", "Property has been booked!");
          }}
          title="Add Property"
        />
      </View>
    </SafeAreaView>
  );
};

export default viewDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    // width: "100%",
    height: "40%",
    // margin: 10,
    // flex: 1,
    // margin: 10,
  },
});
