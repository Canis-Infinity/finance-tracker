'use client';
import Button from '@/components/Button';
import clsx from 'clsx';
import styles from './index.module.css';
import vaulStyles from '@/styles/vaul.module.css';
import { RiAddLargeLine } from 'react-icons/ri';
import { Drawer } from 'vaul';
import CustomDrawer from '@/components/CustomDrawer';

export default function Home() {
  return (
    <Drawer.Root direction='right'>
      <hgroup>
        <h1>home</h1>
        <Drawer.Trigger className={clsx(vaulStyles.btn, styles.btn)} data-desktop>
          <RiAddLargeLine />新增記錄
        </Drawer.Trigger>
      </hgroup>
      <CustomDrawer>
        {/* content */}111
      </CustomDrawer>
    </Drawer.Root>
  );
}
