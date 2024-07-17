import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import {View, Image, Text} from "react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#363062',
            tabBarStyle: {
                height: 80,
                paddingBottom: 20,
            },
            headerTitle: '',
            headerStyle: {
                height: 130,
            },
        } } >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                            <Image
                                source={{ uri: 'https://avatars.githubusercontent.com/u/73924968?v=4' }}
                                style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
                            />
                        </View>
                    ),
                    headerLeft: () => (
                        <View style={{marginLeft: 20}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>

                                <FontAwesome5 name="map-marker-alt" size={24} color="#363062" />
                                <Text style={{marginLeft: 5 , fontSize: 18}}>Colombo</Text>
                            </View>
                            <Text style={{fontWeight: 'bold', fontSize: 23}}>Udara san</Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="booking"
                options={{
                    title: 'Booking',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="calendar-day" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color }) => <Entypo name="chat" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />
                }}
            />
        </Tabs>
    );
}
