import { View, Text, TextInput, Button } from 'react-native'
import React, {useRef, useState} from 'react'

const Home = () => {

  const [ hide, setHide] = useState(false)
  const [ textdata, setTextdata] = useState()

  const calHeight = (data) =>{
    const result = Math.floor(data)
    const finalResult = Math.floor(result/5)
    if(finalResult >= 20){
      setHide(true)
    } else {
      setHide(false)
    }
  }
  return (
    <View>
      <Text>Home</Text>
      <TextInput
      style={{borderWidth: 2, fontSize: 14}}
      multiline
      maxLength={ hide? textdata.length: null }
      onChangeText={(text) =>setTextdata(text)}
      onContentSizeChange={(event) => {
        calHeight( event.nativeEvent.contentSize.height)
       }}
      />
    </View>
  )
}

export default Home