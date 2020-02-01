import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default function App (){
   const [enteredText, setenteredText] = useState("");
   const [newEnteredText, newSetEnteredText] = useState([]);
   const recordText = (text) =>{
      setenteredText(text);
   };
   const addBtn = () =>{
      if (enteredText !== '') {
         newSetEnteredText([ ...newEnteredText, enteredText ]);
      }
   };
      return (
         <View style={styles.mainView}>
         <Text>To Do'S</Text>
          <View style={styles.txtInandButton}>
            <TextInput placeholder="Add Items" style={styles.textInput}
            onChangeText={recordText}
            value={enteredText}
            />
            <Button title="ADD" onPress={addBtn}/>
          </View>
          <View>
           {newEnteredText.map((item)=><Text key={item}>{item }</Text>)}
          </View>
         </View>
      )

}

const styles = StyleSheet.create({
   mainView: {
      padding: 30,
   },
   textInput: {
      borderBottomColor:"black",
      borderBottomWidth:1,
      padding:10,
      width: '80%',
   },
   txtInandButton:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
   }
})
