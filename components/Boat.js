import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const Boat = ({name, description, picture}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontSize: 22}}>
                <FontAwesome6 name="sailboat" size={20}/> {name}
            </Text>
            <Text>{description}</Text>
            <Image source={picture} style={{width: 400, height: 300}}/>
        </View>
    );
};
export default Boat;
