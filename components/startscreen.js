

import * as React from 'react';
import { Text, View, StyleSheet, Button,ImageBackground, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import Constants from 'expo-constants';



 export default function  StartScreen ({navigation}) {
 
  return (
    
    <View >
    <ImageBackground style={ styles.background } 
                 resizeMode='cover' 
                 source={require('../bg.png')}>

      
          
          
          <Text style={{color:'#D3D3D3' }}>
        {"\n"}
        {"\n"}
        {"\n"}
       
         <Text style={styles.title}>      Discount Calculator       </Text>
         {"\n"}
        {"\n"}
        {"\n"}
        
        </Text>        
      
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('Discount screen')}>
          
          <Text style={styles.appButtonText} >Start Application</Text>
        </TouchableOpacity>
         

      
     
      
      <View style={styles.inner3}>
        <Text style={styles.instruction}> Instructions </Text>
        <Text style={styles.instructiont}>
          Rules are simple
           
        </Text>
     

        <Text style={styles.instructiont}>
          1. After pressing the start button you will be directed to the discount screen 
           
        </Text>
        <Text style={styles.instructiont}>
          2. Where you will have two input filds 
           
        </Text>
        <Text style={styles.instructiont}>
          3. One for orignal price and other for the discount percentage
           
        </Text>
        <Text style={styles.instructiont}>
          4. Press the calculate button to find the saving price 
           
        </Text>
        <Text style={styles.instructiont}>
          5. You can Save the calculation by pressing the save button
           
        </Text>
         <Text style={styles.instructiont}>
         Copy rights
        </Text>
         <Text style={styles.instructiont}>
          Obaid ur rahman(SP18-BCS-135)
           
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
}
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#10c99e',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#d9f5dda6',
    color: 'black',
    borderRadius:10,
    height: 35,
    width: 300,
    fontFamily: 'sans-serif',
      alignSelf: 'center',
  },
  background: {
      width: '100%',
      height: '100%',
       flexDirection: 'column',
    },
  inner: {
    paddingTop:100,
   
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: 250,
  },
  start: {
    fontSize: 18,
    paddingLeft: 60,
    paddingRight: 60,
  },
inner3: {
  fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    backgroundColor: '#242d266b',
    color: 'white',

},
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  welcometext:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#242d266b',
    color: 'white',
    paddingBottom:30,
    paddingTop:20

  },
  instruction:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#242d266b',
    color: 'white',
    
    paddingTop:20

  },
  instructiont:{
    
    textAlign: 'center',
    fontSize: 15,
    backgroundColor: '#242d266b',
    color: 'white',paddingTop:8
    

  },
  instructiont1:{
    
    textAlign: 'center',
    fontSize: 15,
    backgroundColor: '#242d266b',
    color: 'white',paddingBottom:100
    ,paddingTop:8
    

  },
  buttonframe: {
    paddingTop: 70,
  },
  rights: {
    paddingTop: 25,
  },
  
});


