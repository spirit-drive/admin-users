import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SearchBar, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import miniSearch from '../utils/miniSearch';
import Loading from '../components/Loading';
import TableUsers from '../components/TableUsers';
import { actions } from '../store/users';
import withDrawer from '../hocs/withDrawer';

const AdminUsersScreen = ({ users, setUsers, openDrawer }) => {
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
        <View style={styles.top}>
          <View style={styles.openMenu}>
            <BaseButton onPress={openDrawer}>
              <Icon name="menu" color="#86939d" />
            </BaseButton>
          </View>
          <SearchBar
            containerStyle={styles.search}
            inputContainerStyle={styles.searchContainer}
            lightTheme
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </View>
        {error && <Text>{error}</Text>}
        <TableUsers data={searchValue ? searchResult : users} />
      </SafeAreaView>
    </View>
  );
};

AdminUsersScreen.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
  openDrawer: PropTypes.func,
};

AdminUsersScreen.defaultProps = {
  openDrawer: () => {},
};

const enhance = connect(
  state => ({ users: state.users }),
  dispatch => ({ setUsers: users => dispatch(actions.setUsers(users)) })
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  top: {
    flexDirection: 'row',
  },
  openMenu: {
    padding: 5,
    paddingLeft: 12,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e1e1e1',
  },
  searchContainer: {
    backgroundColor: '#e4ecf5',
  },
  search: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const EnhancedAdminUsersScreen = withDrawer(enhance(AdminUsersScreen));

EnhancedAdminUsersScreen.navigationOptions = {
  headerTitle: 'Admin Users',
  headerStyle: {
    borderBottomWidth: 0,
  },
};

export default EnhancedAdminUsersScreen;
