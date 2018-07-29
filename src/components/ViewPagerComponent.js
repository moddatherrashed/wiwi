import React from 'react'
import { StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel'
const Styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1a1917'
    },
    container: {
        flex: 1,
        backgroundColor: '#B721FF'
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: '#1a1917'
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: '#1a1917'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
})
const ViewPagerComponent = (props) => {
    return (
        <Carousel
            layout={'default'}
            ref={(c) => { this._carousel = c; }}
            data={props.offers}
            renderItem={props.renderItem}
            sliderWidth={props.sliderWidth}
            itemWidth={props.itemWidth}
            hasParallaxImages={true}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            // inactiveSlideShift={20}
            containerCustomStyle={{
                overflow: 'visible'
            }}
            contentContainerCustomStyle={{
               // paddingVertical: 5 
            }}
            loop={true}
            loopClonesPerSide={2}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={props.slider1ActiveSlide}
        />
    )
}



export default ViewPagerComponent