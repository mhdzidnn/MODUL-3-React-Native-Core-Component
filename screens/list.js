import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

// Dummmy Data (Array of Object)
const datas = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];

// Functional Component
const List = () => {
  // Arrow Function with destructured argument
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.view} onPress={() => alert("Pressed")}>
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={datas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

// Styles
const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: null,
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
});

export default List;

// PENERAPAN CORE COMPONENT MODAL PADA PROJECK PRAKTIKUM 3
//  Ketika user klik salah satu data artikel, maka akan muncul Modal kemudian Modal tersebut juga dapat ditutup
// --------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet, Modal, Button, ScrollView } from "react-native";
// import Separator from "../components/separator";

// const datas = [
//   {
//     id: 1,
//     title:
//       "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//   },
//   {
//     id: 2,
//     title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//   },
//   {
//     id: 3,
//     title:
//       "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//   },
//   {
//     id: 4,
//     title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//   },
//   {
//     id: 5,
//     title:
//       "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//   },
//   {
//     id: 6,
//     title:
//       "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//   },
//   {
//     id: 7,
//     title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//   },
//   {
//     id: 8,
//     title:
//       "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//   },
//   {
//     id: 9,
//     title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//   },
//   {
//     id: 10,
//     title:
//       "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//   },
// ];

// const List = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState({ title: "", content: "" });

//   const toggleModal = (item) => {
//     setSelectedItem(item);
//     setModalVisible(!isModalVisible);
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={styles.view} onPress={() => toggleModal(item)}>
//         <View>
//           <Image source={{ uri: item.image }} style={styles.image} />
//           <Text style={styles.text}>{item.title}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View>
//       <FlatList
//         data={datas}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />

//       <Modal
//         visible={isModalVisible}
//         animationType="slide"
//         transparent={false}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <ScrollView>
//             <Text style={styles.modalTitle}>{selectedItem.title}</Text>
//             <Separator height={10} />
//             <Text>{selectedItem.content}</Text>
//             <Separator height={20} />
//             <Button title="Close" onPress={() => setModalVisible(false)} />
//           </ScrollView>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   view: {
//     padding: 15,
//     borderBottomColor: "#dddddd",
//     borderBottomWidth: 1,
//   },
//   image: {
//     height: 200,
//     width: "100%",
//   },
//   text: {
//     fontSize: 18,
//     paddingTop: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     padding: 20,
//   },
//   modalTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
// });

// export default List;
