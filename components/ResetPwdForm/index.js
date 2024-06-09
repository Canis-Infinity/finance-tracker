'use client';
import { useState, useRef } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from './index.module.css';
import formStyles from '@/styles/form.module.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export default function ResetPwdForm() {
  const [passwordType, setPasswordType] = useState('password');

  const handlePasswordToggle = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const [rePasswordType, setRePasswordType] = useState('password');

  const handleRePasswordToggle = () => {
    setRePasswordType(rePasswordType === 'password' ? 'text' : 'password');
  };

  const [btnDisabled, setBtnDisabled] = useState(false);

  const formRef = useRef(null);
  const submitToast = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    setBtnDisabled(true);
    submitToast.current = toast.loading('登入中', { ...defaultProps });
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    axios
      .post(`${process.env.baseUrl}/api/finance-tracker/login`, formData)
      .then((res) => {
        if (res.status === 200) {
          toast.update(submitToast.current, {
            render: `${res.data.message}！將於三秒後跳轉至首頁！`,
            type: 'success',
            isLoading: false,
            ...defaultProps,
          });
          Cookies.set('token', JSON.stringify(res.data));
          setTimeout(() => {
            router.push('/');
          }, 3000);
        } else {
          toast.update(submitToast.current, {
            render: res.data.message,
            type: 'error',
            isLoading: false,
            ...defaultProps,
          });
          return;
        }
      })
      .catch((error) => {
        console.log('error', error);
        toast.update(submitToast.current, {
          render: error,
          type: 'error',
          isLoading: false,
          ...defaultProps,
        });
        return;
      });
    setBtnDisabled(false);
  };

  return (
    <form action="#" method="post" className={styles.form} ref={formRef}>
      <h2>密碼變更</h2>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>密碼</div>
        <Input
          type={passwordType}
          name="password"
          id="password"
          placeholder="輸入您的密碼"
          size="large"
          flex={true}
          right={passwordType === 'password' ? <IoMdEye /> : <IoMdEyeOff />}
          passWordToggle={handlePasswordToggle}
        />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>確認密碼</div>
        <Input
          type={rePasswordType}
          name="rePassword"
          id="rePassword"
          placeholder="再次輸入您的密碼"
          size="large"
          flex={true}
          right={rePasswordType === 'password' ? <IoMdEye /> : <IoMdEyeOff />}
          passWordToggle={handleRePasswordToggle}
        />
      </div>
      <div className={formStyles.actions}>
        <Button
          color="primary"
          content={btnDisabled ? '變更中' : '變更'}
          size="large"
          width="relaxed"
          onClick={handleLogin}
          disabled={btnDisabled}
          flex={true}
        />
        <Button
          color="secondary2"
          content="重設"
          type="reset"
          size="large"
          width="relaxed"
          flex={true}
        />
      </div>
    </form>
  );
}
