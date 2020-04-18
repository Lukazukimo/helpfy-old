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
    StatusBar,
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
            id: this.props.localId,
            title: this.state.title,
            author: this.props.name,
            category: this.state.category,
            description: this.state.description,
            image: this.state.image,
            emailPost: this.props.email,
            curtidas: {id: ''}
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

        const buttonDisabled = this.props.loading ?
            <LinearGradient colors={[
                'rgba(240, 240, 240, 0.6)',
                'rgba(240, 240, 240, 0.4)',
                'rgba(240, 240, 240, 0.6)',
                'rgba(240, 240, 240, 0.8)'
            ]} style={[styles.buttom]}>
                <TouchableOpacity 
                    onPress={this.save}>
                    <Text style={styles.buttomText}>Publicar</Text>
                </TouchableOpacity>
            </LinearGradient> :
            <LinearGradient colors={[
                'rgba(225, 22, 94, 0.6)',
                'rgba(225, 22, 94, 0.4)',
                'rgba(225, 22, 94, 0.6)',
                'rgba(225, 22, 94, 0.9)'
            ]} style={[styles.buttom]}>
                <TouchableOpacity 
                    onPress={this.save}>
                    <Text style={styles.buttomText}>Publicar</Text>
                </TouchableOpacity>
            </LinearGradient>

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
                style={styles.container}>                    
                    <ScrollView>
                        <View style={styles.scrollContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Nova Publicação</Text>
                            </View>
                            <View style={styles.informationContainer}>
                                <Text style={styles.information}>Título da Postagem</Text>                                
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input}
                                        placeholder='Insira o título' 
                                        autoFocus={true} value={this.state.title}
                                        onChangeText={title => this.setState({ title })} />
                                </View>
                            <View style={styles.informationContainer}>
                                <Text style={styles.information}>Categoria</Text>
                            </View>
                            <View style={styles.picker}>
                                <RNPickerSelect
                                    onValueChange={category => this.setState({ category })}
                                    useNativeAndroidPickerStyle={false}
                                    placeholder={placeholder} items={[
                                        { label: 'Brinquedos', value: 'Brinquedos' },
                                        { label: 'Calçados', value: 'Calçados'},
                                        { label: 'Eletrodomésticos', value: 'Eletrodomésticos' },
                                        { label: 'Higiene Pessoal', value: 'Higiene Pessoal'},
                                        { label: 'Livros', value: 'Livros' },
                                        { label: 'Material de Contrução', value: 'Material de Contrução'},
                                        { label: 'Material de Limpeza', value: 'Material de Limpeza' },
                                        { label: 'Material Escolar', value: 'Material Escolar'},
                                        { label: 'Móveis', value: 'Móveis' },
                                        { label: 'Roupas', value: 'Roupas'},
                                    ]}
                                />
                            </View>
                            <View style={styles.imageContainer}> 
                                <Image source={this.state.image} style={styles.image}/>
                            </View>
                            <LinearGradient colors={[
                                'rgba(225, 22, 94, 0.6)',
                                'rgba(225, 22, 94, 0.4)',
                                'rgba(225, 22, 94, 0.6)',
                                'rgba(225, 22, 94, 0.9)'
                            ]} style={styles.buttom}>
                                <TouchableOpacity
                                    onPress={this.pickImage}>
                                    <Text style={styles.buttomText}>Insira a imagem</Text>
                                </TouchableOpacity> 
                            </LinearGradient>
                            <View style={styles.informationContainer}>
                                <Text style={styles.information}>Descrição do item</Text>
                            </View>
                            <View style={[styles.inputContainer, { height: 150}]}>
                                <TextInput placeholder='Insira a descrição do item' 
                                    style={styles.descriptionInput}
                                    multiline={true}
                                    value={this.state.description}
                                    onChangeText={description => this.setState({ description })} />
                            </View>
                            { buttonDisabled}
                        </View>
                    </ScrollView>
                <View style={styles.tabBottomBackground}/>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    scrollContainer: {        
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer:{        
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    title: {
        fontSize: 30,
        fontFamily: 'shelter',
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,        
    },
    informationContainer: {
        width: '100%',
        paddingLeft: '10%',
        justifyContent: 'center',
        height: 30,
        // backgroundColor: 'yellow',
    },
    information: {
        fontFamily: 'shelter',
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10, 
        fontSize: 24,        
    },
    inputContainer: {
        height: 50,        
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    input: {        
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: 45,
        borderRadius: 25,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        marginHorizontal: 25,
        width: '90%'
    },
    picker: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: 45,
        borderRadius: 25,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        marginHorizontal: 25,
        width: '90%',
        fontSize: 15,
    },
    imageContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 25,
        width: '90%',
        height: Dimensions.get('window').width / 2,        
        marginTop: 20,        
    },
    image: {
        width: '100%',
        borderRadius: 25,
        height: Dimensions.get('window').width / 2,
    }, 
    buttom: {
        height: 45,        
        width: '90%',
        borderRadius: 25,                
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center',        
    },        
    descriptionInput: {        
        width: '90%',
        backgroundColor: '#eee',
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',        
        borderRadius: 25,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        marginHorizontal: 25,
        alignItems: 'flex-start'
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
        localId: user.localId,
        loading: posts.isUploading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)