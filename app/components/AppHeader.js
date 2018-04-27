import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity, } from 'react-native';

const taskData = require('../temp/tasklist')

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskText: ''
        }

        this.onTaskClick = this.onTaskClick.bind(this);
        this.onTaskSubmit = this.onTaskSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.resetTasks = this.resetTasks.bind(this);
        this.onCloseIconClick = this.onCloseIconClick.bind(this);
    }

    onCloseIconClick(i) {
        let modifiedTasks = this.state.tasks;
        if (i >= 0) {
            modifiedTasks.splice(i, 1);
            this.setState({
                tasks: modifiedTasks
            })
        }
    }

    resetTasks() {
        this.setState({
            tasks: []
        })
    }
    onTaskSubmit(taskText) {
        let taskData = this.state.tasks;
        let currentIndex = taskData.length;
        if (currentIndex > 0 && taskText) {
            modifiedTask = {
                id: currentIndex + 1,
                text: this.state.taskText,
                completed: false
            }
            taskData.push(modifiedTask);
            this.setState({
                tasks: taskData
            });

        }
        else if (currentIndex == 0 && taskText) {
            modifiedTask = {
                id: currentIndex,
                text: this.state.taskText,
                completed: false
            }
            taskData.push(modifiedTask);
            this.setState({
                tasks: taskData
            });
        }
        this.setState({ taskText: '' });
    }

    onTaskClick(i) {
        let modifiedTasks = this.state.tasks;
        if (i >= 0) {
            modifiedTasks[i].completed = true;
            this.setState({
                tasks: modifiedTasks
            })
        }
    }

    onTextChange(text) {
        this.setState({ taskText: text });
    }
    render() {
        return (
            <View style={styles.headermain}>
                <View style={styles.header}>
                    <Text style={styles.headingTitle}>My ToDoList </Text>
                    <View style={styles.subhead}>
                        <View>
                            <TextInput underlineColorAndroid='transparent' clearTextOnFocus={true} value={this.state.taskText}
                                style={styles.textBox} onChangeText={(value) => this.onTextChange(value)} placeholder="Enter task" />
                        </View>
                        <View style={styles.btnContainer}>
                            <View style={styles.btnAddContainer}>
                                <Button color="#311b92" style={styles.btnAdd}
                                    title="Add Tasks" onPress={() => { this.onTaskSubmit(this.state.taskText) }} />
                            </View>
                            <View style={styles.btnResetContainer}>
                                <Button color="#311b92"
                                    title="Reset" onPress={this.resetTasks} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.taskListContainer}>
                    <TaskList tasks={this.state.tasks} onCloseIconClick={this.onCloseIconClick}
                        onTaskClick={this.onTaskClick} />
                </View>

            </View>
        )
    }
}

const TaskList = (props) => {
    let Tasks = props.tasks;
    if (Tasks.length > 0) {
        return (
            <View>
                {Tasks.map((task, i) => (
                    <View key={i} style={{ flexDirection: 'row' }}>
                        <View key={i+1} style={{ width: 320 }}>
                            <Text key={i+2} onPress={() => { props.onTaskClick(i) }}
                                style={[styles.taskItems, styles.activeTaskItems, getStyleClass(task.completed, i)]}>{task.text} </Text>
                        </View>

                        <TouchableOpacity key = {i+3} onPress={ () => {props.onCloseIconClick(i)}}>
                            <Image key={i+4}  style={{ width: 40, height: 40, marginTop:3 ,alignSelf: 'flex-end' }}
                                source={require('../images/close3.png')} />
                        </TouchableOpacity>
                    </View>

                )
                )}
            </View>
        );
    }
    else {
        return (
            <View style={{ flexDirection: 'row', width: 350 }}>
                <Text style={{ width: 340 }} onPress={() => { props.onTaskClick(-1) }} >Added items to be displayed here


                </Text>

            </View>
        )
    }
};



function getStyleClass(flag, index) {
    var style = {};

    if (index % 2 == 0) {
        style = styles.evenTaskItems;
    }
    else {
        style = styles.oddTaskItems;
    }
    if (flag) {
        return styles.completedItem;
    }
    return style;
}

const styles = StyleSheet.create({
    headingTitle: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center'
    },
    headermain: {
        flex: 0,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    btnContainer: {
        flex: 0,
        width: 100,
        height: 100,
        flexDirection: 'row'
    },
    subhead: {
        marginTop: 20,
        flex: 0,
        flexDirection: 'column'
    },
    header: {
        backgroundColor: '#9575cd',
        width: 400,
        height: 150
    },
    textBox: {
        height: 40,
        color: '#4a148c',
        fontSize: 20,
        backgroundColor: '#fff',
        width: 400,
        borderColor: 'gray',
        borderWidth: 1
    },
    btnAdd: {
        width: 30
    },
    activeTaskItems: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 370,
        fontSize:25,
        fontWeight: 'bold',
        color: '#870000',
        backgroundColor: '#ce93d8'
    },
    evenTaskItems: {
        backgroundColor: '#e1bee7'
    },
    oddTaskItems: {
        backgroundColor: '#f3e5f5'
    },
    completedItem: {
        backgroundColor: '#546e7a',
        textDecorationLine: 'line-through'
    },
    btnResetContainer: {
        marginTop: 10,
        marginLeft: 10,
        width: 100
    },
    btnAddContainer: {
        marginTop: 10,
        width: 100,
        marginRight: 10,
        marginLeft: 10
    },
    btnReset: {
        width: 30
    },
    taskItems: {
        height: 45
    },
    taskListContainer: {
        marginTop: 5,
        width: 400
    }
});