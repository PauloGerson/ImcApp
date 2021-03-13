import React, { Component } from "react";
import { render } from "react-dom";
import { ImageBackground, StyleSheet, Text, View,Image, TextInput,TouchableOpacity, TouchableNativeFeedback } from "react-native";

import image2  from  './assets/img/background.jpg';
import logo from './assets/img/reactlogo.png';

export default class App  extends Component <Props>{

  constructor(props){
    super(props);
    this.state={altura: 0, peso:0, nome: "", result: 0, resultTexto: "", nome: ""}
    this.calcular = this.calcular.bind(this);
  }
  calcular = ()=>{
    let imc = this.state.peso/(this.state.altura * this.state.altura);
    let s = this.state;
    s.result = imc;
    this.setState(s);

    if (s.result < 18.5) {
      s.resultTexto = "Magreza extrema";
    } else if (s.result>= 18.5 && s.result < 24.9) {
      s.resultTexto =  "Normal";
    } else if (s.result >= 24.9 && s.result < 30) {
      s.resultTexto = "Sobrepeso";
    } else if (s.result > 30) {
      s.resultTexto = "Sobrepeso";
    }
 
    
  }

  render(){
  return (
    <ImageBackground source={image2} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image source={logo} style={styles.logo}></Image>
          <Text style={styles.text}>Calculadodra de IMC</Text>
        </View>

    <View style={styles.principal}> 
           {/* <TextInput style={styles.form} placeholder='Nome' textContentType= 'name' onChangeText={(nome)=>{this.setState({nome})}}/> */}
          <TextInput style={styles.form} placeholder='Peso' keyboardType='numbers-and-punctuation' onChangeText={(peso)=>{this.setState({peso})}}/>
          <TextInput style={styles.form} placeholder='Altura' keyboardType='numbers-and-punctuation' onChangeText={(altura)=>{this.setState({altura})}}/>
          <TouchableOpacity style={styles.btn} onPress={this.calcular} onPress={this.calcular}><Text>Calcular IMC</Text></TouchableOpacity>
          <Text style={styles.resul}>{this.state.result.toFixed(2)}</Text>
          <Text style={styles.resul2}>{this.state.resultTexto}</Text>
          <Text></Text>
        </View>
      </View>
    </ImageBackground>
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width:'100%',
    height:'100%',
  },
  box:{
    flexDirection: 'row',
    width: '80%',
    marginBottom: 30,
  },
  logo:{
    width:70,
    height:70,
    marginRight:20,
    marginTop: '20%',
  },
  text:{
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
    paddingTop: 20,
    marginTop: '20%',

  },
  principal:{
    marginTop: '20%',
    width:380,
    height: 420,
    backgroundColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginBottom: 150,
  },
  form:{
    height: 40,
    width: 320,
    padding: 10,
    fontSize: 15,
    color:'black',
    backgroundColor: 'rgba(250,250,250, 0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 20,
   
  },
  btn:{
    width: 320,
    padding: 20,
    fontSize: 25,
    backgroundColor: 'rgb(250,2550,2550)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  resul:{
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#2c3aa7',
    backgroundColor: 'rgba(250,250,250,0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 20,

  },
  resul2:{
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#2c3aa7',
    backgroundColor: 'rgba(250,250,250,0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 20,
  }

});

