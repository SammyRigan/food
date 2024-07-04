import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, FlatList, TouchableOpacity, View, Text, Dimensions } from "react-native";
import PageHeadComponent from "../components/PageHead";
import ResultsDetailsTileComponent from "../components/ResultDetailsTileComponent";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [searchApi, results, isLoadingResults, errMessage] = useResults();
    const skeletons = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        const termFromRoute = navigation.getParam('term');
        setTerm(termFromRoute);
        searchApi({
            limit: 20,
            term: termFromRoute,
            location: 'san jose'
        })
    }, []);
    
    const width = Dimensions.get('window').width;

    return (
        <View horizontal={false} style={{flex: 1}}>
            <View style={styles.searchWrap}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons style={styles.icon} name="arrow-back"></Ionicons>
                </TouchableOpacity>
                <View style={{width: width - 35}}>
                    <SearchBar
                        term={term} 
                        onTermChange={setTerm}
                        onTermSubmit={() => searchApi({
                            limit: 50,
                            term: term,
                            location: 'san jose'
                        })}
                    />
                </View>
            </View>
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
    searchWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
        marginTop: 15
    },
    icon: {
        fontSize: 20
    },
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

export default SearchScreen;