import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text,
} from "react-native";

import { styles } from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...rest }: IProps) {
  console.log(image, title);
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
