import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfilePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About Us</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Destinasi Wisata Indonesia</Text>
        <Text style={styles.description}>
          Tema ini bertujuan untuk mengenalkan keindahan berbagai destinasi wisata yang ada di Indonesia. Mulai dari pantai eksotis, gunung yang menakjubkan, hingga budaya lokal yang unik. 
          Pengguna dapat mengeksplorasi tempat-tempat menarik berdasarkan kategori regional seperti Jawa, Bali, Nusa Tenggara, dan lainnya.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Tujuan</Text>
        <Text style={styles.description}>
          Aplikasi ini dibuat untuk:
        </Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Membantu wisatawan menemukan destinasi favorit mereka.</Text>
          <Text style={styles.bullet}>• Menyediakan informasi ringkas tentang lokasi wisata.</Text>
          <Text style={styles.bullet}>• Mendukung promosi wisata lokal agar lebih dikenal dunia.</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Fitur Unggulan</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>• Filter berdasarkan kategori wilayah.</Text>
          <Text style={styles.bullet}>• Tampilan gambar dengan proporsi 16:9 yang menarik.</Text>
          <Text style={styles.bullet}>• Navigasi antarmuka yang sederhana dan user-friendly.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 10,
  },
  bulletContainer: {
    marginLeft: 10,
  },
  bullet: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
});
