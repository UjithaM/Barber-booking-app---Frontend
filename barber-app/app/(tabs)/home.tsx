import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Octicons, FontAwesome } from "@expo/vector-icons";

export default function App() {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
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
                <View style={{width: "100%"}}>
                    <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold'}}>Nearest Babershop </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
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
    sliderButton: {
        backgroundColor: '#363062',
        padding: 10,
        borderRadius: 10,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
