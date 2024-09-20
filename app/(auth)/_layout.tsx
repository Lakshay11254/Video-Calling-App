
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AuthRouteslayout() {
const {isSignedIn} = useAuth();

if (isSignedIn) {
    return <Redirect href={"/(call)"}/>
}
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#5F5DEC",
    }}
    >
      <Stack>
        <Stack.Screen
        name='sign-in'
        options={{
            title: "Sign in to get started",
            headerShown: false,
        }}
        />
      </Stack>
    </SafeAreaView>
  )
}