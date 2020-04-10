import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native'
import { connect} from 'react-redux'
import { createUser } from '../store/actions/user'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from '../componentes/Logo'
import Header from '../componentes/Header'
import LinearGradient from 'react-native-linear-gradient'

class Register extends Component{
    state = {
        name: '',
        email: '',
        date: '',
        uf: '',
        password: '',
        passwordConfirm: ''
    }

    render(){
        return(
            // <LinearGradient colors={[
            //     'rgb(146, 135, 211)',
            //     'rgb(124, 147, 225)',
            //     'rgba(124, 147, 225, 0.8)',
            //     'rgb(155, 156, 213)',
            //     'rgb(162, 163, 217)',            
            //     'rgba(162, 163, 217, 0.85)',
            //     'rgb(162, 163, 217)',
            //     'rgb(162, 163, 217)',
            //     'rgba(124, 147, 225, 0.8)',
            //     'rgb(124, 147, 225)',
            //     'rgb(146, 135, 211)',
            //     ]}
            //     style={styles.container} >
            
            <ImageBackground
                source={require("../../assets/imgs/imgRegister.jpg")}
                imageStyle={{ opacity: 0.55, backgroundColor: 'rgb(124, 147, 225)' }}
                style={styles.container}> 

                {/* <Logo logo={'Criar conta'} /> */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Registrar</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='user' size={26} color='rgba(255, 255, 255, 0.7)' 
                    style={styles.inputIcon} />
                    <TextInput style={styles.input}
                        placeholder='Nome' 
                        autoFocus={true} 
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='at-sign' size={26} color='rgba(255, 255, 255, 0.7)' 
                    style={styles.inputIcon} />
                    <TextInput style={styles.input}
                        placeholder='Email' 
                        keyboardType='email-address' 
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                </View>
                <View style={styles.horizontal}>
                    <View style={styles.inputContainer2}>
                        <Icon2 name='cake-variant' size={26} color='rgba(255, 255, 255, 0.7)' 
                            style={styles.inputIcon} />
                        <TextInput style={styles.input2}
                            placeholder='Data Aniver' 
                            autoFocus={true} 
                            value={this.state.date}
                            onChangeText={date => this.setState({ date })} />
                    </View>
                    <View style={styles.inputContainer2}>
                        <Icon name='map-pin' size={26} color='rgba(255, 255, 255, 0.7)' 
                            style={styles.inputIcon} />
                    <TextInput style={styles.input2}
                            placeholder='UF' 
                            autoFocus={true} 
                            value={this.state.uf}
                            onChangeText={uf => this.setState({ uf })} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='lock' size={26} color='rgba(255, 255, 255, 0.7)' 
                        style={styles.inputIcon} />
                    <TextInput style={styles.input}
                        placeholder='Senha' 
                        secureTextEntry={true} 
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='lock' size={26} color='rgba(255, 255, 255, 0.7)' 
                        style={styles.inputIcon} />
                    <TextInput style={styles.input}
                        placeholder='Confirmar senha' 
                        secureTextEntry={true} 
                        value={this.state.passwordConfirm}
                        onChangeText={passwordConfirm => this.setState({ passwordConfirm })} />
                </View>
                <LinearGradient colors={[
                        'rgba(225, 22, 94, 0.6)',
                        'rgba(225, 22, 94, 0.4)',
                        'rgba(225, 22, 94, 0.6)',
                        'rgba(225, 22, 94, 0.9)'
                    ]} style={styles.buttom}>

                    <TouchableOpacity onPress={() => { this.props.onCreateUser(this.state) }}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </LinearGradient>

            </ImageBackground>
            // </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 40
    },
    title: {        
        fontFamily: 'shelter',        
        fontSize: 50,
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff', 
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,        
    },
    input: {                
        // backgroundColor: 'rgba(162, 163, 217, 0.65)',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: 45,
        borderRadius: 25,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 45,
        marginHorizontal: 25,        
    },
    input2: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: 45,
        borderRadius: 25,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 45,
        marginHorizontal: 25,           
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',    
        justifyContent: 'center',        
    },
    inputContainer2: {
        marginBottom: 20,
        width: '50%',    
        justifyContent: 'center',        
    },
    buttom: {
        height: 45,
        marginBottom: 20,
        width: '90%',
        borderRadius: 25,                
        justifyContent: 'center',
        alignContent: 'center'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    horizontal: {
        flexDirection: 'row',        
    },
})

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register)
// export default Register
