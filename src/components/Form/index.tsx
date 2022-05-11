import { ArrowLeft } from "phosphor-react-native";
import React, { useCallback, useEffect, useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Screenshot } from "../Screenshot";
import { SendButton } from "../SendButton/indext";
import { FeedbackType } from "../Widget";
import { captureScreen } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";

import { styles } from "./styles";
import { api } from "../../libs/api";
interface IProps {
  feedbackType: FeedbackType;
  setStep: (value: number) => void;
  onFeedbackCanceled: () => void;
}
export function Form({ feedbackType, setStep, onFeedbackCanceled }: IProps) {
  console.log(feedbackTypes);
  console.log(feedbackType);
  const [feedBackTypeInfo, setFeedBackTypeInfo] = useState(
    feedbackTypes[feedbackType]
  );
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    console.log(feedbackType);
    setFeedBackTypeInfo(feedbackTypes[feedbackType]);
  }, [feedbackType]);

  function onTakeShot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => console.error(error));
  }
  function onRemoveShot() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const screenshotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));
    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      });
      setStep(2);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }
  if (!feedBackTypeInfo) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight={"bold"}
            color={theme.colors.text_secondary}
          />
          <View style={styles.titleContainer}>
            <Image source={feedBackTypeInfo.image} style={styles.image} />
            <Text style={styles.titleHeader}>{feedBackTypeInfo.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={useCallback((e) => setComment(e), [])}
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte os detalhes do que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <Screenshot
          screenshot={screenshot}
          onRemoveShot={onRemoveShot}
          onTakeShot={onTakeShot}
        />
        <SendButton isLoading={isLoading} onPress={handleSendFeedback} />
      </View>
    </View>
  );
}
