import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { Octicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
    const [searchQuery, setSearchQuery] = React.useState('');

    type Item = {
        id: number;
        name: string;
        address: string;
        rating: number;
        distance: number;
        image: any
    }

    const data: Item[] = [
        {
            id: 1,
            name: 'Alana Barbershop - Haircut massage & Spa ',
            address: 'Panadura',
            rating: 4.5,
            distance: 0.5,
            image: require('../../assets/images/barberImages/barber1.png'),
        },
        {
            id: 2,
            name: 'Hercha Barbershop - Haircut & Styling',
            address: 'Colombo',
            rating: 4.0,
            distance: 1.2,
            image: require('../../assets/images/barberImages/barber2.png'),
        },
        {
            id: 3,
            name: 'Barberking - Haircut styling & massage',
            address: 'Kalutara',
            rating: 4.8,
            distance: 2.0,
            image: require('../../assets/images/barberImages/barber3.png'),
        }
    ];

    const renderItem = ({ item }: { item: Item }) => (
        <View style={{ marginBottom: 20, flexDirection: 'row' }}>
            <View style={{ marginRight: 10 }}>
                <Image
                    source={item.image}
                />
            </View>
            <View>
                <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: 'bold', width: "80%" }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome6 name="location-dot" size={15} color="#8683A1" />
                    <Text style={{ fontSize: 15, color: '#8683A1', marginLeft: 5 }}>{item.address}</Text>
                    <Text style={{ fontSize: 15, color: '#8683A1' }}>({item.distance} km)</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" size={15} color="#8683A1" />
                    <Text style={{ fontSize: 15, color: '#8683A1', marginLeft: 5 }}>{item.rating}</Text>
                </View>
            </View>
        </View>
    );

    const ListHeaderComponent = () => (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainerSearch}>
                    <Octicons
                        name="search"
                        size={24}
                        color="#64748B"
                        style={{ marginLeft: 10 }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search barber’s, haircut service"
                        placeholderTextColor="#aaa"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <TouchableOpacity style={styles.sliderButton}>
                    <FontAwesome name="sliders" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ width: "100%" }}>
                <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>Nearest Barbershop </Text>
            </View>
        </View>
    );

    const ListFooterComponent = () => (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    See All
                    <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={20} color="black" />
                </Text>
            </TouchableOpacity>
            <View style={{ width: "100%" }}>
                <Text style={{ marginTop: 20, fontSize: 23, fontWeight: 'bold', color: "#111827" }}>Most Recommended</Text>
            </View>
            <View style={{ width: "100%", marginTop: 20 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    style={{
                        width: "100%",
                    }}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    See All
                    <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={20} color="black" />
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                contentContainerStyle={styles.flatListContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    flatListContent: {
        padding: 20,
    },
    container: {
        alignItems: 'center',
        width: '100%',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
        width: '90%',
    },
    input: {
        flex: 1,
        height: 48,
        padding: 10,
    },
    inputContainerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10,
        width: '90%',
        backgroundColor: '#EBF0F5',
    },
    sliderButton: {
        backgroundColor: '#363062',
        padding: 10,
        borderRadius: 10,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderColor: "#363062",
        borderWidth: 3,
        width: 180,
        marginTop: 20,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
    }
});
