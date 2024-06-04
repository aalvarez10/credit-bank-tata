import { StyleSheet } from "react-native"
import { colors } from "../../theme/theme"

export const defineStyles = () => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical:8,
            borderBottomWidth:1,
            borderColor: colors.grey,
        },
        primaryText: {
            fontWeight: 'bold',
            fontSize: 15,
            marginBottom: 4,
            color: colors.black
        },
        secondaryText: {
            fontSize: 15,
        }
    })
}