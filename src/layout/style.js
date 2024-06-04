import { StyleSheet } from "react-native"
import {Dimensions} from 'react-native';
import { colors } from "../theme/theme";

const windowWidth = Dimensions.get('window').width;
export const defineStyles = () => {
    return StyleSheet.create({
        headerContainer: {
            width: windowWidth-40,
            flexDirection:'row',
            justifyContent: 'center',
            alignItems: "center",
        },
        text: {
            color:colors.blueHeader,
            fontSize: 17,
            fontWeight: 'bold'
        }
    })
}