import { View, Text, SafeAreaView, ScrollView,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function PersonalInfoScreen() {
    //Get details from the store
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
);

// State to track edited email
const [editedEmail, setEditedEmail] = useState(user.result.email);
const [isEditing, setIsEditing] = useState(false);

const handleEditPress = () => {
  setIsEditing(true);
};

const handleChangeText = (text) => {
    setEditedEmail(text);
  };

  return (
    <SafeAreaView>
        <ScrollView>
        <Text className="font-bold text-[22px] ml-2 mt-4">My Profile</Text>
        <View>
          <View className="h-[110px] mt-3 bg-gray-200 z-0 relative">
            <View className="bg-gray-600 h-[100px] w-[100px] rounded-full relative z-10 -bottom-14 border -right-5"></View>
          </View>
        </View>
        <Text className="mt-12 font-bold ml-5 text-[20px] text-[#2121FC]">{user.result.name}</Text>
        <View className="mx-2 mt-3">
            <Text className="font-bold">Personal Info</Text>
            <TouchableOpacity className="justify-end flex-row"><Text className="text-[#12636D] text-[17px]">Edit</Text></TouchableOpacity>
        </View>
        <View>
            <TextInput value={editedEmail} editable={isEditing} onChangeText={handleChangeText}/>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}