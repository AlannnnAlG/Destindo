import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const destinations = [
  {
    id: '1',
    name: 'Pantai Kuta',
    location: 'Bali, Indonesia',
    region: 'Bali',
    image:  require("../../assets/images/kuta.jpg"), 
  },
  {
    id: '2',
    name: 'Borobudur',
    location: 'Magelang, Jawa Tengah',
    region: 'Jawa',
    image:  require("../../assets/images/borobudur.jpg"), 
  },
  {
    id: '3',
    name: 'Gunung Bromo',
    location: 'Jawa Timur, Indonesia',
    region: 'Jawa',
    image:  require("../../assets/images/bromo.jpg"), 
  },
  {
    id: '4',
    name: 'Gunung Rinjani',
    location: 'Lombok, Indonesia',
    region: 'Lombok',
    image: require("../../assets/images/rinjani.jpg"),
  },

  {
    id: '5',
    name: 'Pulau Weh ',
    location: 'Sabang, Indonesia',
    region: 'Sumatera',
    image: require("../../assets/images/weh.jpg"),
  },

  {
    id: '6',
    name: 'Danau Toba',
    location: 'Sumatera Barat, Indonesia',
    region: 'Sumatera',
    image: require("../../assets/images/toba.jpg"),
  },
  
  {
    id: '7',
    name: 'Benteng Marlborough',
    location: 'Bengkulu, Indonesia',
    region: 'Sumatera',
    image:require("../../assets/images/benteng.jpg"),
  },

  {
    id: '8',
    name: 'Jembatan Ampera',
    location: 'Sumatera Selatan, Indonesia',
    region: 'Sumatera',
    image: require("../../assets/images/ampera.jpg"),
  },

  {
    id: '9',
    name: 'Pantai Ancol',
    location: 'DKI Jakarta, Indonesia',
    region: 'Jawa',
    image: require("../../assets/images/ancol.jpg"),
  },

  {
    id: '10',
    name: 'Kawah Putih',
    location: 'Jawa Barat, Indonesia',
    region: 'Jawa',
    image: require("../../assets/images/kawah.jpg"),
  },

  {
    id: '11',
    name: 'Taman Nasional Baluran',
    location: 'Jawa Timur, Indonesia',
    region: 'Jawa',
    image: require("../../assets/images/baluran.jpg"),
  },

  {
    id: '12',
    name: 'Pulau Komodo',
    location: 'NTT, Indonesia',
    region: 'Nusa Tenggara',
    image: require("../../assets/images/komodo.jpg"),
  },

  {
    id: '14',
    name: 'Pulau Derawan',
    location: 'Kalimantan Timur, Indonesia',
    region: 'Kalimantan',
    image: require("../../assets/images/derawan.jpg"),
  },

  {
    id: '15',
    name: 'Loksado',
    location: 'Kalimantan Selatan, Indonesia',
    region: 'Kalimantan',
    image: require("../../assets/images/loksado.jpg"),
  },

  {
    id: '16',
    name: 'Danau Tondano',
    location: 'Sulawesi Utara, Indonesia',
    region: 'Sulawesi',
    image: require("../../assets/images/tondano.jpg"),
  },

  {
    id: '17',
    name: 'Taman Nasional Kepulauan Togean',
    location: 'Sulawesi Tengah, Indonesia',
    region: 'Sulawesi',
    image: require("../../assets/images/togean.jpg"),
  },

  {
    id: '18',
    name: 'Benteng Rotterdam',
    location: 'Sulawesi Selatan, Indonesia',
    region: 'Sulawesi',
    image: require("../../assets/images/roterdam.jpg"),
  },

  {
    id: '19',
    name: 'Jayawijaya Mountain',
    location: 'Jayapura, Indonesia',
    region: 'Papua',
    image:  require("../../assets/images/jayawijaya.jpg"),
  },

  {
    id: '20',
    name: 'Raja Ampat',
    location: 'Papua Barat, Indonesia',
    region: 'Papua',
    image:  require("../../assets/images/ampat.jpg"),
  },

  {
    id: '21',
    name: 'Labuan Bajo',
    location: 'Flores, Indonesia',
    region: 'Nusa Tenggara',
    image:  require("../../assets/images/bajo.jpg"),
  },

  {
    id: '22',
    name: 'Nusa Penida',
    location: 'Bali, Indonesia',
    region: 'Bali',
    image:  require("../../assets/images/penida.jpg"),
  },

  {
    id: '23',
    name: 'Desa Sade',
    location: 'Lombok, Indonesia',
    region: 'Lombok',
    image:  require("../../assets/images/sade.jpg"),
  },

  {
    id: '24',
    name: 'Danau Sentani',
    location: 'Jayapura, Indonesia',
    region: 'Papua',
    image:  require("../../assets/images/sentani.jpg"),
  },

  {
    id: '25',
    name: 'Tanah Lot',
    location: 'Bali, Indonesia',
    region: 'Bali',
    image:  require("../../assets/images/lot.jpg"),
  },

  {
    id: '27',
    name: 'Pulau Alor',
    location: 'NTT, Indonesia',
    region: 'Nusa Tenggara',
    image:  require("../../assets/images/alor.jpg"),
  },
];

export default function HomeScreen() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filteredDestinations =
    activeFilter === 'Semua'
      ? destinations
      : destinations.filter((item) => item.region === activeFilter);

  const Item = ({ item }) => (
    <View style={styles.itemContainer}>
      <Link href={`/team/${item.id}`}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textOverlay}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
          </View>
        </View>
      </Link>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Destinasi Wisata</Text>
      <View style={styles.filterContainer}>
        {['Semua', 'Jawa', 'Bali', 'Lombok', 'Nusa Tenggara', 'Kalimantan', 'Sulawesi', 'Sumatera', 'Papua'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              activeFilter === filter && styles.activeFilterButton,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.activeFilterText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredDestinations}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
    color: '#333',
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
    margin: 5,
  },
  activeFilterButton: {
    backgroundColor: '#1e90ff',
  },
  filterText: {
    fontSize: 13,
    color: '#333',
  },
  activeFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    position: 'absolute', 
    bottom: 0, 
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', 
  },
  itemLocation: {
    fontSize: 13,
    color: '#ddd', 
    marginTop: 2,
  },
});





export default HomeScreen;
