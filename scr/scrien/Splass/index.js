import React from 'react'
import {View, Text} from 'react-native'

class Splash extends React.Component{
    render(){
        setTimeout(() => {
            this.props.navigation.replace('Login')
        }, 3000);
        return(
            <View>
                <Text style={{fontSize:40,fontWeight:'bold',}}>Welcome</Text>
            </View>
        )
    }
}
export default Splash