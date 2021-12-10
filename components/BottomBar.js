import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
function BottomBar({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=> navigation.navigate('Clubs')}
            >
                <Text style = {styles.txt}>
                    Clubs
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=> navigation.navigate('Home')}
            >
                <Text style = {styles.txt}>
                    Chat
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=> navigation.navigate('Voice')}
            >
                <Text style = {styles.txt}>
                    Voice
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end',
        width: '100%'
    },
    btn:{
        flex: 1,
        backgroundColor: '#EF3939',
        textAlign: 'center'
    },
    txt:
    {
        color: '#ffffff',
        fontSize: 26
    }
})