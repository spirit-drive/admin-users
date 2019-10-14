import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const AdminUsersScreen = () => {
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const { ok } = res;
        setError(ok ? null : 'Ошибка, повторите попытку позже');
        return res.json();
      })
      .then(console.warn);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Text>AdminUsersScreen</Text>
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default AdminUsersScreen;
