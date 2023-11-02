import { Stack } from "../../config/configContext";
import ProfileScreen from "../../screens/ProfileScreen";

const Profile = () => {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>

  );
};

export default Profile;
