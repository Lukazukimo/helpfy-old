import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native'
import {
	Container, Tabs, Tab, TabHeading
} from 'native-base'
import ProfileInformation from './ProfileInformation'
import ProfileComment from './ProfileComment'
import ProfilePosts from './ProfilePosts'
import Icon from 'react-native-vector-icons/Feather'

class Profile extends Component {

	render() {
		return(
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.profile}>
						<Text>
							Profile
						</Text>
					</View>				
					<Container>
						<View style={styles.conteudo}>
							<Tabs>
								<Tab heading={
									<TabHeading style={{ backgroundColor : 'red' }}>
										<Icon name='user-check' size={26}/>										
									</TabHeading>} >
										<ProfileInformation />
								</Tab>
								<Tab heading={
									<TabHeading>
										<Icon name='grid' size={26}/>
									</TabHeading>}>
										<ProfilePosts />
								</Tab>
								<Tab heading={
									<TabHeading>
										<Icon name='message-square' size={26}/>
									</TabHeading>}>
										<ProfileComment />
								</Tab>
							</Tabs>
						</View>
					</Container>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	profile: {
		flex: 1,
		backgroundColor: 'blue',
		height: 200
		
	},
	conteudo: {
		flex: 1,
		backgroundColor: 'red'
	}
})

export default Profile