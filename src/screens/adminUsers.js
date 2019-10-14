import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import miniSearch from '../utils/miniSearch';
import Loading from '../components/Loading';
import TableUsers from '../components/TableUsers';
import { actions } from '../store/users';

const AdminUsersScreen = ({ users, setUsers }) => {
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(!users.length);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const { ok } = res;
        setError(ok ? null : 'Ошибка, повторите попытку позже');
        setLoading(false);
        return res.json();
      })
      .then(res => {
        if (error === null) {
          setUsers(res);
        }
      });
  }, []);

  useEffect(() => {
    setSearchResult(miniSearch(users, searchValue, ['name', 'username']));
  }, [searchValue]);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.root}>
      <SafeAreaView>
        <SearchBar
          containerStyle={styles.search}
          inputContainerStyle={styles.searchContainer}
          lightTheme
          value={searchValue}
          onChangeText={setSearchValue}
        />
        {error && <Text>{error}</Text>}
        <TableUsers data={searchValue ? searchResult : users} />
      </SafeAreaView>
    </View>
  );
};

AdminUsersScreen.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
};

AdminUsersScreen.navigationOptions = {
  header: null,
};

const enhance = connect(
  state => ({ users: state.users }),
  dispatch => ({ setUsers: users => dispatch(actions.setUsers(users)) })
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#e4ecf5',
  },
  search: {
    backgroundColor: '#fff',
  },
});

export default enhance(AdminUsersScreen);
