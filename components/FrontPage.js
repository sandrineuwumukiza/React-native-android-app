import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Button, Platform } from 'react-native';
import icons from '../assets/icons';

const FrontPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.leftView}>
                <Image
                    style={styles.left}
                    source={icons.left}
                />
            </View>

            <View style={styles.ui}>
                <Text style={styles.uiText}>UI/UX Design</Text>
                <View style={styles.uiFilter}>
                    <Image
                        style={styles.filter}
                        source={icons.filter}
                    />
                </View>
                <Text style={styles.textOpportunity}>32 Job Opportunities</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title='Most Relevant' onPress={() => {}} style={styles.button1} color='#444262'/>
                <Button title='Most Recent' onPress={() => {}} style={styles.button2} color='#C1C0C8' Style={styles.button2}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 20 : 0
    },
    left: {
        width: 20,
        height: 20,
    },
    leftView: {
        backgroundColor: 'lightgrey',
        padding: 3,
        borderRadius: 10,
        position: 'absolute',
        top: 25,
        left: 20,
    },
    ui: {
        marginTop: 45,
        left: 20,
        // alignItems: 'center',
    },
    filter: {
        width: 20,
        height: 20,
    },
    uiText: {
        fontSize: 30,
    },
    uiFilter: {
        backgroundColor: 'orange',
        position: 'absolute',
        top: 10,
        right: 40,
        padding: 5,
        borderRadius: 10,
    },
    textOpportunity: {
        fontSize: 15,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    button1:{
         backgroundColor: 'white', 
        borderRadius: 20, 
        marginHorizontal: 10,
    },
    button2:{
        backgroundColor: '#C1C0C8',
        borderRadius: 20, 

    }
});

export default FrontPage;
