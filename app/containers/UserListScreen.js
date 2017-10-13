import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

class UserListScreen extends Component {
	render() {
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header>
			            <Left>
			                <Button transparent>
			                    <Icon name='menu' />
			                </Button>
			            </Left>
			            <Body>
			                <Title>Danh sách nhân viên</Title>
			            </Body>
			            <Right />
			        </Header>
			        <Content>
			            // Your main content goes here
			        </Content>
			        <Footer>
			            <FooterTab>
			                <Button full>
			                    <Text>Footer</Text>
			                </Button>
			            </FooterTab>
			        </Footer>
			    </Container>
			</StyleProvider>
		);
	}
}


function mapStateToProps(state) {
	const {
		rootScreen,
		absence,
	} = state;

	return {
		rootScreen,
		absence,
	}
}

export default connect(mapStateToProps)(UserListScreen)