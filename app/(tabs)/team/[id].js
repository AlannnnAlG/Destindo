import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; 

const HISTORY = {
  1: {
    id: '1',
    name: 'Pantai Kuta',
    
    description: "Pantai Kuta adalah salah satu destinasi wisata paling terkenal di Bali, Indonesia. Terletak di bagian selatan pulau Bali, pantai ini memiliki pasir putih, ombak yang cocok untuk berselancar, dan pemandangan matahari terbenam yang menakjubkan. Pantai Kuta dikelilingi oleh berbagai fasilitas wisata seperti hotel, restoran, toko, dan tempat hiburan malam.",
  },
  2: {
    id: '2',
    name: 'Borobudur',

    description: "Borobudur adalah candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah, Indonesia, dibangun pada masa Dinasti Syailendra antara abad ke-8 dan ke-9 Masehi, terdiri atas 10 tingkat dengan struktur berbentuk mandala yang melambangkan kosmologi Buddha Mahayana, dihiasi 2.672 panel relief yang mengisahkan ajaran Buddha, kehidupan sehari-hari masyarakat kuno, serta perjalanan Sang Buddha menuju Nirwana, dan memiliki 504 patung Buddha serta stupa utama besar di puncaknya yang mengandung filosofi pencapaian spiritual tertinggi; candi ini diakui sebagai Situs Warisan Dunia UNESCO pada tahun 1991 dan menjadi salah satu destinasi wisata serta ziarah spiritual terpenting di dunia.",
  },

  3: {
    id: '3',
    name: 'Gunung Bromo',
    description: "Gunung Bromo adalah gunung berapi aktif yang terletak di Taman Nasional Bromo Tengger Semeru, Jawa Timur, Indonesia, dengan ketinggian 2.329 meter di atas permukaan laut, terkenal akan pemandangan kaldera pasir seluas 10 kilometer persegi yang dikelilingi oleh lautan pasir, serta sering menjadi tujuan wisata karena panorama matahari terbit yang memukau, tradisi suku Tengger seperti upacara Yadnya Kasada, dan aksesibilitasnya yang memungkinkan wisatawan menikmati keindahan alam vulkanik di kawasan ini.",
  },

  4: {
    id: '4',
    name: 'Gunung Rinjani',
    description: "Gunung Rinjani adalah gunung berapi tertinggi kedua di Indonesia, dengan ketinggian 3.726 meter di atas permukaan laut, terletak di Pulau Lombok, Nusa Tenggara Barat, dan menjadi bagian dari Taman Nasional Gunung Rinjani, yang terkenal dengan keindahan alamnya, termasuk kawah besar yang berisi Danau Segara Anak, puncak dengan pemandangan spektakuler, air terjun, serta jalur pendakian yang menantang, sekaligus menjadi lokasi ritual keagamaan masyarakat setempat seperti suku Sasak dan Bali yang menganggapnya sebagai tempat suci.",
  },

  5: {
    id: '5',
    name: 'Pulau Weh',
    description: "Pulau Weh adalah pulau kecil di ujung barat Indonesia, terletak di Aceh, dekat kota Sabang, yang terkenal dengan keindahan alam bawah lautnya, menjadikannya surga bagi penyelam dan snorkeler dengan terumbu karang yang kaya, berbagai spesies laut unik seperti hiu sirip hitam dan ikan pari manta, pantai-pantai indah seperti Pantai Iboih dan Gapang, serta lokasi ikonik Tugu Nol Kilometer Indonesia, yang melambangkan titik paling barat negara ini, sambil menawarkan suasana yang tenang dan alami untuk para wisatawan.",
  },

  6: {
    id: '6',
    name: 'Danau Toba',
    description: "Danau Toba adalah danau vulkanik terbesar di dunia dan danau terbesar di Asia Tenggara, terletak di Provinsi Sumatera Utara, Indonesia, dengan panjang sekitar 100 kilometer dan lebar 30 kilometer, terbentuk akibat letusan supervulkan sekitar 74.000 tahun lalu, yang meninggalkan kaldera besar yang kini menjadi danau dengan Pulau Samosir di tengahnya, dihuni oleh masyarakat Batak yang memiliki budaya dan tradisi unik, menjadikannya destinasi wisata populer dengan pemandangan alam yang memukau, sumber air panas alami, dan atraksi budaya seperti rumah adat Batak dan pertunjukan seni lokal.",
  },

  7: {
    id: '7',
    name: 'Benteng Marlborough',
    description: "Benteng Marlborough adalah benteng peninggalan kolonial Inggris yang terletak di Kota Bengkulu, Indonesia, dibangun pada tahun 1714-1719 oleh East India Company di bawah kepemimpinan Gubernur Joseph Collett, berbentuk menyerupai kura-kura dengan gaya arsitektur Eropa abad ke-18, digunakan sebagai pusat pertahanan, administrasi, dan perdagangan Inggris di wilayah itu, sebelum berpindah tangan ke Belanda dan kemudian menjadi bagian dari sejarah perjuangan Indonesia; benteng ini kini menjadi situs wisata sejarah yang menampilkan koleksi peninggalan kolonial, lorong bawah tanah, dan panorama pesisir Bengkulu.",
  },

  8: {
    id: '8',
    name: 'Jembatan Ampera',
    description: "Jembatan Ampera adalah ikon kota Palembang, Sumatera Selatan, Indonesia, yang membentang di atas Sungai Musi, dibangun pada tahun 1962 dengan panjang 1.117 meter dan lebar 22 meter, dirancang dengan mekanisme pengangkat pada bagian tengahnya untuk memungkinkan kapal besar melintas, meskipun fungsi tersebut kini tidak lagi digunakan; jembatan ini awalnya bernama *Jembatan Bung Karno* sebagai penghormatan kepada presiden pertama Indonesia, namun kemudian diganti menjadi Ampera (*Amanat Penderitaan Rakyat*), dan hingga kini menjadi landmark bersejarah sekaligus objek wisata yang terkenal, terutama dengan pemandangan malamnya yang dihiasi lampu warna-warni.",
  },

  9: {
    id: '9',
    name: 'Pantai Ancol',
    description: "Pantai Ancol adalah bagian dari kawasan wisata terpadu Taman Impian Jaya Ancol di Jakarta Utara, Indonesia, yang menawarkan berbagai pantai buatan seperti Pantai Lagoon, Festival, Carnaval, dan Indah, dengan fasilitas rekreasi yang lengkap seperti area bermain, olahraga air, jalur jogging, restoran tepi laut, dan panggung hiburan, menjadikannya tujuan populer bagi wisatawan lokal maupun internasional; kawasan ini juga terhubung dengan atraksi lain seperti Dunia Fantasi (Dufan), SeaWorld, dan Ocean Dream Samudra, serta sering menjadi lokasi berbagai acara budaya, musik, dan olahraga.",
  },

  10: {
    id: '10',
    name: 'Kawah Putih',
    description: "Kawah Putih adalah danau kawah vulkanik yang terletak di kawasan Gunung Patuha, Ciwidey, Kabupaten Bandung, Jawa Barat, Indonesia, berada pada ketinggian sekitar 2.400 meter di atas permukaan laut, dengan air yang berubah warna dari hijau kebiruan menjadi putih susu atau cokelat, tergantung pada kandungan belerang dan cuaca, dikelilingi oleh hutan pegunungan yang sejuk dan berkabut, menciptakan suasana mistis dan pemandangan yang memukau; tempat ini populer sebagai destinasi wisata alam, lokasi fotografi, serta sering digunakan untuk prewedding dan produksi film.",
  },

  11: {
    id: '11',
    name: 'Taman Nasional Baluran',
    description: "Taman Nasional Baluran adalah taman nasional yang terletak di ujung timur Pulau Jawa, Indonesia, di Kabupaten Banyuwangi dan Situbondo, dengan luas sekitar 25.000 hektar, dikenal sebagai Africa van Java karena memiliki sabana luas yang mirip dengan savana Afrika, serta ekosistem yang sangat beragam, mulai dari hutan tropis, hutan pantai, hingga padang rumput, yang menjadi habitat bagi berbagai satwa liar seperti banteng, macan tutul, rusa, dan berbagai spesies burung. Taman ini juga menawarkan pemandangan Gunung Baluran yang menjulang tinggi, serta merupakan tempat yang ideal untuk kegiatan ekowisata seperti safari, pengamatan satwa, dan hiking.",
  },

  12: {
    id: '12',
    name: 'Pulau Komodo',
    description: "Pulau Komodo adalah pulau yang terletak di Provinsi Nusa Tenggara Timur, Indonesia, dan merupakan bagian dari Taman Nasional Komodo, yang dikenal sebagai habitat asli komodo, spesies kadal raksasa yang hanya ditemukan di beberapa pulau di Indonesia. Pulau ini memiliki keindahan alam yang luar biasa, dengan pantai berpasir pink, perairan jernih yang kaya akan kehidupan laut, serta pemandangan alam yang dramatis, menjadikannya tujuan populer bagi wisatawan dan penyelam. Selain komodo, pulau ini juga dihuni oleh berbagai satwa liar lainnya, termasuk rusa, babi hutan, dan berbagai jenis burung, serta menawarkan aktivitas wisata seperti trekking, snorkeling, dan diving. Taman Nasional Komodo, termasuk Pulau Komodo, diakui sebagai Situs Warisan Dunia UNESCO.",
  },

  14: {
    id: '14',
    name: 'Pulau Derawan',
    description: "Pulau Derawan adalah sebuah pulau tropis yang terletak di Kabupaten Berau, Kalimantan Timur, Indonesia, dikenal dengan keindahan alam bawah lautnya yang luar biasa, menjadikannya tujuan populer bagi penyelam dan snorkeler. Pulau ini merupakan bagian dari Kepulauan Derawan yang meliputi beberapa pulau kecil lainnya, seperti Pulau Maratua, Pulau Sangalaki, dan Pulau Kakaban, yang menawarkan pemandangan terumbu karang yang sehat, keberagaman biota laut, serta spot menyelam yang terkenal, termasuk pertemuan dengan penyu, ikan manta, dan hiu. Selain keindahan bawah laut, Pulau Derawan juga menawarkan pantai berpasir putih yang tenang, hutan mangrove, dan wisata ekowisata, termasuk melihat fenomena danau ubur-ubur tanpa sengat di Pulau Kakaban.",
  },

  15: {
    id: '15',
    name: 'Loksado',
    description: "Loksado adalah sebuah kawasan di Kecamatan Hulu Sungai Selatan, Kalimantan Selatan, Indonesia, yang terkenal dengan keindahan alamnya, terutama pegunungan, hutan tropis, dan sungai. Loksado menjadi destinasi populer untuk wisata alam dan petualangan, menawarkan aktivitas seperti trekking, berperahu di sungai, serta mengunjungi rumah adat Dayak Meratus. Kawasan ini juga dikenal dengan keindahan budaya dan tradisi masyarakat lokal, seperti suku Dayak Meratus, yang masih mempertahankan kehidupan tradisional mereka. Salah satu atraksi utama di Loksado adalah pemandangan alam yang memukau, terutama dari puncak-puncak bukit yang menawarkan panorama spektakuler.",
  },

  16: {
    id: '16',
    name: 'Danau tondano',
    description: "Danau Tondano adalah sebuah danau yang terletak di Kabupaten Minahasa, Sulawesi Utara, Indonesia, dengan luas sekitar 4.278 hektar dan berada pada ketinggian 600 meter di atas permukaan laut. Danau ini memiliki pemandangan alam yang memukau, dikelilingi oleh pegunungan dan perbukitan yang hijau, serta menjadi tempat wisata populer bagi wisatawan yang ingin menikmati keindahan alam danau, bersantai di tepi danau, atau berperahu. Danau Tondano juga memiliki peran penting bagi masyarakat sekitar, sebagai sumber irigasi pertanian dan tempat untuk menangkap ikan. Beberapa desa di sekitar danau menawarkan pengalaman budaya lokal yang menarik, serta menikmati kuliner khas Minahasa.",
  },

  17: {
    id: '17',
    name: 'Taman Nasional Kepulauan Togean',
    description: "Taman Nasional Kepulauan Togean adalah kawasan konservasi laut yang terletak di Teluk Tomini, Sulawesi Tengah, Indonesia, mencakup lebih dari 56 pulau dengan luas sekitar 3.626 kilometer persegi, terkenal karena keindahan alam bawah lautnya yang luar biasa dan ekosistem yang sangat beragam. Kawasan ini menjadi rumah bagi terumbu karang yang sehat, hutan mangrove, danau ubur-ubur tanpa sengat, serta berbagai spesies laut seperti penyu, ikan pari, hiu karang, dan ikan hias endemik. Selain itu, Kepulauan Togean juga dihuni oleh komunitas lokal, termasuk suku Bajau yang dikenal sebagai manusia laut, yang hidup dengan cara tradisional. Aktivitas wisata populer di sini meliputi snorkeling, diving, trekking, dan menikmati keindahan pantai-pantai tersembunyi.",
  },
  
  18: {
    id: '18',
    name: 'Benteng Rotterdam',
    description: "Benteng Rotterdam, juga dikenal sebagai Fort Rotterdam, adalah benteng bersejarah yang terletak di Kota Makassar, Sulawesi Selatan, Indonesia, dibangun pada tahun 1545 oleh Raja Gowa ke-9, dan diperluas pada masa penjajahan Belanda pada abad ke-17, dengan gaya arsitektur yang menggabungkan unsur tradisional dan kolonial. Benteng ini awalnya bernama Benteng Ujung Pandang sebelum berganti nama menjadi Fort Rotterdam setelah dikuasai Belanda. Benteng ini memiliki struktur berbentuk kura-kura sebagai simbol kerajaan Gowa yang kuat namun fleksibel. Kini, benteng menjadi situs wisata sejarah yang menampilkan museum, koleksi artefak, dan informasi tentang sejarah Makassar serta perjuangan melawan penjajahan.",
  },

  19: {
    id: '19',
    name: 'Jayawijaya Mountain',
    description: "Pegunungan Jayawijaya adalah rangkaian pegunungan di Provinsi Papua Pegunungan, Indonesia, yang terkenal sebagai rumah bagi Puncak Jaya (Carstensz Pyramid), puncak tertinggi di Indonesia dengan ketinggian 4.884 meter di atas permukaan laut, sekaligus satu-satunya tempat di wilayah tropis yang memiliki salju abadi. Pegunungan ini merupakan bagian dari rangkaian *Sudirman Range* dan termasuk dalam *Seven Summits*, puncak-puncak tertinggi di setiap benua, menjadikannya tujuan favorit bagi para pendaki gunung internasional. Selain keindahan alamnya, Pegunungan Jayawijaya juga memiliki nilai geologis dan budaya, dengan lanskap yang mencerminkan proses tektonik selama jutaan tahun serta menjadi tempat tinggal bagi masyarakat adat yang kaya akan tradisi dan kearifan lokal.",
  },

  20: {
    id: '20',
    name: 'Raja Ampat',
    description: "Raja Ampat adalah gugusan kepulauan yang terdiri dari lebih dari 1.500 pulau kecil, atol, dan beting karang, yang terletak di Provinsi Papua Barat Daya, Indonesia, dikenal sebagai salah satu surga bawah laut terbaik di dunia. Wilayah ini memiliki keanekaragaman hayati laut yang luar biasa, termasuk lebih dari 540 spesies karang, 1.000 spesies ikan, dan berbagai biota laut unik seperti hiu karpet dan pari manta. Selain keindahan bawah lautnya, Raja Ampat juga menawarkan panorama daratan yang memukau dengan bukit karst, hutan tropis, dan pantai berpasir putih. Tempat ini menjadi destinasi utama untuk snorkeling, diving, kayaking, dan ekowisata, serta dihuni oleh masyarakat adat yang kaya akan tradisi dan seni budaya. Raja Ampat juga diakui sebagai salah satu kawasan dengan ekosistem laut paling sehat di dunia.",
  },

  21: {
    id: '21',
    name: 'Labuan Bajo',
    description: "Labuan Bajo adalah sebuah kota kecil di ujung barat Pulau Flores, Nusa Tenggara Timur, Indonesia, yang menjadi gerbang utama menuju Taman Nasional Komodo, rumah bagi komodo, hewan purba yang ikonik. Labuan Bajo menawarkan berbagai daya tarik wisata, mulai dari keindahan pantai seperti Pantai Pink, Pulau Padar dengan pemandangan puncaknya yang dramatis, hingga surga bawah laut yang ideal untuk snorkeling dan diving di perairan sekitar Pulau Komodo dan Pulau Rinca. Selain itu, kota ini memiliki fasilitas wisata yang berkembang pesat, termasuk penginapan, restoran, dan dermaga yang mendukung perjalanan wisatawan untuk menjelajahi kawasan sekitarnya. Labuan Bajo juga terkenal dengan panorama matahari terbenam yang memukau di tepi pelabuhan.",
  },

  22: {
    id: '22',
    name: 'Nusa Penida',
    description: "Nusa Penida adalah sebuah pulau kecil yang terletak di sebelah tenggara Bali, Indonesia, dan menjadi bagian dari Kabupaten Klungkung, terkenal karena keindahan alamnya yang dramatis, dengan tebing-tebing curam, pantai-pantai tersembunyi, dan kehidupan bawah laut yang kaya. Pulau ini menawarkan berbagai destinasi ikonik seperti Pantai Kelingking yang berbentuk seperti tulang dinosaurus, Broken Beach yang unik dengan lengkungan batu alami, Angel's Billabong sebagai kolam alami di tepi laut, serta Crystal Bay yang terkenal dengan snorkeling dan diving. Nusa Penida juga menjadi lokasi favorit untuk melihat ikan mola-mola (sunfish) dan pari manta di habitat aslinya. Pulau ini memiliki akses mudah dari Bali melalui speedboat, menjadikannya tujuan populer untuk wisata sehari maupun menginap.",
  },

  23: {
    id: '23',
    name: 'Desa Sade',
    description: "Desa Sade adalah sebuah desa adat suku Sasak yang terletak di Lombok Tengah, Nusa Tenggara Barat, Indonesia, terkenal karena mempertahankan tradisi dan budaya asli Sasak yang masih autentik hingga saat ini. Desa ini menampilkan rumah tradisional berbentuk lumbung, yang dibangun dari bambu, atap alang-alang, dan lantai tanah yang sering dilumuri campuran kotoran kerbau untuk mengusir serangga. Masyarakat Desa Sade menjaga tradisi kerajinan tangan seperti menenun kain songket secara manual, serta berbagai ritual adat, tarian, dan musik khas Sasak. Desa ini menjadi destinasi wisata budaya yang memungkinkan pengunjung untuk mengenal lebih dekat kehidupan sehari-hari masyarakat Sasak, seni, serta kuliner lokal.",
  },

  24: {
    id: '24',
    name: 'Danau Sentani',
    description: "Danau Sentani adalah danau terbesar di Papua, Indonesia, terletak di kaki Pegunungan Cycloop, dekat Kota Jayapura, dengan luas sekitar 9.360 hektar dan berada di ketinggian 75 meter di atas permukaan laut. Danau ini memiliki 21 pulau kecil yang tersebar di tengahnya, serta menjadi habitat bagi berbagai jenis ikan endemik, seperti ikan gabus Sentani. Selain keindahan alamnya, Danau Sentani juga kaya akan budaya lokal, dihuni oleh masyarakat adat yang masih menjaga tradisi, seperti ukiran khas dan festival budaya. Festival Danau Sentani, yang diadakan setiap tahun, menjadi momen untuk menampilkan seni, tarian, dan kuliner khas Papua. Danau ini juga merupakan tempat yang ideal untuk berperahu, memancing, atau menikmati pemandangan matahari terbenam yang memukau.",
  },

  25: {
    id: '25',
    name: 'Tanah Lot',
    description: "Tanah Lot adalah pura ikonik yang terletak di atas batu karang besar di tepi pantai di Kabupaten Tabanan, Bali, Indonesia, dikenal sebagai salah satu tempat wisata paling terkenal di Bali. Dibangun pada abad ke-16 oleh Dang Hyang Nirartha, pura ini didedikasikan untuk Dewa Laut, menjadikannya tempat suci bagi umat Hindu Bali. Tanah Lot menawarkan pemandangan dramatis, terutama saat matahari terbenam, dengan latar belakang pura yang terpisah dari daratan saat air pasang. Kawasan ini juga dilengkapi dengan jalan setapak menuju pura, toko suvenir, dan restoran yang memungkinkan wisatawan menikmati panorama sambil merasakan suasana spiritual khas Bali.",
  },

  27: {
    id: '27',
    name: 'Pulau Alor',
    description: "Pulau Alor adalah sebuah pulau yang terletak di Provinsi Nusa Tenggara Timur, Indonesia, dikenal karena keindahan alamnya yang belum banyak terjamah dan kekayaan budaya masyarakatnya. Pulau ini memiliki perairan yang sangat jernih dengan terumbu karang yang sehat, menjadikannya surga bagi penyelam dan snorkeler, termasuk spot terkenal seperti Selat Pantar dan taman bawah laut yang dihuni spesies langka seperti hiu karang dan ikan hias. Selain itu, Pulau Alor menawarkan keindahan daratan berupa pegunungan, air terjun, dan desa-desa tradisional, seperti Desa Takpala, yang mempertahankan budaya suku Abui dengan rumah adat dan tradisi uniknya. Pulau ini juga terkenal dengan alat musik tradisional *mokko* dan kain tenun ikat khas Alor yang dibuat dengan teknik kuno.",
  },
};

export default function TeamScreen() {
  const { id } = useLocalSearchParams(); 

  const team = HISTORY[id]; 

  if (!team) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Destinasi tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{team.name}</Text>
      <Text style={styles.description}>{team.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',       
    backgroundColor: 'white',
    paddingHorizontal: 20,      
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',       
  },
  description: {
    fontSize: 16,
    textAlign: 'center',       
    lineHeight: 22,
    color: '#333',
  },
});
