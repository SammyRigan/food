import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const SearchBar = ({term, onTermChange, onTermSubmit, navigation}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={() => {navigation.state.routeName === 'Search' ? onTermSubmit() : navigation.navigate('Search', {term})}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#ffffff',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
        height: 45,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        // marginTop: 5,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontFamily: "Poppins-Regular"
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default withNavigation(SearchBar);