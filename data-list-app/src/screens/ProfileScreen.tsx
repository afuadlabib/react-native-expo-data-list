import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Linking,
  Pressable,
} from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView scrollEnabled={true}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://st.depositphotos.com/70139376/59730/v/450/depositphotos_597304060-stock-illustration-abstract-background-with-technology-circuit.jpg",
          }}
        >
          <View>
            <View style={styles.wrapperHeader}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#fff",
                  marginTop: "40%",
                  paddingBottom: 20,
                }}
              >
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1474447976065-67d23accb1e3?auto=format&fit=crop&q=80&w=1285&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                />
                <Text style={styles.h1}>Ahmad Fuad Labib Al Habib</Text>
                <Text style={styles.h2I}>Full Stack JavaScript</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            paddingTop: 15,
            paddingLeft: 15,
          }}
        >
          <View style={styles.title}>
            <Text style={styles.textTitle}>Summary</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.paragraf}>
              I am a full stack developer with primary expertise in web and
              mobile application development. I started this journey after
              graduating from Hacktiv8 bootcamp and have been involved in
              various projects since then. I have a high enthusiasm to continue
              learning and developing innovative technology solutions.
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Contact Person</Text>
          </View>
          <View style={{ paddingBottom: 20, paddingLeft: 20 }}>
            <Text style={styles.h3}>Email</Text>
            <Text style={styles.h3I}></Text>
            <Text style={styles.h3}>No. Hp</Text>
            <Text style={styles.h3I}>081399553782</Text>
          </View>
          <View
            style={{
              marginBottom: 20,
              flex: 1,
              flexDirection: "row",
              gap: 10,
              marginRight: 15,
            }}
          >
            <Pressable
              style={styles.btn}
              onPress={() => Linking.openURL("https://github.com/afuadlabib")}
            >
              <Text style={styles.btnTxt}>GitHub</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/ahmad-fuad-labib-al-habib-a80195275"
                )
              }
            >
              <Text style={styles.btnTxt}>LinkedIn</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#1b4f72",
  },
  h2I: {
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "italic",
    color: "#3498db",
  },
  h3: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1b4f72",
  },
  h3I: {
    fontSize: 16,
    fontStyle: "italic",
  },
  backgroundImage: {
    flex: 1,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  profileImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 300,
    marginTop: -50,
    marginLeft: "35%",
    marginRight: "35%",
  },
  wrapperHeader: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    height: "70%",
  },
  title: {
    flex: 0.3,
    backgroundColor: "#1b4f72",
    justifyContent: "center",
    paddingLeft: 30,
    width: "60%",
    borderBottomRightRadius: 500,
    borderTopRightRadius: 500,
    padding: 5,
    marginBottom: 5,
  },
  textTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    fontStyle: "italic",
  },
  paragraf: {
    paddingVertical: 5,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 14,
  },
  btn: {
    backgroundColor: "#1b4f72",
    padding: 10,
    width: 130,
    borderRadius: 200,
    flex: 1,
    alignItems: "center",
  },
  btnTxt: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default ProfileScreen;
