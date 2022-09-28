import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailSceen = () => {
  return (
    <View>
      <Text>DetailSceen</Text>
    </View>
  )
}

export default DetailSceen

const styles = StyleSheet.create({
    container: {​
        height: 80,​
        elevation: 3,​
        borderColor: 'gray',​
        borderRadius: 5,​
        flexDirection: 'row',​
        marginHorizontal: 20,​
    },​
    dataContainer: {​
  
        flex: 1,​
    },​
    thumbnail: {​
        width: 70,​
        height: 70,​
    },
    dataContent: {​
      marginTop: 5,​
      marginLeft: 15,​
  },​
  title: {​
      color: '#444',​
      fontSize: 18,​
      fontWeight: 'bold',​
  },​
  detail: {​
      fontSize: 16,​
      color: '#888',​
      fontWeight: '700',​
  },​
})