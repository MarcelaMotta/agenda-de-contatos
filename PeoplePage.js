import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
    };
  }

  componentDidMount(){
    this.setState({loading: true});
    setTimeout(() => {
      axios
      .get('https://randomuser.me/api/?nat=br&results=150')
      .then(response => {
        const {results}=response.data;
        this.setState({
          peoples: results,
          loading: false,
        });
      })
    }, 1500)
    
  }

  render() {
    return (
      <View style={styles.container}>
        { /*this.renderLoading()*/}
        {
          this.state.loading 
            ? <ActivityIndicator size='large' color = '#8a6360' />
            :  <PeopleList 
            peoples={this.state.peoples}
            onPressItem={pageParams=> {
              this.props.navigation.navigate('PeopleDetail', pageParams);
            }}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
  }
});
