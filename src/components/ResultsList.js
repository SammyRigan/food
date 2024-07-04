import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({title, results, isLoading, navigation}) => {

    return (
        <View style={{marginBottom: 20}}>
            <Text style={styles.title}>{title}</Text>
            {isLoading ? <View style={styles.skeletonWrap}>
                <View style={styles.skeletonItem}>
                    <View style={styles.skeletonImage}></View>
                    <Text style={styles.skeletonText}></Text>
                    <Text style={[styles.skeletonText, {width: "80%"}]}></Text>
                    <Text style={[styles.skeletonText, {width: "50%"}]}></Text>
                </View>
                <View style={styles.skeletonItem}>
                    <View style={styles.skeletonImage}></View>
                    <Text style={styles.skeletonText}></Text>
                    <Text style={styles.skeletonText}></Text>
                    <Text style={styles.skeletonText}></Text>
                </View>
            </View> : <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 15,
        marginBottom: 5
    },
    skeletonWrap: {
        flexDirection: "row",
        marginLeft: 15
    },
    skeletonItem: {
        width: 250,
        marginRight: 15
    },
    skeletonImage: {
        backgroundColor: "#DDDDDD",
        height: 120,
        width: 250,
        borderRadius: 10,
        marginBottom: 10
    },
    skeletonText: {
        height: 20,
        backgroundColor: "#DDDDDD",
        marginBottom: 5,
        borderRadius: 5
    }
});

export default withNavigation(ResultsList);