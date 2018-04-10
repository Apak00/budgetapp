import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    statusBar: {
        backgroundColor: ((true) ? "#333" : "#999"),
        height: 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        paddingLeft: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 1,
        alignSelf: "stretch",
        marginRight: 12,
        marginLeft: 12,
        marginBottom: 12,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    linky: {
        color: 'blue',
        paddingTop: 30,
    },
    headerStyle: {
        backgroundColor: '#444',
        marginTop: -25,
    },
    hamburgerStick: {
        backgroundColor: "black",
        width: 30,
        height: 4,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 2,
    },
    hamburgerContainer: {
        marginLeft: 5,
        padding: 5,
    },
    dot: {
        backgroundColor: "black",
        width: 5,
        height: 5,
        borderRadius: 3,
        marginTop: 2,
        marginBottom: 2,
    },
    dotContainer: {
        width: 27,
        height: 27,
        alignItems: "center",
        marginRight: 6,
    },
    appMainColor: {backgroundColor: "#05a1d1",},
})