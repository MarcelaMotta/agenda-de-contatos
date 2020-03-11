import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const Line = ({label = "", content = ""}) => { //se eu nao receber um label ou content, eles vao ser um texto vazio
    return(
    <View style={styles.line}>
        <Text style = {[styles.cell, styles.label, label.length > 8 ? styles.longLabel : null]}>{label}</Text>
        <Text style = {[styles.cell, styles.content]}>{content}</Text>
    </View>
    );
}

export default Line;

const styles = StyleSheet.create ({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5', 
    },
    cell: {
        fontSize: 15,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold',
        flex: 1.5,

    },
    content: {
        flex: 4,
    },
    longLabel: {
        fontSize: 12,
    },
});