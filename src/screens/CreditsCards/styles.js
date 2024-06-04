import { StyleSheet } from "react-native"
import { colors } from "../../theme/theme"

export const defineStyles = () => {
    return StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: colors.white,
            paddingVertical: '13%',
            paddingHorizontal: 20
        },
        containerList: {
            marginTop:'10%',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.grey,
        },
        containerButton: {
            position: 'relative',
            top:10,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor: colors.yellow,
            width: '100%',
            height: 50
        },
        text: {
           color:colors.blueHeader,
           fontSize: 15,
           fontWeight: 'bold'
        },
        textEmpty: {
            color:colors.black,
           fontSize: 15,
           fontWeight: 'bold',
           textAlign:'center',
           paddingVertical: 20
        }
    })
}