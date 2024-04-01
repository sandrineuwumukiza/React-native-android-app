import {React,useState} from 'react';
import {View,ScrollView,SafeAreaView,Text} from 'react-native'
import { COLORS,icons,images,SIZES,FONTS} from '../constants'
import { Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'
// import { Stack, useRouter } from 'expo-router';
import {Stack} from 'expo-router'

const Home = () => {
    // const router = useRouter()
    return (
       <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
        options={{
            headerStyle:{backgroundColor:COLORS.lightWhite},
        }}
        />

       </SafeAreaView>
    );
}

export default Home;