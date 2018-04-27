import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headermain: {
        flex: 0,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    btnContainer: {
        width: 100,
        height: 100
    },
    subhead: {
        marginTop: 10,
        flex: 0,
        flexDirection: 'row'
    },
    header: {
        backgroundColor: '#9575cd',
        width: 400,
        height: 100
    },
    textBox: {
        height: 40,
        backgroundColor: '#fff',
        width: 250,
        borderColor: 'gray',
        borderWidth: 1
    },
    btnAdd: {
        color: '#311b92',
        width: 100,
        height: 100
    },
    activeTaskItems: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 30,
        width: 370,
        color: '#bf360c',
        backgroundColor: '#ce93d8',
        textDecorationLine: 'line-through'
    },
    evenTaskItems : {
        backgroundColor: '#ce93d8'
    },
    oddTaskItems : {
        backgroundColor:'#e1bee7'
    }
});