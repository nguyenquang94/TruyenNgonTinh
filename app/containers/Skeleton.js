import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dimensions, View, StyleSheet } from 'react-native'

import SideMenuScreen from './SideMenuScreen';
import MainNavigator from '../navigators/MainNavigator';

import { setSideMenu, closeSideMenu, allowShowMenu } from '../actions/sidemenu';
import { Drawer } from 'native-base';


export class Skeleton extends Component {
	constructor(props) {
		super(props);
		const w = Dimensions.get('window');
		this.state = {
			screenSize: w
		}
	}
	render() {
		const { dispatch, sidemenu } = this.props;
		if (!sidemenu.allowShowMenu) {
			return (
				<View onLayout={ this._onLayout.bind(this) } style={{ flex: 1 }}>
					<Drawer
						ref={(ref) => dispatch(setSideMenu(ref))}
						content={<SideMenuScreen navigator={this.navigator} />}
						onClose={() => dispatch(closeSideMenu())}
					>
						<MainNavigator />
					</Drawer>
				</View>
			);
		}
		else
		{
			return (
				<View style={ styles.hScreen } onLayout={ this._onLayout.bind(this) }>
					<View style={{ flex: 250 }}>
						<SideMenuScreen />
					</View>
					<View style={{ flex: this.state.screenSize.width - 250 }}>
						<MainNavigator />
					</View>
				</View>
			)
		}
	}

	_onLayout(event) {
		var {x, y, width, height} = event.nativeEvent.layout;
		const { dispatch, sidemenu } = this.props;
		this.props.dispatch(allowShowMenu(width >= 500));
	}
}

const styles = StyleSheet.create({
	hScreen: {
		flex: 1,
		flexDirection: 'row',
	}
});

function mapStateToProps(state) {
	const {
		rootScreen,
		absence,
		sidemenu,
	} = state;

	return {
		rootScreen,
		absence,
		sidemenu
	}
}

export default connect(mapStateToProps)(Skeleton)