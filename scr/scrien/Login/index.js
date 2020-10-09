import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableNativeFeedbackBase,
  ImageBackground
} from 'react-native';

class Login extends React.Component {
    
   image = { uri: "https://reactjs.org/logo-og.png" };
  
  state = {
    hasil: true,
    user: '',
    pass: '',
    username: 'a',
    password: '1',
  };
  masuk = () => {
    if (
      this.state.user == this.state.username &&
      this.state.pass == this.state.password
    ) {
      this.props.navigation.replace('Home');
    } else {
      alert('Username Atau Password Anda Salah');
    }
  };
  Lihat = () => {
    this.setState({hasil: !this.state.hasil});
  };
  render() {
    return (
      <View>
        
        <View
          style={{
            backgroundColor: 'white',
            marginTop:'30%',
            marginLeft:'5%',
            marginRight:'5%',
            elevation:5
          }}>
          <View>
            <View>
              <Text
                style={{
                  fontSize:30,
                  fontWeight: 'bold',
                  alignSelf: 'center'
                }}>
                LOGIN
              </Text>
            </View>
          </View>
          <View>
            <TextInput
              placeholder="Username"
              value={this.state.user}
              onChangeText={(taks) => this.setState({user: taks})}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Password"
              value={this.state.pass}
              secureTextEntry={this.state.hasil}
              onChangeText={(taks) => this.setState({pass: taks})}
            />
          </View>
          <View style={{backgroundColor:'blue', alignSelf:'center',fontSize:20}}>
            <Text onPress={() => this.Lihat()}>Lihat</Text>
          </View>
          <View>
          <Button title="Masuk" onPress={() => this.masuk()} />
          </View>
        </View>
      
      </View>
    );
  }
}
export default Login
