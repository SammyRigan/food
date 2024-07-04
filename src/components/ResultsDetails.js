import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url ? result.image_url : 'https://firebasestorage.googleapis.com/v0/b/food-c0c2f.appspot.com/o/cutlery(1).png?alt=media&token=edc00a4f-acbf-4bdf-b82d-b999ef78a71a'}} />
            <Text style={styles.name}>{result.name}</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.location}>{result.location.city} . {(result.distance / 1000).toFixed(1)} km away ~ </Text>
                <Text style={[styles.location, {color: result.is_closed ? "#FF0000": "#0A5C36", fontFamily: "Poppins-SemiBold"}]}>{result.is_closed ? "Closed" : "Open"}</Text>
            </View>
            <View style={styles.engagements}>
                <Text style={styles.text}>{result.review_count} Reviews</Text>
                <Text style={styles.location}><Ionicons name="star" style={{color: "#D4AF37"}} /> {result.rating}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        // padding: 10,
        // backgroundColor: "#ffffff"
        borderRadius: 10,
    }, 
    image: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 10
    },
    name: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 14
    },
    engagements: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        opacity: 0.6,
        fontFamily: "Poppins-Regular",
        fontSize: 13
    },
    location: {
        fontFamily: "Poppins-Regular",
        fontSize: 13
        // marginBottom: 2
    }
});

export default ResultsDetail;