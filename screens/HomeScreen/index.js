import React from 'react';
import {
  Platform, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import retrieveHelloFunction from '../../services/parse/crud';
import {
  retrieveSignUpFunction, retrieveSignInFunction, retrieveSignOutFunction,
  retrieveForgotPasswordFunction, retrieveCurrentUserFunction, retrieveDeleteUserFunction
} from '../../services/parse/auth';
import retrievePuenteAutofillData from '../../services/aws';
import AutoFill from '../../components/AutoFill';
import { getTasks } from '../../services/tasky';

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
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.row}>
          <View style={styles.clickText}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.text}>HomeScreen</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.clickText}>
            <TouchableOpacity onPress={handleSignUpPress} style={styles.helpLink}>
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.clickText}>
            <TouchableOpacity onPress={handleSignInPress} style={styles.helpLink}>
              <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.clickText}>
            <TouchableOpacity onPress={handleSignOutPress} style={styles.helpLink}>
              <Text style={styles.text}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.clickText}>
            <TouchableOpacity onPress={handleForgotPasswordPress} style={styles.helpLink}>
              <Text style={styles.text}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.clickText}>
            <TouchableOpacity onPress={handleCurrentUserPress} style={styles.helpLink}>
              <Text style={styles.text}>Current User</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.clickText}>
            <TouchableOpacity onPress={handleDeleteUserPress} style={styles.helpLink}>
              <Text style={styles.text}>Delete User</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.clickText}>
            <TouchableOpacity onPress={this.showTasks} style={styles.helpLink}>
              <Text style={styles.text}>Tasks</Text>
              {this.state.tasks != null
                && this.state.tasks.map((task, i) => (
                  <View key={i}>
                    <Text>{task.name}</Text>
                  </View>
                ))}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.clickText}>
          <TouchableOpacity onPress={handleAutoFillClick} style={styles.helpLink}>
            <Text style={styles.text}>Autofill GET</Text>
          </TouchableOpacity>
        </View>
        <AutoFill parameter="City" />
        <AutoFill parameter="Province" />
        <AutoFill parameter="Communities" />
      </ScrollView>
    );
  }
}

function handleHelpPress() {
  retrieveHelloFunction();
}

function handleSignUpPress() {
  const params = {
    firstname: 'native-test',
    lastname: 'tester',
    // username: 'sprint-test-2',
    password: '12345',
    email: 'sprinttest-20@gmail.com',
    organization: 'sprint-testing'
  };
  retrieveSignUpFunction(params);
}

function handleSignInPress() {
  const username = 'sprinttest-2@gmail.com';
  const password = '12345';

  retrieveSignInFunction(username, password);
}

function handleSignOutPress() {
  retrieveSignOutFunction();
}

function handleForgotPasswordPress() {
  const credentials = {
    email: 'jamccomb92@gmail.com'
  };
  retrieveForgotPasswordFunction(credentials);
}

function handleCurrentUserPress() {
  retrieveCurrentUserFunction();
}

function handleDeleteUserPress() {
  // needs to be adjuste ot pull in a user id that signs up
  const credentials = {
    userId: 'tBtyt5JfD6'
  };
  retrieveDeleteUserFunction(credentials);
}

function handleAutoFillClick() {
  retrievePuenteAutofillData('City');
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    flex: 1,
    color: '#000',
    padding: 0,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
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
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 0,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  clickText: {
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    width: 150,
    backgroundColor: 'lightgreen'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
