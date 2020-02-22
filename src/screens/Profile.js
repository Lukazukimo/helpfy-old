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

export default class Profile extends Component {
  state = {
        id: Math.random(),
        dataNasc: '25/09/1998',
        uf: 'São Paulo',

        
    }

	render() {
    const options = { email: this.props.email, secure: true }
		return (
			<View style={styles.container}>
				<View style={styles.header}>
          <Gravatar options={options} style={styles.avatar}/>
        </View>
        <View style={styles.body}>
					  	  <View style={styles.bodyContent}>
					  	  	<Text style={styles.name}>Gabriel Ciccotti Monteiro</Text>
					  	  </View>
					  	  <View style={styles.bodyDescription}>
					  	  	<Text style={styles.description}>Frase motivacional aleatória</Text>
					  	  </View>
					  	  <View style={styles.icons}>
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
                  <ProfileInfo item={this.state.dataNasc} title={'Data de Nascimento:'}/>
                  <ProfileInfo item={this.state.uf} title={'Estado'}/>
                  <ProfileInfo item={this.state.uf} title={'Estado'}/>
                  <ProfileInfo item={this.state.uf} title={'Estado'}/>
                  <ProfileInfo item={this.state.uf} title={'Estado'}/>
					  </View>
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
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
    //backgroundColor: 'black'
  },
  bodyDonations: {
    flex: 1,
    alignItems: 'flex-start',
    padding:10,
    marginTop:-50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:22,
    marginTop: 5,
  },
  bodyDescription: {
    flex: 1,
    alignItems: 'flex-start',
    padding:15,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
	},
	icons: {
		marginTop: 40,
		height: 56,
		flexDirection: 'row',
		borderTopColor: 'black',
		borderTopWidth: 1,
		borderBottomColor: 'black',
    borderBottomWidth: 1,
	},
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:15,
    textAlign: 'justify'
  },
  donations:{
    fontSize:18,
    color: "#696969",
    marginTop:10,
    fontWeight: 'bold'
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
  profile: {
    marginTop: 2,
    padding: 10,
		borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    
    
  },


});
 


