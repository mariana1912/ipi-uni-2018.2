import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation'; 

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.welcomecontainer}>
        <Text style={styles.paragraph}>
         Seja Bem vindo a AV1.
        </Text>
         <Text style={styles.welcomeDescription}>
		    Por favor, clique no botão abaixo.
		    </Text>
        </View>
        <Button
          title="Ir para AV1"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
     <View style={styles.container}>
      <View style={styles.welcomecontainer}>
        <Text style={styles.paragraph}>
         Nome: Letícia de Lima Siqueira
        </Text>
         <Text style={styles.paragraph}>
		    Matrícula: 0050012430
		    </Text>
        <Text style={styles.paragraph}>
		   Link GitHub:github.com/leticials1/ipi-uni-2018.2
		    </Text>
        
        </View>
        <Button
          title="Voltar"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#333',
  },
 welcomecontainer: { 
	margin: 20,
	padding: 20,
  backgroundColor: "#FFF",
	borderRadius: 3,
	alignItems: 'center',
  justifyContent: 'center',
  },
  welcomeDescription: {
    color: "#666",
  },
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});
