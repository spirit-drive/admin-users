import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import miniSearch from '../utils/miniSearch';
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
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar value={searchValue} onChangeText={setSearchValue} />
      <ScrollView>
        {error && <Text>{error}</Text>}
        <Text>{JSON.stringify(searchValue ? searchResult : users, null, 2)}</Text>
      </ScrollView>
    </View>
  );
};

AdminUsersScreen.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
};

const enhance = connect(
  state => ({ users: state.users }),
  dispatch => ({ setUsers: users => dispatch(actions.setUsers(users)) })
);

export default enhance(AdminUsersScreen);
