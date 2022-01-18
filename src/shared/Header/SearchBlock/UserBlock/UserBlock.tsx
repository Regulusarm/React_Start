import React from 'react';
import { Break } from '../../../Break';
import { Text, EColors } from '../../../Text/Text'
import { IconAnon } from '../../../Icons/Icon/IconAnon';
import styles from './userblock.scss';

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, userName, loading }: IUserBlockProps) {
  return (
   <a 
   href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=https://localhost:3000/auth&duration=permanent&scope=read submit identity`}
   className={styles.userBox}
   >
    <div className={styles.avatarBox}>
      {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
        : <IconAnon />      
      }
    </div>

    <div className={styles.username}>
      <Break size={12}/>
      {loading ? (
      <Text size={20} color={userName ? EColors.black : EColors.gray99}>Загрузка...</Text>
      ) : (
      <Text size={20} color={userName ? EColors.black : EColors.gray99}>{userName || 'Аноним'}</Text>
      )}
    </div>
    
    </a>
  );
}
