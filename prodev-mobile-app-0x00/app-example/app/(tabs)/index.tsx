import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-blue-500"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text className="text-white text-lg font-bold">First App Created</Text>
    </View>
  );
}
