import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

export  default  function () {
    const router = useRouter();
    function onPressSend() {
        router.push("/authentication")
    }

    return (
        <SafeAreaView>
            <View style={{flexDirection:'row', justifyContent: 'center', alignItems: "center", height: '100%'}}>
                <View style={{width:'100%', padding: 20}}>
                    <Text style={{fontSize:35, fontWeight: 'bold', color:'#363062'}}>
                        Forgot Password?
                    </Text>
                    <Text style={{fontSize:18, color:'#6B7280', marginTop: 10}}>
                        Please enter your email for the password reset process
                    </Text>
                    <Text style={styles.inputText}>
                        Email
                    </Text>
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons
                            name="email"
                            size={24}
                            color="#363062"
                            style={{marginLeft: 10}}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
                            placeholderTextColor="#aaa"/>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={onPressSend}>
                        <Text style={styles.loginButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    inputText: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
    },
    input: {
        flex: 1,
        height: 48,
        padding: 10,
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
    },})