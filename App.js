import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationBtn from "./NavigationButtons";

import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Onboarding2 from "./screens/Onboarding/Onboarding2";
import Onboarding3 from "./screens/Onboarding/Onboarding3";
import Onboarding4 from "./screens/Onboarding/Onboarding4";
import Onboarding5 from "./screens/Onboarding/Onboarding5";
import Onboarding6 from "./screens/Onboarding/Onboarding6";
import SplashScreen from "./screens/SplashScreen--/SplashScreen";
import LoginOrSignup from "./screens/SplashScreen--/LoginOrSignup";
import LoginScreen from "./screens/SplashScreen--/LoginScreen";
import SignupScreen from "./screens/SplashScreen--/SignupScreen";
import ResetPassword from "./screens/SplashScreen--/ResetPassword";
import Verification from "./screens/SplashScreen--/Verification";
import NewPassword from "./screens/SplashScreen--/NewPassword";
import Home from "./screens/Home--/Home";
import Search from "./screens/Home--/Search";
import SearchResults from "./screens/Home--/SearchResults";
import SearchByActor from "./screens/Home--/SearchByActor";
import SearchBlank from "./screens/Home--/SearchBlank";
import MovieDetails from "./screens/Home--/MovieDetails";
import Download from "./screens/Home--/Download";
import BlankDownload from "./screens/Home--/BlankDownload";
import Wishlist from "./screens/Home--/Wishlist";
import BlankWishlist from "./screens/Home--/BlankWishlist";
import Genre from "./screens/Home--/Genre";
import UpcomingMovie from "./screens/Home--/UpcomingMovie";
import Trailer from "./screens/Home--/Trailer";
import MostPopularMovie from "./screens/Home--/MostPopularMovie";
import SerialDetails from "./screens/Home--/SerialDetails";
import PremiumAcc from "./screens/Home--/PremiumAcc";
import PaymentMethod from "./screens/Home--/PaymentMethod";
import Profile from "./screens/Home--/Profile";
import EditProfile from "./screens/Home--/EditProfile";
import PrivacyPolicy from "./screens/Home--/PrivacyPolicy";
import Language from "./screens/Home--/Language";
import Notification from "./screens/Home--/Notification";

import Upload from "./screens/uploadFiles/Upload";
import UploadDone from "./screens/uploadFiles/UploadDone";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="NavigationBtn" component={NavigationBtn} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} />
        <Stack.Screen name="Onboarding5" component={Onboarding5} />
        <Stack.Screen name="Onboarding6" component={Onboarding6} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginOrSignup" component={LoginOrSignup} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="SearchByActor" component={SearchByActor} />
        <Stack.Screen name="SearchBlank" component={SearchBlank} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="Download" component={Download} />
        <Stack.Screen name="BlankDownload" component={BlankDownload} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="BlankWishlist" component={BlankWishlist} />
        <Stack.Screen name="Genre" component={Genre} />
        <Stack.Screen name="UpcomingMovie" component={UpcomingMovie} />
        <Stack.Screen name="Trailer" component={Trailer} />
        <Stack.Screen name="MostPopularMovie" component={MostPopularMovie} />
        <Stack.Screen name="SerialDetails" component={SerialDetails} />
        <Stack.Screen name="PremiumAcc" component={PremiumAcc} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Notification" component={Notification} />

        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="UploadDone" component={UploadDone} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
