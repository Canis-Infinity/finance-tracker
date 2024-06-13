'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Button from '@/components/Button';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import styles from './index.module.css';
import { navItems } from '@/utils/getNavItems';
import { RiAddLargeLine } from 'react-icons/ri';
import Modal from '@/components/Modal';
import CreateRecordForm from '@/components/CreateRecordForm';

export default function BtnNavigator() {
  const router = useRouter();
  const pathname = usePathname();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    document.querySelector('html').classList.toggle('overflowHidden');
    setModalOpen((prev) => !prev);
  };

  return (
    <>
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
            <Button
              color="primary"
              icon={<RiAddLargeLine />}
              size="large"
              width="relaxed"
              onClick={handleModal}
            />
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
      {modalOpen &&
        createPortal(
          <Modal title="新增記錄" size="medium" close={handleModal}>
            <CreateRecordForm onOpenChange={handleModal} />
          </Modal>,
          document.body
        )}
    </>
  );
}
