import React from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
// import retrievePuenteAutofillData from '../../services/aws';
import AutoFill from '../../components/AutoFill';
import getTasks from '../../services/tasky';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: null
    };
  }

  showTasks = async () => {
    await getTasks().then((result) => {
      this.setState({
        tasks: result
      });
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.row}>
          <View>
            <Button onPress={this.showTasks} mode="contained">
              <Text style={styles.text}>Tasks</Text>
            </Button>

            {tasks != null
              && tasks.map((task) => (
                <View key={task.task_id}>
                  <Text>{task.name}</Text>
                </View>
              ))}
          </View>
        </View>

        {/* <AutoFill parameter="City" />
        <AutoFill parameter="Province" />
        <AutoFill parameter="Communities" /> */}
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
