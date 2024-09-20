import React, { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect only when isSignedIn changes to true
      <Redirect href={"/(call)"} />
    }
  }, [isSignedIn]); // Adding isSignedIn to the dependency array

  if (isSignedIn) {
    return null; // Prevent rendering when redirecting
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "#5F5DEC",
    }}>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            title: "Sign in to get started",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            title: "Create a new account",
            headerShown: false,
            headerBackTitle: "Sign in",
            headerStyle: {
              backgroundColor: "#5F5DEC"
            },
            headerTintColor: "white",

          }}
        />
      </Stack>
    </SafeAreaView>
  );
}

// import React from 'react'
// import { useAuth } from '@clerk/clerk-expo';
// import { Redirect, Stack } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';


// export default function AuthRouteslayout() {
// const {isSignedIn} = useAuth();

// if (isSignedIn) {
//     return <Redirect href={"/(call)"}/>
// }
//   return (
//     <SafeAreaView style={{
//         flex: 1,
//         backgroundColor: "#5F5DEC",
//     }}
//     >
//       <Stack>
//         <Stack.Screen
//         name='sign-in'
//         options={{
//             title: "Sign in to get started",
//             headerShown: false,
//         }}
//         />
//       </Stack>
//     </SafeAreaView>
//   )
// }