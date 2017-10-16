import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import { openSideMenu } from '../actions/sidemenu'
import { switchToAbsenceList, switchToUserList } from '../actions/nav'

class SideMenuScreen extends Component {
	render() {
		const { me, dispatch } = this.props;
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header>
			            <Body>
			                <Title>{  "LTM"}</Title>
			            </Body>
			        </Header>
			        <Content style={{ backgroundColor: "#FFFFFF" }}>
			        	<List>
			        		<ListItem button onPress={() => dispatch(switchToAbsenceList())}>
								<Body>
									<Text>Danh sách nghỉ</Text>
								</Body>
							</ListItem>
			        		<ListItem button onPress={() => dispatch(switchToUserList())}>
								<Body>
									<Text>Danh sách nhân viên</Text>
								</Body>
							</ListItem>
			        	</List>
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
		me
	} = state;

	return {
		rootScreen,
		me,
	}
}

export default connect(mapStateToProps)(SideMenuScreen)