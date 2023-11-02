import { View, Text, Image, StyleSheet } from "react-native";

const DetailScreen = (props: any) => {

    const data = props.route.params;

    if (!data) {
        return (
          <View style={styles.loading}>
            <Text>Loading ...</Text>
          </View>
        );
      }
      
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0.7}}>
                <Image style={styles.image} source={{uri: data.thumbnailUrl}} />
            </View>
            <Text style={styles.text}>{data.title.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '50%',
    },
    text: {
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    loading:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DetailScreen;