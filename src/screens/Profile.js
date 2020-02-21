import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import Icon from 'react-native-vector-icons/Feather'

export default class Profile extends Component {
  state = {
    profile: [{
      fullName: 'Gabriel',
      age: 21,
      donations: 3,
      ranking: 'Doador Mestre'
    }]
}



	render() {
    const options = { email: this.props.email, secure: true }
		return (
			<View style={styles.container}>
				<View style={styles.header}></View>
					<Gravatar options={options} style={styles.avatar}/>
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
            <View style={styles.profile}> 
              <Text style={styles.profileText}>Nome:{this.state.fullName}</Text>
            </View>  
            <View style={styles.profile}> 
              <Text style={styles.profileText}>Idade:{this.state.age}</Text>
            </View>  
            <View style={styles.profile}> 
             <Text style={styles.profileText}>Doações:{this.state.donations}</Text>
            </View> 
            <View style={styles.profile}> 
             <Text style={styles.profileText}>Ranking:{this.state.ranking}</Text>
            </View>           
					</View>
			</View>
	  )
	}
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#136a8a",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
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
    marginTop: 5
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
  profileText: {
    fontWeight: 'bold',
    textAlign: 'justify',
    fontSize: 18,
    color: "#696969",
  }

});
 


