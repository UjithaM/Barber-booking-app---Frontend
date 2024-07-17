import {Text, StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";
import {Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    function onPressRegister() {
        router.push("/authentication")
    }

    function onForgotPassword(){
        router.push("/forgotPassword")
    }

    function onPressLogin() {
        router.dismiss()
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginForm}>
                <Text style={{fontSize:35, fontWeight: 'bold', color:'#363062'}}>Register here </Text>
                <Text style={{fontSize:18, color:'#6B7280', marginTop: 10}}>
                    Please enter your data to complete your account registration process
                </Text>
                <Text style={styles.inputText}>
                    Name
                </Text>
                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={24} color="#363062" style={{marginLeft: 12}} />
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#aaa"/>
                </View>
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
                <Text style={styles.inputText}>
                    Phone Number
                </Text>
                <View style={styles.inputContainer}>
                    <Entypo name="phone" size={24} color="#363062" style={{marginLeft: 10}} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Phone Number"
                        placeholderTextColor="#aaa"/>
                </View>
                <Text style={styles.inputText}>
                    Create Password
                </Text>
                <View style={styles.inputContainer}>
                    <FontAwesome5
                        name="key"
                        size={24}
                        color="#363062"
                        style={{marginLeft: 10}}
                    />
                    <TextInput
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        placeholder="Enter Password"
                        placeholderTextColor="#aaa"
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                        style={styles.icon}
                        onPress={toggleShowPassword}
                    />
                </View>
                <Text style={styles.inputText}>
                    Confirm Password
                </Text>
                <View style={styles.inputContainer}>
                    <FontAwesome5
                        name="key"
                        size={24}
                        color="#363062"
                        style={{marginLeft: 10}}
                    />
                    <TextInput
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        placeholder="Enter Password"
                        placeholderTextColor="#aaa"
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                        style={styles.icon}
                        onPress={toggleShowPassword}
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={onPressRegister}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 20}}>
                    <Text style={{color: '#6B7280', fontSize: 16}}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={onPressLogin}>
                        <Text style={{color: '#363062', fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginBackgroundImage: {
        width: "100%",
        height: "50%",
    },
    loginForm: {
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 100,
        paddingLeft: 35,
        paddingHorizontal: 20,
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
    inputText: {
        marginTop: 20,
    },
    icon: {
        marginRight: 10,
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
