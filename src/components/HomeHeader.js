import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const HomeHeaderComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Restaurants</Text>
            <Octicons name="filter" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 25,
        marginHorizontal: 15,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontSize: 25,
        fontFamily: "Poppins-Bold"
    }
});

export default HomeHeaderComponent;