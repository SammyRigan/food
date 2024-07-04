import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";

const HomeCategoriesComponent = ({ categories, isLoading, navigation }) => {
    
    return (
        <View style={{marginBottom: 20}}>
            <Text style={style.title}>Categories</Text>
            {isLoading ? <View style={style.skeletonWrap}>
                <Text style={style.skeletonItem}></Text>
                <Text style={style.skeletonItem}></Text>
                <Text style={style.skeletonItem}></Text>
                <Text style={style.skeletonItem}></Text>
            </View> : <FlatList
                style={{paddingLeft: 5, paddingRight: 15}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={category => category.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={style.category} onPress={() => navigation.navigate('CategoryProducts', {id: item.id, title: item.title})}>
                            <Image style={style.image} source={{uri: item.imageUrl}} />
                            <Text style={style.catText}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                }}
            ></FlatList>}
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 15,
        marginBottom: 5
    },
    category: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginLeft: 10
    },
    image: {
        width: 15,
        height: 15
    },
    catText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 12,
        textTransform: "capitalize",
        marginLeft: 7
    },
    skeletonWrap: {
        flexDirection: "row",
        marginLeft: 15
    },
    skeletonItem: {
        width: 100,
        height: 29,
        backgroundColor: "#DDDDDD",
        marginRight: 10,
        borderRadius: 10
    }
});

export default withNavigation(HomeCategoriesComponent);