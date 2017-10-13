import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Dimensions } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem, Subtitle, H3 } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import { openSideMenu } from '../actions/sidemenu';
import { Define } from '../Define';
import moment from 'moment';

class MainScreen extends Component {

	componentDidMount() {
	}

	render() {
		var screen = Dimensions.get('window');
		const { dispatch, absence } = this.props;
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header>
			            <Left>
			                <Button transparent onPress={() => dispatch(openSideMenu())}>
			                    <Icon name='menu' />
			                </Button>
			            </Left>
			            <Body>
			                <Title>Lịch nghỉ</Title>
			                <Subtitle>Hôm nay</Subtitle>
			            </Body>
			            <Right />
			        </Header>
			        <Content>
			        	
			        </Content>
			    </Container>
			</StyleProvider>
		);
	}
}

function mapStateToProps(state) {
	const {
		rootScreen,
	} = state;

	return {
		rootScreen,
	}
}

export default connect(mapStateToProps)(MainScreen)