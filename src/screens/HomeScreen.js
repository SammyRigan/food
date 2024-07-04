import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import HomeHeaderComponent from "../components/HomeHeader";
import HomeCategoriesComponent from "../components/HomeCategories";
import useCategories from "../hooks/useCategories";

const HomeScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, isLoadingResults, errMessage] = useResults();
    const [getFireItems, fireitems, isLoading, fireErrMessage] = useCategories();

    const filterResultsByPrice = (price) => {
        return results.filter(res => res.price === price);
    }

    useEffect(() => {
        searchApi({
            limit: 50,
            term: 'c',
            location: 'san jose'
        });
        getFireItems('categories', 10, null);
    }, []);

    return (
        <>
            <HomeHeaderComponent />
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
            />
            {errMessage ? <Text>{errMessage}</Text> : null}
            <ScrollView>
                <HomeCategoriesComponent categories={fireitems} isLoading={isLoading} />
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" isLoading={isLoadingResults} />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" isLoading={isLoadingResults} />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" isLoading={isLoadingResults} />
                <ResultsList results={filterResultsByPrice('$$$$')} title="Elite" isLoading={isLoadingResults} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;