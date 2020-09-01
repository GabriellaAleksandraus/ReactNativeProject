import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return (<View style={styles.listItem}>
    <Text>{props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 7,
        marginTop: 3,
        backgroundColor: '#d3d3d3',
        borderColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem;