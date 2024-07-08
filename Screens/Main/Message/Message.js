import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ContactUs from '../../../assets/ContactUs.png'
import AntDesign from '@expo/vector-icons/AntDesign';
import Promotion from '../../../assets/promotion.png'
import Notifications from '../../../assets/notifications.png'
import OrderUpdates from '../../../assets/OrderUpdates.png'

export default function Message({navigation}) {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="bg-white">
          <Text className="mt-5 mb-3 font-bold text-center text-[20px]">Messaging Center</Text>
        </View>
        <View className="mt-1 px-3 bg-white py-5">
          <TouchableOpacity className="flex-row justify-between" onPress={() => navigation.navigate('ContactUs')}>
            <View className="flex-row items-center">
              <Image className="h-5 w-5" source={ContactUs} />
              <Text className="ml-3 text-[16px]">Contact Us</Text>
            </View>
            <AntDesign name="caretright" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-6" onPress={() => navigation.navigate('SystemMessages')} >
            <View className="flex-row items-center">
              <Image className="h-5 w-5" source={Notifications} />
              <Text className="ml-3 text-[16px]">System Messages</Text>
            </View>
            <AntDesign name="caretright" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-6" onPress={() => navigation.navigate('PromotionMessages')}>
            <View className="flex-row items-center">
              <Image className="h-5 w-5" source={Promotion} />
              <Text className="ml-3 text-[16px]">Promotions</Text>
            </View>
            <AntDesign name="caretright" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-6" onPress={() => navigation.navigate('ProductMessages')}>
            <View className="flex-row items-center">
              <Image className="h-5 w-5" source={OrderUpdates} />
              <Text className="ml-3 text-[16px]">Product Updates</Text>
            </View>
            <AntDesign name="caretright" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View className="bg-white flex-1 mt-2 p-2">
          <Text className="font-bold text-[17px]">Chat with sellers</Text>
          <Text className="mt-3 text-gray-600">Once you chat with seller about product or order, 
          you’ll see the messages here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}