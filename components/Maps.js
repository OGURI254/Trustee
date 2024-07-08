import { View, Text, StyleSheet,Image } from 'react-native'
import React, { useContext } from 'react'
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { UserLocationContext } from './context/UserLocationContext';
import LocationMarker from '../assets/location.png'
import MapViewStyles from '../utils/MapViewStyles.json'

export default function Maps() {
    const{location, setLocation} = useContext(UserLocationContext)
    return location?.latitude &&(
        <View style={styles.container}>
            <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapViewStyles}
            region={{
                latitude:location?.latitude,
                longitude:location?.longitude,
                latitudeDelta:0.0422,
                longitudeDelta:0.0421
            }
            }
             >
                <Marker
                    coordinate={{
                        latitude:location?.latitude,
                        longitude:location?.longitude
                    }}
                >
                    <Image className="h-4 w-4" source={require('../assets/location.png')}/>
                </Marker>
             </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});