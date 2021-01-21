import React, {useState} from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar
} from 'react-native'
import Sound from 'react-native-sound'
const soundList =[
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav')
];

const App = () => {

  const playsound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) =>{
      if(err){
        console.log("NOT ABLE TO PLAY SOUND")
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 1000);

    soundVar.release();
  }

 return(
   <ScrollView  style={styles.container}>
     <StatusBar backgroundColor={'#B9345A'}/>
     <Image style={styles.logo} source={require('./assets/logo2.png')}></Image>
    <View style={styles.gridContainer}>
      {soundList.map((sound) => (
        <TouchableOpacity 
        key={sound} 
        onPress={() => {playsound(sound)}}
        style={styles.box}
        >
          <Text style={styles.text}>{sound}</Text>
        </TouchableOpacity>

      ))}
   </View>
   </ScrollView>
 )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EDBF69'
  },
  logo:{
    alignSelf: 'center',
    marginTop: 15,
    height: 150,
    width: 150,
    resizeMode: 'center'
  },
  gridContainer:{
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',


  },
  box:{
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#E21717',
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text:{
    fontSize: 50,
    color: '#ffffff'
  }
})