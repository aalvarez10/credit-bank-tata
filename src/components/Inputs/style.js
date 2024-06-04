import { StyleSheet } from "react-native"
import { colors } from "../../theme/theme"


export const defineStyles = ( ) => {
    return StyleSheet.create({
        input: {
            paddingVertical:10,
            paddingHorizontal:10,
            backgroundColor:colors.white,
            borderWidth:1,
            borderRadius:4,
            borderColor: colors.grey,
            borderStyle: 'solid',
            textAlign: 'left'
        },
        inputError:{
            borderColor: colors.red,
        },
        labelUp:{
            fontWeight: 'bold',
            marginVertical: 10,
            color: colors.black
        },
        labelDown:{
            fontWeight: 'bold',
            marginVertical: 10,
            color: colors.red
        }
    })
    
}