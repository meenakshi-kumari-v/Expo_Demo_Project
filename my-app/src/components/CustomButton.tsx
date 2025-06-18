import { Utils } from "@/contants/Utils";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
}

const CustomButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      className="rounded-md m-2 items-center justify-center"
      style={styles.container}
      onPress={props?.onPress}
    >
      <Text className="text-purple-800 font-bold">{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: Utils.calculatedHeight(5),
    paddingHorizontal: Utils.calculatedWidth(8),
    borderColor: "purple",
    borderWidth: Utils.calculatedHeight(0.2),
  },
});
