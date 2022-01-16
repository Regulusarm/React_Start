import React from 'react';
import { Dropdown } from '../../../Dropdown';
import styles from './menu.scss';
import { MenuIcon } from '../../../Icons/MenuIcon';
import { MenuItemsList } from './MenuItemsList';
import { Text, EColors} from '../../../Text/Text';



export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<button className={styles.menuButton}>
        <MenuIcon />
      </button>}>
        <div className={styles.dropDown}>
          <MenuItemsList postID='1' />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.gray66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
   </div>
  );
}
