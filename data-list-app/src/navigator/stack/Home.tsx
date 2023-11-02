import { Stack } from "../../config/configContext";
import HomeScreen from "../../screens/HomeScreen";
import DataListScreen from "../../screens/DataListScreen";
import DetailScreen from "../../screens/DetailScreen";

const Home = () => {
  
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{headerShown: true}} name="DataListScreen" component={DataListScreen}/>
        <Stack.Screen options={{headerShown: true}} name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
  );
};

export default Home;
