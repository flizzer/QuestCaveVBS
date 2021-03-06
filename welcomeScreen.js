/* @flow */

'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Text
  , ScrollView
  , Image
  , StyleSheet
  , TouchableHighlight
  , View
} from 'react-native';

const VBSRegistrationForm = require('./VBSRegistrationForm.js');

class WelcomeScreen extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.onForward = this.onForward.bind(this);
    this.onBack = this.onBack.bind(this);
    // this.title = this.props.title;
  }

  onForward() {
    this.props.navigator.push({
      component: VBSRegistrationForm,
      title: 'VBS Registration Form'
    });
  }

  onBack() {

  }

  render() {
    return (
      <ScrollView
        style={welcomeScreenStyles.container}
      >
          <View style={welcomeScreenStyles.imgContainer}>
            <Image
            source={require('./img/cave-quest-vbs-logo-LoRes-RGB.png')}
            style={welcomeScreenStyles.logo}
            />
        </View>
        <Text style={welcomeScreenStyles.welcomeText}>
          Welcome to the ORUMC Cave Quest Registration App!
        </Text>
        <Text style={welcomeScreenStyles.dateText}>
          June 19-24, 2016 6:15 - 8:45pm, SUNDAY - Friday
        </Text>
        <Text style={welcomeScreenStyles.sectionHeader3}>
          Preschool VBS is for age 3-5 years and Elementary VBS for
          Kindergarten - 5th grade.
        </Text>
        <Text style={welcomeScreenStyles.sectionHeader3}>
          Older youth 6th - 10th grade will participate in VBS for Youth.
        </Text>
        <Text style={welcomeScreenStyles.sectionHeader3}>
          A Nursery (0-2 years) is provided for parent volunteers and
          participants of our adult classes.
        </Text>
        <Text style={welcomeScreenStyles.sectionHeader1}>
          Please complete ONE app submission for EACH child regardless of age.
        </Text>
        <Text style={welcomeScreenStyles.sectionHeader3}>
          By continuing, you understand your child(ren)''s picture(s) may
          be placed on the church website.
        </Text>
        <TouchableHighlight
          style={welcomeScreenStyles.button}
          onPress={this.onForward}
          underlayColor='#B09337'
        >
            <Text style={welcomeScreenStyles.buttonText}>Continue</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

let welcomeScreenStyles = StyleSheet.create({
  button: {
    height: 36,
    backgroundColor: '#5C3B69',
    borderColor: '#5C3B69',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  container: {
    padding: 20,
    backgroundColor: '#C8B8AA'
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  logo: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader1: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  welcomeText: {
    color: '#878B3F',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  dateText: {
    color: '#FEDC5C',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  sectionHeader3: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 10,
    textAlign: 'center'
  },
  horizontalInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexText: {
    flex: 1,
    padding: 2,
    flexWrap: 'nowrap'
  }
});

module.exports = WelcomeScreen;
