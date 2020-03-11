import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PeopleListItem = props => {
    const {people, navigateToPeopleDetail} = props;
    const {title, first, last} = people.name;
    return (
        <TouchableOpacity onPress={() => {
            navigateToPeopleDetail({people});
            }
        }>
            <View style={styles.line} >
                <Image style={styles.avatar} source={{uri:people.picture.thumbnail}}></Image>
                <Text style={styles.lineText}>{first + ' ' + last}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PeopleListItem;

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        borderRadius:25,
        flex: 1,
        marginLeft: 15,
    }
})