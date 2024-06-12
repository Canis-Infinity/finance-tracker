'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import styles from './index.module.css';
import vaulStyles from '@/styles/vaul.module.css';
import { navItems } from '@/utils/getNavItems';
import { RiAddLargeLine } from 'react-icons/ri';
import { Drawer } from 'vaul';
import CustomDrawer from '@/components/CustomDrawer';
import RecordForm from '@/components/RecordForm';

export default function BtnNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer.Root>
      <div className={styles.wrapper} data-mobile>
        <nav className={styles.nav}>
          <ul>
            {navItems.slice(0, 2).map((item) => (
              <li
                key={item.url}
                className={clsx({ [styles.active]: pathname === item.url })}
              >
                <Link href={item.url}>
                  {pathname === item.url ? item.icon.active : item.icon.normal}
                  {item.title}
                </Link>
              </li>
            ))}
            <Drawer.Trigger className={vaulStyles.btn}>
              <RiAddLargeLine />
            </Drawer.Trigger>
            {navItems.slice(2, navItems.length).map((item) => (
              <li
                key={item.url}
                className={clsx({ [styles.active]: pathname === item.url })}
              >
                <Link href={item.url}>
                  {pathname === item.url ? item.icon.active : item.icon.normal}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <CustomDrawer bar={true}>
        <h2 className={vaulStyles.title}>新增記錄</h2>
        <RecordForm />
      </CustomDrawer>
    </Drawer.Root>
  );
}
