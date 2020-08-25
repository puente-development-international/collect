import React, { useState } from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import getTasks from '../../services/tasky';

const HomeScreen = () => {
  const [tasks, setTasks] = useState(null);

  const showTasks = async () => {
    await getTasks().then((result) => {
      setTasks(result);
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.row}>
        <Button onPress={showTasks} mode="contained">
          <Text style={styles.text}>Tasks</Text>
        </Button>

        {tasks != null
          && tasks.map((task) => (
            <View key={task.task_id}>
              <Text>{task.name}</Text>
            </View>
          ))}
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>My Pinned Forms</Text>
      </View>
    </ScrollView>
  );
};

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

export default HomeScreen;