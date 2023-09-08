import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';

export default function NavigationBtn({navigation}) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding1')}
          style={styles.btn}>
          <Text>OnboardingV1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SplashScreen')}
          style={styles.btn}>
          <Text>SplashScreen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  btn: {
    marginTop: 10,
    width: 200,
    height: 20,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
