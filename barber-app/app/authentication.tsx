import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef } from "react";

export default function () {
    const router = useRouter();
    const inputRefs = useRef([]);

    function onPressSend() {
        router.push("/authentication");
    }

    function handleChange(text, index) {
        if (text.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: "center", height: '100%' }}>
                <View style={{ width: '100%', padding: 20 }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#363062' }}>
                        Authentication
                    </Text>
                    <Text style={{ fontSize: 18, color: '#6B7280', marginTop: 10 }}>
                        Please enter the authentication code that we have sent to your email
                    </Text>
                    <View style={{ justifyContent: 'center', alignItems: "center"}}>
                        <View style={styles.inputContainer}>
                            {[0, 1, 2, 3].map((_, index) => (
                                <TextInput
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    style={styles.input}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    onChangeText={(text) => handleChange(text, index)}
                                />
                            ))}
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={onPressSend}>
                        <Text style={styles.loginButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => console.log('Sign Up Pressed')}>
                    <Text style={{ color: '#363062', fontSize: 16, fontWeight: 'bold', marginLeft: 5 }}>
                        Have not receive code?
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputText: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'space-around',
        width:'80%'
    },
    input: {
        height: 62,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 16,
        marginHorizontal: 5,
        width: 62,
        textAlign: 'center',
        fontWeight:'bold'
    },
    loginButton: {
        backgroundColor: '#363062',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

