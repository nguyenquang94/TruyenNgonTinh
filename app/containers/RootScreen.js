import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import { Define } from '../Define';

class RootScreen extends Component {

	render() {
		const { rootScreen, me } = this.props;
		return <MainScreen />;
	}
}

function mapStateToProps(state) {
	const {
		rootScreen,
		me
	} = state;

	return {
		rootScreen,
		me
	}
}

export default connect(mapStateToProps)(RootScreen)