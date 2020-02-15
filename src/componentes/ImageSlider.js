import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native'

class ImageSlider extends Component {
    scrollref = React.createRef()
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({ selectedIndex: 
                prev.selectedIndex === this.props.images.length -1 ? 0 : prev.selectedIndex + 1}),
            () => {
                this.scrollref.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: (Dimensions.get("window").width) * this.state.selectedIndex
                })
            })
        }, 3000)
    }

    setSelectedIndex = event => {
        // width of the viewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width
        // get current position of the scrollview
        const contentOffset = event.nativeEvent.contentOffset.x

        const selectedIndex = Math.floor(contentOffset / viewSize)
        this.setState({ selectedIndex })
    }

    render() {
        const {images} = this.props
        const {selectedIndex} = this.state
        return(
            // <View style={{height: "100%", width: "100%"}}>
            <View style={styles.container}> 
                <ScrollView horizontal pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollref}>
                    {   
                        // imagens
                        images.map(img => (
                            <Image
                                key={img}
                                source={{uri: img}}
                                style={styles.image} />
                        ))
                    }
                </ScrollView>
                <View style={styles.circle}>
                    {
                        images.map((img, i) => (
                            <View 
                                key={img}
                                style={[styles.whiteCircle, { opacity: i === selectedIndex ? 0.5 : 1 }]}/>
                        ))
                    }                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    image: {        
        // height: 200,
        width: Dimensions.get("window").width,
        // resizeMode: "stretch"
    },
    circle: {
        position: 'absolute',
        bottom: 15,
        height: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: 'white'
    }
})

export default ImageSlider