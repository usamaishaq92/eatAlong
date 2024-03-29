import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function Login({ navigation }) {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [showPassword, setShowPassword] = useState(true);

  const loginPressed = () => {
    navigation.navigate("register");
  };

  const onEyePressed = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput
          placeholder={"email"}
          style={styles.input}
          onChangeText={(text) => setEmailInput(text)}
        />

        <View style={styles.passwordCon}>
          <TextInput
            placeholder={"password"}
            secureTextEntry={showPassword}
            style={styles.passwordInput}
            onChangeText={(text) => setPasswordInput(text)}
          />
          <Ionicons
            size={25}
            color={showPassword ? "orange" : "purple"}
            name={showPassword ? "eye" : "eye-off"}
            onPress={onEyePressed}
          />
        </View>
      </View>

      <View style={styles.bottomBox}>
        <Button title={"login"} onPress={loginPressed} />
      </View>
    </View>
  );
}

export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loginForm: {
    flex: 1,
    padding: 10,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },

  passwordCon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  passwordInput: {
    width: "90%",
    padding: 10,
  },

  bottomBox: {
    flex: 1,
  },
});
