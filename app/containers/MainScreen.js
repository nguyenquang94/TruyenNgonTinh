import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Dimensions, Image } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem, Subtitle, H3 } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import { openSideMenu } from '../actions/sidemenu';
import { Define } from '../Define';
import { requestListStory } from '../actions/request';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';

class MainScreen extends Component {

	componentDidMount() {
		this.props.dispatch(requestListStory(1));
	}

	render() {
		var screen = Dimensions.get('window');
		const { dispatch, absence } = this.props;
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header>
			            <Body>
			                <Title>Danh Sách Truyện Ngôn Tình</Title>
			            </Body>
			        </Header>
			        <ScrollView onMomentumScrollEnd={{}} style={{backgroundColor:'white', padding: 5}}>
			        	{this._renderListStory()}
			        </ScrollView>
			    </Container>
			</StyleProvider>
		);
	}

	_renderListStory() {
		var renderContent = [];
		if (this.props.request.data && this.props.request.data.length > 0) {
			this.props.request.data.map((item) => {
				renderContent.push(
					<View key={item.id} style={{flexDirection: 'row', borderBottomColor: '#DDDDDD', borderBottomWidth: 1, marginTop: 5}}>
						<View style={{flex : 1, alignItems: 'center', alignSelf: 'center'}}>
							<Image
					          style={{width: 50, height: 50}}
					          source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
					        />
						</View>
						<View style={{flex : 4.5}}>
							<Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
							<Text style={{fontSize: 15, marginTop: 5}} numberOfLines={2}>{item.message}</Text>
							<View style={{flexDirection: 'row'}}>
								<Icon name='md-person' />
								<Text style={{fontSize: 15, marginTop: 5, marginLeft: 5}}>{item.author.name}</Text>
							</View>
							<View style={{flexDirection: 'row', marginTop: 7}}>
								<Text style={{fontSize: 13, color: 'blue'}}>{item.complete} Chương</Text>
								<Text style={{fontSize: 13, color: 'green', marginLeft: 10}}>{item.view} View</Text>
								<Text style={{fontSize: 13, color: 'red', marginLeft: 10}}>{item.like} Like</Text>
							</View>
						</View>
					</View>
				);
			});
		}
		return renderContent;
	}

	renderNode(node, index, siblings, parent, defaultRenderer) {
		console.log('dasdasdsa', node + ' ' + parent);
	  	
	}
}

function mapStateToProps(state) {
	const {
		rootScreen,
		request
	} = state;

	return {
		rootScreen,
		request
	}
}

export default connect(mapStateToProps)(MainScreen)