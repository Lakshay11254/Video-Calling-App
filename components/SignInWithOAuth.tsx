import React, { useCallback, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Platform } from 'react-native'; // Import Platform to check for the environment
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import StyledButton from './StyledButton';

// Modified useWarmUpBrowser function
export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Only warm up the browser on native platforms (iOS, Android)
    if (Platform.OS !== 'web') {
      // Warm up the browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return <StyledButton title="Sign in with Google" onPress={onPress} />;
};

export default SignInWithOAuth;


// import React, { useCallback, useEffect } from 'react'
// import * as WebBrowser from 'expo-web-browser'
// import { Text, View, Button } from 'react-native'
// import { Link } from 'expo-router'
// import { useOAuth } from '@clerk/clerk-expo'
// import * as Linking from 'expo-linking'
// import StyledButton from './StyledButton'

// export const useWarmUpBrowser = () => {
// useEffect(() => {
//     // Warm up the android browser to improve UX
//     // https://docs.expo.dev/guides/authentication/#improving-user-experience
//     void WebBrowser.warmUpAsync()
//     return () => {
//       void WebBrowser.coolDownAsync()
//     }
//   }, [])
// }

// WebBrowser.maybeCompleteAuthSession()

// const SignInWithOAuth = () => {
//   useWarmUpBrowser()

//   const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

//   const onPress = useCallback(async () => {
//     try {
//       const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
//         redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
//       })

//       if (createdSessionId) {
//         setActive!({ session: createdSessionId })
//       } else {
//         // Use signIn or signUp for next steps such as MFA
//       }
//     } catch (err) {
//       console.error('OAuth error', err)
//     }
//   }, [])

//   return (

//       <StyledButton title="Sign in with Google" onPress={onPress} />

//   )
// }
// export default SignInWithOAuth

