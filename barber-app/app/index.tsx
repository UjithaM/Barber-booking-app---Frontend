import {Text, StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    function onPressLogin() {
        router.push("/home")
    }

    function onForgotPassword(){
        router.push("/forgotPassword")
    }

    function onPressSignUp() {
        router.push("/register")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../assets/images/barberImage.png")}
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    width: 305,
                    height: 317,
                    marginLeft: -152.5,
                    marginTop: -158.5,
                    zIndex: 0.9,
                }}
            />
            <Image
                style={styles.loginBackgroundImage}
                source={require("../assets/images/loginBackground.png")}
            />
            <View style={styles.loginForm}>
                <Text style={{fontSize:35, fontWeight: 'bold', color:'#363062'}}>Welcome Back 👋</Text>
                <Text style={{fontSize:18, color:'#6B7280', marginTop: 10}}>
                    Please enter your login information below to access your account
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
                <Text style={styles.inputText}>
                    Password
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
                <View style={{flexDirection:'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity onPress={onForgotPassword}>
                        <Text style={{color: '#363062', marginTop: 10, fontWeight:'bold', fontSize: 16}}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Login button moved inside loginForm */}
                <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                   <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 20}}>
                        <Text style={{color: '#6B7280', fontSize: 16}}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={onPressSignUp}>
                            <Text style={{color: '#363062', fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>
                                Sign Up
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
        position: 'absolute',
        top: '40%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: '60%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 40,
        paddingLeft: 35,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 2,
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
