import { StyleSheet } from "react-native";

const cardStyle = StyleSheet.create({
    card: {
        width: '50%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: '#ffe4e1',
        color: '#00000',
        padding: 20,
        borderRadius: 10,
        margin: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      text: {
        width: '100%'
      }
});

export default cardStyle;