import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default class NotificationScreen extends React.Component{
    render (){
        return (
            <View style={styles.container}>
            <Text>Hi!</Text>
          <Text style={{color:"blue" , fontWeight: "900"}}>James Arthur</Text>
      </View>
         
        )
    }

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
