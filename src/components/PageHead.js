import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";


const PageHeadComponent = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons style={styles.icon} name="arrow-back"></Ionicons>
            </TouchableOpacity>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "#000"
    },
    icon: {
        fontSize: 20
    },
    title: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 15,
        textTransform: "capitalize"
    }
});

export default withNavigation(PageHeadComponent);