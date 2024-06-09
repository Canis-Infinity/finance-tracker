import { Suspense } from 'react';
import styles from './index.module.css';
import ResetPwdForm from '@/components/ResetPwdForm';
import Setting from '@/components/Setting';
import DataStatus from '@/components/DataStatus';

export default function Settings() {
  return (
    <>
      <hgroup>
        <h1>個人設定</h1>
      </hgroup>
      <div className={styles.wrapper}>
        <Suspense fallback={<DataStatus content="載入中..." type="loading" />}>
          <ResetPwdForm />
          <Setting />
        </Suspense>
      </div>
    </>
  );
}