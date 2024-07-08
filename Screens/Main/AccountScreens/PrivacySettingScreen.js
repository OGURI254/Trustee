import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function PrivacySettingScreen({ navigation }) {
    const [isStrictlyPartnersDropdownClicked, setIsStrictlyPartnersDropdownClicked] = useState(false);

        //handle message notification dropdown
    const toggleStrictlyPartnersDropdown = () => {
        setIsStrictlyPartnersDropdownClicked(!isStrictlyPartnersDropdownClicked)
    }

    return (
        <SafeAreaView className="mx-2">
            <ScrollView>
                <View className="flex-row mt-3 items-center">
                    <TouchableOpacity
                        className="justify-center h-7 w-7 bg-gray-400 rounded-full items-center"
                        onPress={() => navigation.navigate('Setting')}
                    >
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className="font-bold ml-20 text-center text-[20px]">Settings</Text>
                </View>
                <View className="mt-3">
                    <Text className="text-center">Along with our partners we use trackers for the reasons below to store and retrieve information from your device.</Text>
                    <View className="mt-3 flex-row items-center justify-between border rounded p-2 border-gray-300">
                        <Text>Strictly necessary permissions</Text>
                        <TouchableOpacity className="border border-[#12636D] w-14 h-6 rounded-lg"><View className="bg-[#12636D] h-full rounded-lg w-7"></View></TouchableOpacity>
                    </View>
                    <View className={`border p-2 mt-3 rounded-lg ${isStrictlyPartnersDropdownClicked ? 'border-[#12636D]' : 'border-gray-300'} `}>
                        <TouchableOpacity className="flex-row items-center justify-between" onPress={toggleStrictlyPartnersDropdown}><Text className={`font-bold text-[17px] ${isStrictlyPartnersDropdownClicked ? 'text-[#12636D]' : ''}`}>Strictly necessary partners</Text><View className={`justify-center h-6 w-6  rounded-full items-center ${isStrictlyPartnersDropdownClicked ? 'bg-[#12636D]' : 'bg-black'}`}>
                            {isStrictlyPartnersDropdownClicked ? (<AntDesign name="caretdown" size={20} color="white" />): (<AntDesign name="arrowright" size={20} color="white" />)}
                        </View></TouchableOpacity>
                        {isStrictlyPartnersDropdownClicked && (
                            <View className="mt-3">
                                <View className="border  border-gray-300 rounded p-2">
                                    <Text className="font-bold">Location</Text>
                                    <Text>Lets you access the realtime tracking of a product you sent.</Text>
                                    <TouchableOpacity className="mt-3"><Text className="font-bold">View Privacy Policy</Text></TouchableOpacity>
                                </View>
                                <View className="border mt-3  border-gray-300 rounded p-2">
                                    <Text className="font-bold">Carrier partners</Text>
                                    <Text>Our partners will have access to your Idenity, business and location.</Text>
                                    <TouchableOpacity className="mt-3"><Text className="font-bold">View Privacy Policy</Text></TouchableOpacity>
                                </View>
                            </View>
                        )}
                        
                    </View>
                    <Text className="mt-4 text-center">These trackers provide essential services like letting you know the progress of your product and building clients trust</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}