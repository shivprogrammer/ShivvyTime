import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
// import { LoginButton } from 'react-native-fbsdk'

Splash.propTypes = {

}

export default function Splash (props) {
  return (
    <View>
      <View>
        <Image source={require('../../images/logo.png')} />
        <Text>ShivvyTime</Text>
      </View>

      <View>
        {/* <LoginButton
          onLoginFinished={() => ({})}/> */}
          <Text>
            Don't worry, we don't post anything to Facebook.
          </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})
