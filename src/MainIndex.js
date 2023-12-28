import { StyleSheet, Text, View } from 'react-native';
import ImageComponent from './core-components/image/Image';
const MainIndex = () => {
    return(
        <View style={styles.container}>
            {/* <ImageComponent/> */}
            <Text>hello world</Text>
        </View>
    )
}
export default MainIndex;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1
    }
})