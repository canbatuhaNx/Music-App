import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        padding:10,
        flexDirection: "row",
    
    },

    image: {
        width:100,
        height:100,
        borderRadius: 50,

    },
    inner_container:{       
        padding:10,
        flex: 1,
        justifyContent: "center",
    },
    info_container:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
    },
    artist: {

    },
    year:{
        marginLeft: 10,
        color: "gray",
        fontWeight: "bold",
        fontSize: 11,
    
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: "red",
        padding: 5,
        borderRadius: 5,

    },

    content_container:{
        flexDirection: "row",
        
    },

    soldout_title:{
        color: "red",
        fontSize: 12,
    },
});