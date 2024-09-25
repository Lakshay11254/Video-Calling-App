import { SignedIn,useUser } from '@clerk/clerk-expo'
import { Text, View } from 'react-native'

export default function Page() {
  const { user } = useUser()

  return (
    <View>
<Text>Hello World</Text>

<SignedIn>
  <Text>Signed in</Text>
</SignedIn>



      {/* <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <Link href="/">
          <Text>Sign In</Text>
        </Link>
        <Link href="/">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut> */}
    </View>
  )
}