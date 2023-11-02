import { View, Text, ImageBackground, StyleSheet, Pressable } from "react-native";
import { Icon } from '@rneui/themed';


interface Image{
    uri: string;
}

const image: Image = {
    uri: 'https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg'
}

const HomeScreen = (props:any) => {
    return (
        <View style={{flex: 1}}>
            <ImageBackground
            source={image} 
            resizeMode="cover" 
            style={styles.image}
            >
                <Pressable 
                style={styles.flexbutton}
                onPress={()=> props.navigation.navigate("DataListScreen")}
                >
                    <Text style={styles.bottomText}>Get Start</Text>
                        <Icon 
                        name="arrow-forward-outline"
                        type='ionicon'
                        color='white'
                        solid={true}
                        size={40}
                        style={{marginLeft: -10}}
                        
                        />
                    
                </Pressable>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    flexbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 3,
        height: 60,
        width: 200,
        backgroundColor: '#4ebbf9',
        marginBottom: 50,
        flexWrap: 'wrap'
      },
    bottomText: {
        fontWeight: '400',
        fontSize: 25,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:60,
        textAlign: 'center'
    },
    
})

export default HomeScreen;