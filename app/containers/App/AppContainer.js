import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { ShivvyTimeNavigator } from '~/containers'

export default class AppContainer extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <ShivvyTimeNavigator />
      </View>
    )
  }
}
