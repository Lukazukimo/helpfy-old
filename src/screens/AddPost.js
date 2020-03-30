import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'


const noUser = 'Você precisa estar logado para adicionar um post'


class AddPost extends Component{
    state = {
        title: '',
        category: '',
        description: '',
        image: null
    }

    componentDidUpdate = prevProps => {
        if (prevProps.loading && !this.props.loading){
            this.setState({
                title: '',
                category: '',
                description: '',
                image: null
            })
            this.props.navigation.navigate('Feed')
        }
    }

    pickImage = () => {
        if (!this.props.name) {
            Alert.alert('Falha!', noUser)
            return
        }
        ImagePicker.showImagePicker({
            title: 'Selecione a imagem',
            maxHeight: 200,
            maxWidth: 400
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data }})
            }
        }) 
    }

    save = async () => {
        if (!this.props.name) {
            Alert.alert('Falha!', noUser)
            return
        }
        this.props.onAddPost({
            id: Math.random(),
            title: this.state.title,
            author: this.props.name,
            category: this.state.category,
            description: this.state.description,
            image: this.state.image,
            emailPost: this.props.email,
        })

        // this.setState({ title: '',
        // category: '',
        // description: '',
        // image: null})
        // this.props.navigation.navigate('Feed')
    }

    render(){
        const placeholder = {
            label: 'Selecione a categoria do item',
            value: null,
            color: '#AAA',
          }
        return(
            <LinearGradient colors={[
                'rgb(146, 135, 211)',
                'rgb(124, 147, 225)',
                'rgba(124, 147, 225, 0.8)',
                'rgb(155, 156, 213)',
                'rgb(162, 163, 217)',            
                'rgba(162, 163, 217, 0.85)',
                'rgb(162, 163, 217)',
                'rgb(162, 163, 217)',
                'rgba(124, 147, 225, 0.8)',
                'rgb(124, 147, 225)',
                'rgb(146, 135, 211)',
                ]}
                style={styles.container} >   
                <ScrollView>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Nova Publicação</Text>
                    </View>
                    <View style={styles.textInputs}>
                        <Text style={styles.information}>
                            Título do item
                        </Text>
                        <TextInput placeholder='Título' style={styles.input}
                            autoFocus={true} value={this.state.title}
                            onChangeText={title => this.setState({ title })} />
                    </View>
                    <View style={styles.textInputs}>
                        <Text style={styles.information}>
                            Categoria do item
                        </Text>
                    </View>
                    <View style={styles.picker}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            useNativeAndroidPickerStyle={false}
                            placeholder={placeholder} items={[
                                { label: 'Roupa', value: 'roupa' },
                                { label: 'Brinquedo', value: 'brinquedo',}
                            ]}
                        />
                    </View>
                    <View style={styles.imageContainer}> 
                        <Image source={this.state.image} style={styles.image}/>
                    </View>
                    <View style={styles.textInputsButton}>
                        <TouchableOpacity
                            onPress={this.pickImage} 
                            style={styles.buttomImage}>
                            <Text style={styles.buttomText}>Insira a imagem</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.textInputs}>
                        <Text style={styles.information}>
                            Descrição do item
                        </Text>
                        <TextInput placeholder='Descreva seu item' 
                            style={styles.descriptionInput}
                            multiline={true}
                            value={this.state.description}
                            onChangeText={description => this.setState({ description })} />
                    </View>
                    <View style={styles.textInputsButton}>
                        <TouchableOpacity 
                            onPress={this.save} 
                            style={[styles.buttom, this.props.loading ? 
                                styles.buttonDisabled : null]}>
                            <Text style={styles.buttomText}>Publicar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.tabBottomBackground}/>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer:{
        height: 80,
        alignItems: 'center'
    },
    title: {
        marginTop: 30,
        marginLeft: 10,
        fontSize: 30,
        fontFamily: 'shelter',
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        width: 220,
        borderRadius: 40,
        marginBottom: 10

    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center',        
    },
    buttonDisabled: {
        backgroundColor: '#aaa'
    },
    input: {
        marginTop: 5,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 7
    },
    textInputs: {
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
        
    },
    information: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginTop: 10,
    },
    descriptionInput: {
        marginTop: 5,
        width: '90%',
        backgroundColor: '#eee',
        height: 90,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 7,
    },
    picker: {
        fontSize: 15,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        marginTop: 5,
        width: '86%',
        marginLeft: 20,
        height: 45,
        backgroundColor: '#eee'
    },
    buttomImage: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4286f4',
        width: 220,
        borderRadius: 5,

    },
    textInputsButton: {
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
    },
    imageContainer: {
        width: '86%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#eee',
        marginTop: 40,
        marginLeft: 20
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
    },    
    tabBottomBackground: {
        width: '100%',
        height: 50,
        backgroundColor: 'transparent'
    }
})


// export default AddPost

const mapStateToProps = ({ user, posts }) => {
    return{
        email: user.email,
        name: user.name,
        loading: posts.isUploading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)