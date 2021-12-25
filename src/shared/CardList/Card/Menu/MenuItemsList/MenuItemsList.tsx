import React from 'react';
import { BlockIcon } from '../../../../Icons/BlockIcon';
import styles from './menuitemslist.scss';
import { WarningIcon } from '../../../../Icons/WarningIcon'
import { Text, EColors } from '../../../../Text/Text';
import { Icon, EIcons } from '../../../../Icons/Icon';


interface IMenuItemsListProps {
  postID : string;
}

export function MenuItemsList({ postID }: IMenuItemsListProps ) {
  return (
    <ul className={styles.menuItemsLink}>
      <li onClick={() => console.log(postID)} className={styles.menuItem}>
        <BlockIcon />
        <Text size={12} color={EColors.gray99}>Скрыть</Text>
      </li>

      <div className={styles.divider}/>

      <li className={styles.menuItem}>
        <WarningIcon /> 
       <Text size={12} color={EColors.gray99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}