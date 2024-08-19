import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Products() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <View className="bg-gray-200 p-1 mx-2 rounded-md mt-3 flex flex-row items-center">
                    <FontAwesome5 name="search" className="mx-2" size={20} color="black" />
                    <TextInput className="p-1 ml-2" placeholder='search products..' />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}><Text>Electronics</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text>Clothes</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text>Kitchen</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text>Shoes</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text>Home Appliances</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text>Health Care</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text>Games</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View className="bg-gray-200 flex-1 w-full flex mx-2">
                    <View className="bg-white w-full p-2 rounded">
                        <Text>Refurbished Xiomi 10 mi10 5G Smartphone</Text>
                        <Text className="font-bold">Ksh 23,000</Text>
                    </View>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 6, // Adjust spacing between items
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
