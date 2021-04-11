import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexWrap: 'wrap'
    },
    caja1:{
        // alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: 'red',
        fontSize: 30,
    },
    caja2:{
        // alignSelf: 'flex-start',
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: 'blue',
        fontSize: 30,
    },
    caja3:{
        // alignSelf: 'flex-end',
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: 'green',
        fontSize: 30,
    }
})
