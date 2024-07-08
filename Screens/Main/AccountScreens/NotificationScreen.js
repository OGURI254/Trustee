import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function NotificationScreen({ navigation }) {
    const [isNewMessageDropdownClicked, setIsNewMessageDropdownClicked] = useState(false);
    const [isNewCommunityPostsDropdownClicked, setIsCommunityPostsDropdownClicked] = useState(false);

    //handle message notification dropdown
    const toggleNewMessageDropdown = () => {
        setIsNewMessageDropdownClicked(!isNewMessageDropdownClicked)
    }

    //handle message notification dropdown
    const toggleCommunityPostDropdown = () => {
        setIsCommunityPostsDropdownClicked(!isNewCommunityPostsDropdownClicked)
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
                    <Text className="text-center">Choose what activities matter to you to keep in touch what.</Text>
                    <View className={`border p-2 mt-3 rounded-lg ${isNewMessageDropdownClicked ? 'border-[#12636D]' : 'border-gray-300'} `}>
                        <TouchableOpacity className="flex-row items-center justify-between" onPress={toggleNewMessageDropdown}><Text className={`font-bold text-[17px] ${isNewMessageDropdownClicked ? 'text-[#12636D]' : ''}`}>New messages</Text><View className={`justify-center h-6 w-6  rounded-full items-center ${isNewMessageDropdownClicked ? 'bg-[#12636D]' : 'bg-black'}`}>
                            {isNewMessageDropdownClicked ? (<AntDesign name="caretdown" size={20} color="white" />): (<AntDesign name="arrowright" size={20} color="white" />)}
                        </View></TouchableOpacity>
                        {isNewMessageDropdownClicked && (
                            <View className="mt-2">
                                <TouchableOpacity className="p-2 bg-gray-200 rounded">
                                    <Text>Push notifications</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="p-2 bg-gray-200 rounded mt-1">
                                    <Text>In-app notifications</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="p-2 bg-gray-200 rounded mt-1">
                                    <Text>Email</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="bg-[#2121FC] mt-4 rounded p-2 mx-auto items-center w-[200px]"><Text className="font-bold text-white text-[20px]">Save</Text></TouchableOpacity>
                            </View>
                        )}
                    </View>
                    <View className={`border p-2 mt-3 rounded-lg ${isNewCommunityPostsDropdownClicked ? 'border-[#12636D]' : 'border-gray-300'} `}>
                        <TouchableOpacity className="flex-row items-center justify-between" onPress={toggleCommunityPostDropdown}><Text className={`font-bold text-[17px] ${isNewCommunityPostsDropdownClicked ? 'text-[#12636D]' : ''}`}>New community posts</Text><View className={`justify-center h-6 w-6  rounded-full items-center ${isNewCommunityPostsDropdownClicked ? 'bg-[#12636D]' : 'bg-black'}`}>
                            {isNewCommunityPostsDropdownClicked ? (<AntDesign name="caretdown" size={20} color="white" />): (<AntDesign name="arrowright" size={20} color="white" />)}
                        </View></TouchableOpacity>
                        {isNewCommunityPostsDropdownClicked && (
                            <View className="mt-2">
                                <TouchableOpacity className="p-2 bg-gray-200 rounded">
                                    <Text>Push notifications</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="p-2 bg-gray-200 rounded mt-1">
                                    <Text>In-app notifications</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="p-2 bg-gray-200 rounded mt-1">
                                    <Text>Email</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="bg-[#2121FC] mt-4 rounded p-2 mx-auto items-center w-[200px]"><Text className="font-bold text-white text-[20px]">Save</Text></TouchableOpacity>
                            </View>
                        )}
                    </View>
                    

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}