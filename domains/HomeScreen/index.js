import React, { useState } from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import getTasks from '../../services/tasky';
import { retrieveSignOutFunction } from '../../services/parse/auth';

import { deleteData } from '../../modules/async-storage';
import theme from '../../modules/theme';

const HomeScreen = (props) => {
  const [tasks, setTasks] = useState(null);
  const { navigation } = props;

  const showTasks = async () => {
    await getTasks().then((result) => {
      setTasks(result);
    });
  };
  const logOut = () => {
    retrieveSignOutFunction().then(() => {
      deleteData('credentials');
      deleteData('pincode');
      navigation.navigate('Sign In');
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
      <Button onPress={logOut} mode="contained">
        <Text style={styles.text}>Log Out</Text>
      </Button>
      <View style={styles.row}>
        <Text style={styles.text}>My Pinned Forms</Text>
      </View>
    </ScrollView>
  );
};
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default HomeScreen;
