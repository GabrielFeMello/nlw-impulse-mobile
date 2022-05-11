import React, { useMemo, useRef, useState } from "react";
import { Modal, Pressable, TouchableOpacity, View, Text } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";

import { styles } from "./styles";
import { theme } from "../../theme";
import { Options } from "../Options";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../Form";
import { Success } from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {
  const [openModal, setOpenModal] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType>();
  const [step, setStep] = useState<number>(0);

  function onFeedbackCanceled() {
    setStep(0);
    setFeedbackType(undefined);
  }

  function handleOpen() {
    setOpenModal(true);
  }

  function selectFeedbackType(feedback: FeedbackType) {
    setFeedbackType(feedback);
    console.log(feedback);
    setStep(1);
  }

  function reloadFeedback() {
    setStep(0);
    setFeedbackType(undefined);
  }

  const pages = useMemo(
    () => [
      <Options selectFeedbackType={selectFeedbackType} />,
      <Form
        setStep={setStep}
        feedbackType={feedbackType as FeedbackType}
        onFeedbackCanceled={onFeedbackCanceled}
      />,
      <Success reloadFeedback={reloadFeedback} />,
    ],
    [feedbackType]
  );

  return (
    <>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        <ChatTeardropDots
          size={24}
          weight={"bold"}
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <Modal
        visible={openModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenModal(false);
        }}
        style={styles.modal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {pages[step]}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setOpenModal(false)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default Widget;
