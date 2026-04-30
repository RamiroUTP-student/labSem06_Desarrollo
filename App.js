import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function App() {
  // --- ESTADOS EJERCICIO 1: TEMPORIZADOR ---
  const [timeLeft, setTimeLeft] = useState(10);

  // --- ESTADOS EJERCICIO 2: LOGIN ---
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // --- LÓGICA EJERCICIO 1: TEMPORIZADOR ---
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // --- LÓGICA EJERCICIO 2: LOGIN ---
  const handleLogin = () => {
    Alert.alert("Bienvenido " + username);
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setUsername("");
      setPassword("");
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <View style={styles.container}>
      {/* VISTA TEMPORIZADOR */}
      <View style={styles.section}>
        <Text style={styles.timerText}>
          {timeLeft > 0
            ? `Tiempo restante: ${timeLeft}`
            : "¡Tiempo terminado!"}
        </Text>
      </View>

      <View style={styles.divider} />

      {/* VISTA LOGIN */}
      <View style={styles.section}>
        <TextInput
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />

        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <Button title="Iniciar sesión" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  section: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: "80%",
    borderColor: "#ccc",
    borderRadius: 5,
  },
  divider: {
    height: 1,
    width: "90%",
    backgroundColor: "#eee",
    marginVertical: 20,
  },
});