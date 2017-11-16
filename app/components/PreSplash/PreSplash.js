import React, { PropTypes, Component } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

export default class PreSplash extends Component {
  static propTypes = {}
  state = {
    rotation: new Animated.Value(0)
  }
  componentDidMount () {
    this.interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(this.state.rotation, {toValue: -1, duration: 150}),
        Animated.timing(this.state.rotation, {toValue: 1, duration: 150}),
        Animated.timing(this.state.rotation, {toValue: 0, duration: 250})
      ]).start()
    }, 1000)
  }
  componentWillUnMount () {
    window.clearInterval(this.interval)
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={[styles.image, this.getTransform()]}
          source={require('../../images/logo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 300,
  }
})
