import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import { FooterTabs } from '~/components';
import { connect } from 'react-redux';

class FooterTabsContainer extends Component {
  static PropTypes = {
    activeFooterTab: PropTypes.string.isRequired
  }
  state = {}
  render() {
    return (
      <FooterTabs activeFooterTab={this.props.activeFooterTab}/>
    )
  }
}

function mapStateToProps ({activeFooterTab}) {
  return {
    activeFooterTab
  }
}

export default connect()(
  mapStateToProps
)(
  FooterTabsContainer
)
