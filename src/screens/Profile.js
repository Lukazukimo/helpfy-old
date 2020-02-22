import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import Icon from 'react-native-vector-icons/Feather'
import ProfileInfo from '../componentes/ProfileInfo'
import Comments from '../componentes/Comments'
export default class Profile extends Component {
  state = {
        id: Math.random(),
        dataNasc: '25/09/1998',
        uf: 'São Paulo',   
	}
	


//<ProfileInfo title={'Data de Nascimento'} item={this.state.dataNasc}/>
//<ProfileInfo title={'Data de Nascimento'} item={this.state.dataNasc}/>
//<ProfileInfo title={'Data de Nascimento'} item={this.state.dataNasc}/>
//<ProfileInfo title={'Data de Nascimento'} item={this.state.dataNasc}/>
//<ProfileInfo title={'Data de Nascimento'} item={this.state.dataNasc}/>
	render() {

		const comments = [{
			nickname: 'Ulisses',
			comment: 'Esse cara me roubou!!!'
		}, {
			nickname: 'Murilo',
			comment: 'Comendo o cu de curioso'
		}]

    	const options = { email: this.props.email, secure: true }
			return (
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.header}>
    	      				<Gravatar options={options} style={styles.avatar}/>
    	    			</View>
    	    			<View style={styles.body}>
							<Text style={styles.bodyName}>Gabriel Ciccotti Monteiro</Text>
							<Text style={styles.bodyDescription}>Frase motivacional aleatória</Text>
							<View style={styles.bodyIcons}>
								<TouchableOpacity style={styles.buttonContainer}>
									<Icon name='user' size={30} color={'blue'}/>	 
		          			  	</TouchableOpacity>
								<TouchableOpacity style={styles.buttonContainer}>
									<Icon name='edit' size={30} color={'blue'}/>	  
		          			  	</TouchableOpacity>
								<TouchableOpacity style={styles.buttonContainer}>
									<Icon name='message-circle' size={30} color={'blue'}/>	 
		          			  	</TouchableOpacity>
							</View>
							<Comments comments={comments}/>						
						</View>
					</ScrollView>
				</View>
		  )
	}
}

const styles = StyleSheet.create({
	header: {
    	backgroundColor: "#136a8a",
    	height:250,
    	justifyContent: 'center'
  	},
  	avatar: {
    	width: 130,
    	height: 130,
    	borderRadius: 63,
    	borderWidth: 4,
    	borderColor: "white",
    	marginBottom:10,
    	alignSelf:'center',
	},
	body:{
    	marginTop:15,
  	},
  	bodyName:{
    	fontSize:28,
    	color:"#696969",
		fontWeight:'600',
		textAlign: 'center'
  	},
  	bodyDescription: {
    	fontSize:16,
    	color: "#696969",
    	marginTop:0,
		textAlign: 'left',
		padding: 15
  	},
	bodyIcons: {
		marginTop: 0,
		height: 56,
		flexDirection: 'row',
		borderTopColor: 'black',
		borderTopWidth: 1,
		borderBottomColor: 'black',
    	borderBottomWidth: 1,
	},
  	buttonContainer: {
		height:55,
		marginTop:10,
    	flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'flex-start',
    	width:140,
		borderRadius:40,
  	},
	//tabBottomBackground: {
	//	width: '100%',
	//	height: 50,
	//	backgroundColor: 'rgba(50, 13, 119, 0.50)'
    //}

});
 


