import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';

const RenderItem = ({ item }) => (
  <View style={styles.row}>
    <Text style={[styles.cell, styles.name]}>{item.name}</Text>
    <Text style={[styles.cell, styles.username]}>{item.username}</Text>
    <Text style={[styles.cell, styles.email]}>{item.email}</Text>
    <View style={[styles.cell, styles.address]}>
      <Text>{`Street: ${item.address.street}`}</Text>
      <Text>{`Suite: ${item.address.suite}`}</Text>
      <Text>{`City: ${item.address.city}`}</Text>
      <Text>{`Zipcode: ${item.address.zipcode}`}</Text>
      <Text>{`Coords: ${item.address.geo.lat} ${item.address.geo.lng}`}</Text>
    </View>
    <Text style={[styles.cell, styles.phone]}>{item.phone}</Text>
    <Text style={[styles.cell, styles.website]}>{item.website}</Text>
    <View style={[styles.cell, styles.company]}>
      <Text>{`Name: ${item.company.name}`}</Text>
      <Text>{`Catch Phrase: ${item.company.catchPhrase}`}</Text>
      <Text>{`BS: ${item.company.bs}`}</Text>
    </View>
  </View>
);

RenderItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }).isRequired,
    }).isRequired,
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string,
      catchPhrase: PropTypes.string,
      bs: PropTypes.string,
    }),
  }).isRequired,
};

const Header = () => (
  <View style={[styles.row, styles.header]}>
    <Text style={[styles.cell, styles.headerText, styles.name]}>Name</Text>
    <Text style={[styles.cell, styles.headerText, styles.username]}>UserName</Text>
    <Text style={[styles.cell, styles.headerText, styles.email]}>Email</Text>
    <Text style={[styles.cell, styles.headerText, styles.address]}>Address</Text>
    <Text style={[styles.cell, styles.headerText, styles.phone]}>Phone</Text>
    <Text style={[styles.cell, styles.headerText, styles.website]}>Website</Text>
    <Text style={[styles.cell, styles.headerText, styles.company]}>Company</Text>
  </View>
);

const TableUsers = ({ style, data }) => (
  <ScrollView horizontal contentContainerStyle={styles.root}>
    <FlatList
      keyExtractor={item => `${item.name} ${item.username} ${item.email}`}
      ListHeaderComponent={Header}
      data={data}
      style={[styles.table, style]}
      renderItem={RenderItem}
    />
  </ScrollView>
);

TableUsers.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.array.isRequired,
};

TableUsers.defaultProps = {
  style: undefined,
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  table: {
    flex: 0,
  },
  header: {
    backgroundColor: '#e4ecf5',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#e9e9e9',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  cell: {
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  name: {
    width: 100,
  },
  username: {
    width: 120,
  },
  email: {
    width: 120,
  },
  address: {
    width: 220,
  },
  phone: {
    width: 170,
  },
  website: {
    width: 170,
  },
  company: {
    width: 220,
  },
});

export default TableUsers;
