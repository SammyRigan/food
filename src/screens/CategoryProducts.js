import React, { useEffect } from "react";
import { ScrollView, StyleSheet, FlatList, TouchableOpacity, View, Text, Dimensions } from "react-native";
import PageHeadComponent from "../components/PageHead";
import ResultsDetailsTileComponent from "../components/ResultDetailsTileComponent";
import useResults from "../hooks/useResults";

const CategoryProducts = ({ navigation }) => {
    const title = navigation.getParam('title');

    const [searchApi, results, isLoadingResults, errMessage] = useResults();
    const skeletons = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        searchApi({
            limit: 20,
            categories: title,
            location: 'san jose'
        })
    }, []);
    
    const width = Dimensions.get('window').width;

    return (
        <View horizontal={false} style={{flex: 1}}>
            <PageHeadComponent title={title} />
            <ScrollView
                horizontal={true}
                contentContainerStyle={{width: '100%', height: '100%'}}>
                {isLoadingResults ? <FlatList 
                    style={{marginTop: 10}}
                    showsHorizontalScrollIndicator={false}
                    data={skeletons}
                    keyExtractor={skeleton => skeleton}
                    renderItem={() => {
                        return (
                            <View style={styles.skeletonItem}>
                                <View style={styles.skeletonImage}></View>
                                <View style={{width: width - 145}}>
                                    <Text style={styles.skeletonText}></Text>
                                    <Text style={[styles.skeletonText, {width: "80%"}]}></Text>
                                    <Text style={[styles.skeletonText, {width: "50%"}]}></Text>
                                </View>
                            </View>
                        )
                    }}
                /> : <FlatList
                    style={{marginTop: 10}}
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={result => result.id}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                                <ResultsDetailsTileComponent result={item} />
                            </TouchableOpacity>
                        )
                    }}
                />}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    skeletonItem: {
        flexDirection: "row",
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    skeletonImage: {
        width: 100,
        height: 100,
        marginRight: 15,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: "#DDDDDD"
    },
    skeletonText: {
        backgroundColor: "#DDDDDD",
        height: 25,
        width: "100%",
        marginBottom: 5,
        borderRadius: 5
    }
});

export default CategoryProducts;