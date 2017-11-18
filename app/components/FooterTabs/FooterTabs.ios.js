import React, { PropTypes } from 'react';
import { TabBarIOS, Text } from 'react-native';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/Ionicons';

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired
}

export default function FooterTabs (props) {
  return (
    <TabBarIOS tintColor={colors.active}>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-home-outline'
        title='Home'
        selected={props.activeFooterTab === 'home'}
        onPress={() => props.onTabSelect('home')}>
          <Text>HOME!</Text>
      </Icon.TabBarItem>
    </TabBarIOS>
  )
}
