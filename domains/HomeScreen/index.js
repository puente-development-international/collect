import React, { useState } from 'react';
import {
  Text, View
} from 'react-native';
import { Card, Button, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import getTasks from '../../services/tasky';
import { retrieveSignOutFunction } from '../../services/parse/auth';

import { deleteData } from '../../modules/async-storage';
import { layout } from '../../modules/theme';

import Header from '../../components/Header';
import ComingSoonSVG from '../../assets/graphics/static/Adventurer.svg';

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
      deleteData('organization')
      navigation.navigate('Sign In');
    });
  };
  return (
    <View style={layout.screenContainer}>
      <Header />
      <ScrollView>
        <View style={layout.screenRow}>
          <Text>My Tasks</Text>
          <Card>
            <Card.Content>
              <ComingSoonSVG width={200} height={200} />
              <Paragraph>Coming Soon</Paragraph>
              <Button onPress={showTasks} mode="contained">
                <Text>Tasks</Text>
              </Button>
              {tasks != null
                && tasks.map((task) => (
                  <View key={task.task_id}>
                    <Text>{task.name}</Text>
                  </View>
                ))}
            </Card.Content>
          </Card>
        </View>
        <View style={layout.screenRow}>
          <Text>My Pinned Forms</Text>
        </View>
        <View style={layout.screenRow}>
          <Text>My Community Board</Text>
          <Card>
            <Card.Content>
              <ComingSoonSVG width={200} height={200} />

              <Paragraph>Coming Soon</Paragraph>
            </Card.Content>
          </Card>
        </View>
        <Button onPress={logOut} mode="contained">
          <Text>Log Out</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
