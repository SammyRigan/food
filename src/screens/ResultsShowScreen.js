import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking, Dimensions, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from 'react-native-reanimated-carousel';
import yelp from "../api/yelp";
import PageHeadComponent from "../components/PageHead";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    const [result, setResult] = useState(null);
    const getResult = async (id) => {
        const response = await yelp.get(`/businesses/${id}`);
        console.log(response.data);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    const openYelp = () => Linking.canOpenURL(result.url).then(() => {
        Linking.openURL(result.url);
    });

    const width = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PageHeadComponent />
                <View style={{height: 250}}>
                    <Carousel
                        width={width}
                        height={250}
                        mode="parallax"
                        modeConfig={{
                        parallaxScrollingScale: 0.85,
                        parallaxScrollingOffset: 65,
                        }}
                        data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={({item}) => {
                            return (
                                <View><Image style={styles.image} source={{uri: item}} /></View>
                            );
                        }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{result.name}</Text>
                    <View style={styles.engagements}>
                        <Text style={styles.location}>{result.rating} <Ionicons name="star" style={{color: "#D4AF37"}} /></Text>
                        <Text style={styles.text}>  |  {result.review_count} Reviews</Text>
                    </View>
                    <Text style={{fontFamily: "Poppins-SemiBold"}}>Details</Text>
                    <View style={styles.line}>
                        <Text style={styles.lineHead}>Address</Text>
                        <Text style={[styles.lineItem, {width: Dimensions.get("window").width - 180}]}>{result.location.display_address}</Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.lineHead}>Telephone</Text>
                        <Text style={styles.lineItem}>{result.display_phone}</Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.lineHead}>Delivery</Text>
                        <Text style={styles.lineItem}>{result.transactions.includes('delivery') ? 'Yes' : 'No'}</Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.lineHead}>Pick Up</Text>
                        <Text style={styles.lineItem}>{result.transactions.includes('pickup') ? 'Yes' : 'No'}</Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.lineHead}>Affordability</Text>
                        <Text style={styles.lineItem}>{result.price}</Text>
                    </View>
                </View>
                <View style={{height: 80}}></View>
            </ScrollView>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.floatingButton} onPress={openYelp} ><Text style={styles.buttonText}>View on Yelp</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 250,
        borderRadius: 30
    },
    textContainer: {
        marginHorizontal: 15,
    },
    title: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 25
    },
    engagements: {
        display: "flex",
        flexDirection: 'row',
        marginBottom: 20
    },
    text: {
        opacity: 0.6,
        fontFamily: "Poppins-Regular",
        fontSize: 15
    },
    location: {
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        // opacity: 0.6
    },
    line: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderBottomColor: "#00000010",
        borderBottomWidth: 1
    },
    lineHead: {
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        opacity: 0.6,
        marginRight: 50
    },
    lineItem: {
        fontFamily: "Poppins-Medium",
        fontSize: 15,
        textAlign: "right",
    },
    buttonView: {
        position: "absolute",
        bottom: 15,
        paddingHorizontal: 15
    },
    floatingButton: {
        height: 50,
        flexDirection: "row",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        flexDirection: "row",
        width: "100%",
        borderRadius: 15
    },
    buttonText: {
        color: "#FFFFFF",
        margin: "auto",
        fontFamily: "Poppins-SemiBold"
    }
});

export default ResultsShowScreen;