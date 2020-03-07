import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    ScrollView
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import Logo from '../componentes/Logo'
import ImagePicker from 'react-native-image-picker'


class AddPost extends Component{
    state = {
        title: '',
        category: '',
        description: '',
        image: null
    }

    pickImage = () => {
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

    render(){
        const placeholder = {
            label: 'Selecione a categoria do item',
            value: null,
            color: '#AAA',
          }
        return(
            <View style={styles.container}>
                <ScrollView>
                    <Logo logo={'Insira as informações'} />
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
                        <TextInput placeholder='Descreva seu item' style={styles.descriptionInput}
                            multiline={true} value={this.state.description}
                            onChangeText={description => this.setState({ description })} />
                    </View>
                    <View style={styles.textInputsButton}>
                        <TouchableOpacity 
                            onPress={() => { this.props.onCreateUser(this.state) }} 
                            style={styles.buttom}>
                            <Text style={styles.buttomText}>Publicar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.tabBottomBackground}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        width: 220,
        borderRadius: 40,

    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
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


export default AddPost
