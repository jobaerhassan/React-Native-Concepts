import React from 'react';
import { Image, View } from 'react-native';
const ImageComponent = () => {
    return(
        <View >
            <Image source={require('./imageAsset/tree.jpg')} height={100}  width={100}/>
        </View>
    )
}
export default ImageComponent;