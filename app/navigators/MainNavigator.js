import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import RootScreen from '../containers/RootScreen';
import MainScreen from '../containers/MainScreen';

export const MainNavigator = StackNavigator({
	Root: { screen: RootScreen },
	Main: { screen: MainScreen },
}, {
	headerMode: 'none'
});

class MainNavigatorScreen extends Component {
	render() {
		return (
			<MainNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
			})} />
		);
	}
}

function mapStateToProps(state) {
	return {
		nav: state.nav
	}
}

export default connect(mapStateToProps)(MainNavigatorScreen);