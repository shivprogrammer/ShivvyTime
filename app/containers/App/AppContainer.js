import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { ShivvyTimeNavigator } from '~/containers';
import { PreSplash } from '~/components';

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
  }
  // static defaultProps = {
  //   isAuthenticating: true
  // }
  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
            ? <PreSplash />
            : <ShivvyTimeNavigator isAuthed={this.props.isAuthed} />}
      </View>
    )
  }
}

function mapStateToProps ({authentication}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed
  }
}

export default connect(
  mapStateToProps
)(AppContainer)
