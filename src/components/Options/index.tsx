import React from "react";
import { View, Text } from "react-native";
import { Copyright } from "../Copyright";
import { Option } from "../Option";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { styles } from "./styles";
import { FeedbackType } from "../Widget";

interface IProps {
  selectFeedbackType: (feedback: FeedbackType) => void;
}
export function Options({ selectFeedbackType }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe o seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Option
              title={value.title}
              image={value.image}
              key={key}
              onPress={() => {
                selectFeedbackType(key as FeedbackType);
              }}
            />
          );
        })}
      </View>

      <Copyright />
    </View>
  );
}
