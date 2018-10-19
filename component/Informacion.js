import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, ScrollView } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SectionList
          sections={[
            {title: 'Información básica', data: ['Universidad de la Costa', 'Ingeniería de sistemas', 'Semestre #8', '19 años', 'Masculino']},
            {title: 'Áreas de conocimiento', data: ['Matemáticas discretas', 'Física cuántica', 'Modelos de ingeniería']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		height: 260,
	},
    sectionHeader: {
	    paddingTop: 5,
	    paddingLeft: 10,
	    paddingRight: 10,
	    paddingBottom: 5,
	    fontSize: 15,
	    textAlign: 'center', 
	    backgroundColor: '#0b2333',
	    color: '#fff',
	  },
	  item: {
	    padding: 10,
	    fontSize: 13,
	    height: 40,
	  },
})


