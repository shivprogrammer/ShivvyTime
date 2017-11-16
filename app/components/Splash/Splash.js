import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
// import { LoginButton } from 'react-native-fbsdk';
import { colors } from '~/styles';

Splash.propTypes = {

}

export default function Splash (props) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require('../../images/logo.png')} />
        <Text style={styles.slogan}>ShivvyTime</Text>
      </View>

      <View style={styles.loginContainer}>
        {/* <LoginButton
          style={{
            height: 30,
            width: 180,
            marginBottom: 15,
          }}
          onLoginFinished={props.onLoginFinished}/> */}
          <Text style={styles.assuranceText}>
            Don't worry, we don't post anything to Facebook.
          </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40
  }
})
