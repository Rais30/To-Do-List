import React from 'react';
import {View, Text, Button, TextInput, ScrollView} from 'react-native';

class Home extends React.Component {
  state = {
    data: [],
    imput: '',
  };
  addData = () => {
    const dataBaru = this.state.imput;
    this.state.data.push(dataBaru);
    this.setState({
      data: this.state.data,
      imput: '',
    });
  };
  delete = (element) => {
    const item = element;
    const dataFilter = this.state.data.filter((value, key) => {
      return item != key;
    });
    this.setState({data: dataFilter});
  };
  keluar=()=>{
      this.props.navigation.replace('Login')
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'white',elevation:3}}>
          <Text
            style={{
              fontSize: 30,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            To Do List
          </Text>
        </View>
        <ScrollView > 
          {this.state.data.map((value, key) => {
            return (
              <View style={{flexDirection:'row',backgroundColor:'white',elevation:3,marginTop:3,marginBottom:3}} key={key}>
                  <View style={{backgroundColor:'white',width:'80%', height:45}}>
                <Text>{value}</Text>
                  </View>
                <View>
                  <Text onPress={() => this.delete(key)}>Hapus</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View>
          <TextInput
            placeholder="Masukan Data"
            value={this.state.imput}
            onChangeText={(text) => this.setState({imput: text})}
          />
        </View>
        <Button title="MASUK" onPress={() => this.addData()} />
        <View>
          <Text
            style={{backgroundColor: 'red', alignSelf:'center'}}
            onPress={() => this.keluar()}>
            Keluar
          </Text>
    <Button <i class="fa fa-toggle-on" aria-hidden="true" onclick="myFunction()"float="right">DarkMode</i></Button>
        </View>
      </View>
    );
  }
}
export default Home;
