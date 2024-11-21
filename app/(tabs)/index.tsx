import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, ScrollView, Image, Easing } from "react-native";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => setShowIntro(false));
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    }
  }, [showIntro]);

  if (showIntro) {
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <View style={styles.introContainer}>
          <Image
            source={require("../../assets/images/logo.jpg")}
            style={styles.introImage}
          />
        </View>
      </Animated.View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.welcomeContainer}>
      <Animated.View style={[styles.animatedView, { transform: [{ translateY: slideAnim }] }]}>
        <Text style={styles.header}>Selamat Datang!</Text>
        <View style={styles.divider}></View>
      </Animated.View>

      <View style={styles.bodyContainer}>
        <Text style={styles.body}>
          Mari jelajahi beberapa destinasi wisata di negara Indonesia tercinta.
        </Text>
        <Text style={styles.body}>
          Dari pegunungan yang mempesona hingga pantai-pantai yang indah, Indonesia memiliki keindahan alam dan budaya yang luar biasa.
        </Text>
        <Text style={styles.body}>
          Ayo temukan pengalaman tak terlupakan di berbagai sudut nusantara!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  introContainer: {
    alignItems: "center",
  },
  introImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  welcomeContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  animatedView: {
    marginBottom: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  divider: {
    width: 80,
    height: 4,
    backgroundColor: "#000000",
    borderRadius: 2,
    marginTop: 10,
  },
  bodyContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: "linear-gradient(180deg, #ffffff, #e3f2fd)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  body: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
    lineHeight: 24,
  },
});
