import React from "react";
import { TextInput, View } from "react-native";
import stlyes from "./SearchBar.style"


const SearchBar = (props) => {


    return(
        <View style={stlyes.container}>
            <TextInput  
            placeholder="Ara.." 
            onChangeText={(props.onSearch)}
            />
        </View>
    );
};


export default SearchBar;