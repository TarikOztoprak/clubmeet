import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
function BottomBar({name,code, navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=> navigation.navigate('Clubs')}
            >
                <Text style = {styles.txt}>
                📚
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={[styles.btn, styles.border]}
            onPress={()=> navigation.navigate('Home', {name: name, code: code})}
            >
                <Text style = {styles.txt}>
                💬
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=> navigation.navigate('Voice', {name: name, code: code})}
            >
                <Text style = {styles.txt}>
                📖
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        bottom: 0
    },
    btn:{
        flex: 1,
        backgroundColor: '#EF3939',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
       
    },
    txt:
    {
        color: '#ffffff',
        fontSize: 26
    },
    border:{
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: 'silver'
    }
})