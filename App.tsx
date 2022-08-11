import { StatusBar } from "expo-status-bar";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, { FadeInRight, FadeOutRight } from "react-native-reanimated";

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Text>Username</Text>
        <View style={styles.inputContainer}>
          <Controller
            name="username"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, ref, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
          />
          {errors.username && (
            <Animated.View
              entering={FadeInRight}
              exiting={FadeOutRight}
              pointerEvents="none"
            >
              <Text style={styles.errorText}>Username is required</Text>
            </Animated.View>
          )}
        </View>
        <Pressable
          onPress={handleSubmit(() => {
            return;
          })}
        >
          <Text>Submit</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    width: "50%",
  },
  errorText: {
    color: "red",
  },
});
