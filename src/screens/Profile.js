import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	ImageBackground,
	Image,
	Dimensions
} from 'react-native'
import {
	Container, Tabs, Tab, TabHeading, ScrollableTab
} from 'native-base'
import ProfileInformation from './ProfileInformation'
import ProfileComment from './ProfileComment'
import ProfilePosts from './ProfilePosts'
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

class Profile extends Component {	

	render() {
		return(
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.backgroundContainer}>
						<ImageBackground
							source={require("../../assets/imgs/fence.jpg")}
							imageStyle={{ opacity: 0.75, backgroundColor: 'rgba(107, 13, 200, 0.75)' }}
							style={styles.imageBackground}>
							<View style={styles.profileFraseContainer}>
								<View style={styles.profileContainer}>
									<View style={styles.donationContainer}>
										<Text style={styles.donation}>200</Text>
										<Image 
											source={require("../../assets/imgs/mao.png")}
											style={styles.donationImage}/>
									</View>
									<View style={styles.profile}>
										<Image 
											source={require("../../assets/imgs/icon.png")}
											style={styles.imageProfile}/>
										<Text style={styles.name} 
											numberOfLines={2}>
											Nome Sobrenome Sobrenome Sobrenome Sobrenome 
											Sobrenome Sobrenome Sobrenome</Text>									
									</View>
									<View style={styles.rankingContainer}>
										<Text style={styles.ranking}>15#</Text>
										<Image 
											source={require("../../assets/imgs/trofeu.png")}
											style={styles.rankingImage}/>
									</View>
								</View>
								<View style={styles.fraseContainer}>
									<Text style={styles.frase}
										numberOfLines={3}>
										Frase do Dia
										Frase do Dia
										Frase do Dia
										Frase do Dia
										Frase do Dia
										Frase do Dia
										Frase do Dia\Frase do Dia
										Frase do Dia
										Frase do Dia
										Frase do Dia
										Frase do Dia
										Frase do Dia
										Frase do Dia
									</Text>
								</View>
							</View>
						</ImageBackground>
					</View>				
					<Container>
						<View style={styles.conteudo}>
							<Tabs >
								<Tab heading={
									<TabHeading style={{ backgroundColor : 'rgba(153, 51, 153, 0.5)'}}>
										<Icon name='user-check' size={26}/>					
									</TabHeading>}>
										<ProfileInformation />
								</Tab>							
								<Tab heading={										
									<TabHeading style={{ backgroundColor : 'rgba(153, 51, 153, 0.5)'}}>
										<Icon name='grid' size={26}/>
									</TabHeading>}>										
										<ProfilePosts />
								</Tab>
								<Tab heading={
									<TabHeading style={{ backgroundColor : 'rgba(153, 51, 153, 0.5)'}}>
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
	backgroundContainer: {
		flex: 1,
		// backgroundColor: 'blue',
		height: 280,		
	},
	imageBackground: {
        width: undefined, 
        padding: 16,
		paddingTop: 30,
		height: 280,
		justifyContent: 'space-around',
		alignItems: 'center',				
	},
	profileFraseContainer:{		
		// backgroundColor: 'orange'
	},
    imageProfile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
		borderColor: '#993399',
		marginTop: 18
	},
	profileContainer: {	
		flex: 5,	
		flexDirection: 'row'
	},
	profile: {		
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	donationContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 75,	
		// backgroundColor: 'blue',
	},
	rankingContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 85,	
		// backgroundColor: 'green',
	},
	donation:{
		fontSize: 32,		
		fontWeight: 'bold',
		// color: '#fff'
		color: '#993399',
	},
	ranking: {
		fontSize: 32,		
		fontWeight: 'bold',
		// color: '#fff'
		color: '#993399',
	},
	donationImage: {
		width: 50,
		height: 40,	
		resizeMode: 'contain'
	},
	rankingImage:{	
		width: 50,
		height: 40,	
		resizeMode: 'contain'	
	},
	name: {
        // color: '#fff',
        color: '#993399',
        fontSize: 20,
        fontWeight: '800',
		fontWeight: 'bold',
		marginVertical: 8,		
		textAlignVertical: "center",
		textAlign: "center",
	},
	fraseContainer: {		
		flex: 1,
		width: Dimensions.get('window').width,
		marginTop: 5,
		// backgroundColor: 'pink',
		justifyContent: 'center',
		alignItems: 'center',
	},
    frase: {
        color: 'rgba(255, 255, 255, 0.8)',        
        fontSize: 15,
		marginRight: 4,
		fontWeight: 'bold',
		fontStyle: "italic",
		textAlignVertical: "center",
		textAlign: "center",
    },
	conteudo: {
		flex: 1,
		backgroundColor: 'red'
	},
})

export default Profile