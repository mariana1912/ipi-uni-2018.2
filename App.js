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
         Olá, bem vindo a AV1.
        </Text>
         <Text style={styles.welcomeDescription}>
		    Por favor, clique no botão abaixo.
		    </Text>
        </View>
        <Button
          title="Ir para AV1"
          onPress={() => {
            
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
   
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
     <View style={styles.container}>
      <View style={styles.welcomecontainer}>
        <Text style={styles.paragraph}>
         Nome: Mariana Oliveira
        </Text>
         <Text style={styles.paragraph}>
		    Matrícula: 0050013985
		    </Text>
        <Text style={styles.paragraph}>
		   Link GitHub:github.com/mariana1912/ipi-uni-2018.2
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

