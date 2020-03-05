import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	ImageBackground,
	Image,
	Dimensions,	
	TouchableOpacity
} from 'react-native'
import {
	Container, Tabs, Tab, TabHeading, ScrollableTab, Content
} from 'native-base'
import ProfileInformation from './ProfileInformation'
import ProfileComment from './ProfileComment'
import ProfilePosts from './ProfilePosts'
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import RadialGradient from 'react-native-radial-gradient'


class Profile extends Component {	

	goTesteScreen = () => {    
        this.props.navigation.navigate('TesteScreen')
    }

	render() {
		const widthScreen = Dimensions.get('window').width / 2
		const heightScreen = Dimensions.get('window').height / 2
		
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
					<View style={styles.iconContainer}>
						<TouchableOpacity style={styles.icon}>
							<Icon name='bell' size={30} 
							onPress={this.goTesteScreen}/>
						</TouchableOpacity>						                     
                	</View>

					{/* <Container style={{ flex: 1 }}> */}
						{/* <View style={styles.conteudo}>
							<Tabs tabBarUnderlineStyle={{ backgroundColor: 'orange'}}>
								<Tab heading={
									<TabHeading style={{ backgroundColor : 'rgba(153, 51, 153, 0.5)'}}>
										<Icon name='user-check' size={26} color={'#fff'}/>
									</TabHeading>}>	
									
										<View style={styles.teste}>
											<ScrollView>
												<ProfileInformation />
											</ScrollView>
										</View>
												
								</Tab>							
								<Tab heading={										
									<TabHeading style={{ backgroundColor : 'rgba(153, 51, 153, 0.5)'}}>
										<Icon name='grid' size={26} color={'#fff'}/>
									</TabHeading>}>			
										<RadialGradient style={{width:400,height:100}}                 										
											colors={['rgba(219, 138, 169, 0.41)', 
												'rgba(219, 129, 163, 0.55)',
												'rgba(211, 116, 152, 0.68)',
												'rgba(204, 87, 132, 0.68)',
												'rgba(170, 83, 186, 0.68)',
												'rgba(156, 47, 175, 0.48)',
												'rgba(50, 13, 119, 0.50)']}
											stops={[0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]} 
											center={[widthScreen,heightScreen]} 
											radius={350}
											style={styles.container}>  
											<View style={styles.teste}>
												<ScrollView>							
													<ProfilePosts />
												</ScrollView>
											</View>
										</RadialGradient>
								</Tab>
								<Tab heading={
									<TabHeading style={{ backgroundColor : 'rgba(153, 51, 153, 0.5)'}}>
										<Icon name='message-square' size={26} color={'#fff'}/>
									</TabHeading>}>
										<RadialGradient style={{width:400,height:100}}                 										
											colors={['rgba(219, 138, 169, 0.41)', 
												'rgba(219, 129, 163, 0.55)',
												'rgba(211, 116, 152, 0.68)',
												'rgba(204, 87, 132, 0.68)',
												'rgba(170, 83, 186, 0.68)',
												'rgba(156, 47, 175, 0.48)',
												'rgba(50, 13, 119, 0.50)']}
											stops={[0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]} 
											center={[widthScreen,heightScreen]} 
											radius={350}
											style={styles.container} >  
												<ProfileComment />
										</RadialGradient>
								</Tab>
							</Tabs>
						</View> */}
					{/* </Container> */}
				</ScrollView>
				<View style={styles.tabBottomBackground}>
                </View>
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
		flexDirection: 'row',		
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
	tabBottomBackground: {
        width: '100%',
        height: 50,
        backgroundColor: 'transparent'
    },
	conteudo: {
		flex: 1,
		backgroundColor: 'red'
	},
	teste: {
		// flex: 1,
		backgroundColor: 'red',		
	}
})

export default Profile