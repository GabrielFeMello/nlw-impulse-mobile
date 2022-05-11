import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import successImg from "../../assets/success.png";
import { Copyright } from "../Copyright";
import { styles } from "./styles";

interface IProps{
  reloadFeedback: ()=> void
}
export function Success({reloadFeedback}:IProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Agradecemos o feedback</Text>
      <TouchableOpacity style={styles.button} onPress={reloadFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
