import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../scrien/Login';
import Home from '../scrien/Home';
import Splash from '../scrien/Splass';


const Stack = createStackNavigator();

function Navigation (){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;