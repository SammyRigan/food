import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons"
    
const width = Dimensions.get('window').width;

const ResultsDetailsTileComponent = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url ? result.image_url : 'https://firebasestorage.googleapis.com/v0/b/food-c0c2f.appspot.com/o/cutlery(1).png?alt=media&token=edc00a4f-acbf-4bdf-b82d-b999ef78a71a'}} />
            <View style={{width: width - 145}}>
                <Text style={styles.name}>{result.name}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.location}>{result.location.city} . {(result.distance / 1000).toFixed(1)} km away ~ </Text>
                    <Text style={[styles.location, {color: result.is_closed ? "#FF0000": "#0A5C36", fontFamily: "Poppins-SemiBold"}]}>{result.is_closed ? "Closed" : "Open"}</Text>
                </View>
                <View style={styles.engagements}>
                    <Text style={styles.text}>{result.rating}</Text>
                    <View style={{flexDirection: "row", alignItems: "center", position: "relative", marginLeft: 5}}>
                        <Ionicons name="star" style={{color: "#BBBBBB"}} />
                        <Ionicons name="star" style={{color: "#BBBBBB"}} />
                        <Ionicons name="star" style={{color: "#BBBBBB"}} />
                        <Ionicons name="star" style={{color: "#BBBBBB"}} />
                        <Ionicons name="star" style={{color: "#BBBBBB"}} />
                        <View style={{flexDirection: "row", alignItems: "center", flexWrap: "nowrap", overflow: "hidden", position: "absolute", left: 0, width: `${((result.rating / 5) * 100)}%`}}>
                            <Ionicons name="star" style={{color: "#D4AF37"}} />
                            <Ionicons name="star" style={{color: "#D4AF37"}} />
                            <Ionicons name="star" style={{color: "#D4AF37"}} />
                            <Ionicons name="star" style={{color: "#D4AF37"}} />
                            <Ionicons name="star" style={{color: "#D4AF37"}} />
                        </View>
                    </View>
                </View>
                <Text style={styles.text}>{result.review_count} Reviews</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10,
    }, 
    image: {
        width: 100,
        height: 100,
        marginRight: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    name: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 16
    },
    engagements: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
    },
    text: {
        opacity: 0.6,
        fontFamily: "Poppins-Regular",
        fontSize: 15
    },
    location: {
        fontFamily: "Poppins-Regular",
        fontSize: 15
        // marginBottom: 2
    }
});

export default ResultsDetailsTileComponent;