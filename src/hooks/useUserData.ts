import * as React from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContaxt';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const token = React.useContext(tokenContext)
  const [data, setData] = React.useState<IUserData>({});
  React.useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}`}
    })
      .then((resp) => {
        const userData = resp.data;
        setData({ name:userData.name, iconImg: userData.icon_img });
      })
      .catch(console.log);
  }, [token])

  return [data]
}