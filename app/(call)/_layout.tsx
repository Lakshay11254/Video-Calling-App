import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function CallRouteslayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Tabs
                screenOptions={({ route }) =>
                ({
                    header: () => (null),
                    tabBarStyle: {
                        display: route.name === "[id]" ? "none" : "flex",
                    },
                    tabBarLabelStyle: {
                        zIndex: 100,
                        paddingBottom: 5,

                    },

                })}>


                <Tabs.Screen
                name='index'
                options={{
                    title: "All Calls",
                    tabBarIcon: ({color}) => (
                            <Ionicons name='call-outline' size={24} color={color}/>
                    ),
                }}
                />
            </Tabs>
        </SafeAreaView>
    )
}