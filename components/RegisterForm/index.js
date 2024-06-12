'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from './index.module.css';
import formStyles from '@/styles/form.module.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { RiInformationFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const [passwordType, setPasswordType] = useState('password');

  const handlePasswordToggle = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const [btnDisabled, setBtnDisabled] = useState(false);

  const formRef = useRef(null);
  const submitToast = useRef(null);

  const handleRegister = (event) => {
    event.preventDefault();
    setBtnDisabled(true);
    submitToast.current = toast.loading('登入中', { ...defaultProps });
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    // axios
    //   .post(`${process.env.baseUrl}/api/finance-tracker/login`, formData)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       toast.update(submitToast.current, {
    //         render: `${res.data.message}！將於三秒後跳轉至首頁！`,
    //         type: 'success',
    //         isLoading: false,
    //         ...defaultProps,
    //       });
    //       Cookies.set('token', JSON.stringify(res.data));
    //       setTimeout(() => {
    //         router.push('/');
    //       }, 3000);
    //     } else {
    //       toast.update(submitToast.current, {
    //         render: res.data.message,
    //         type: 'error',
    //         isLoading: false,
    //         ...defaultProps,
    //       });
    //       return;
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //     toast.update(submitToast.current, {
    //       render: error,
    //       type: 'error',
    //       isLoading: false,
    //       ...defaultProps,
    //     });
    //     return;
    //   });
    setBtnDisabled(false);
  };

  return (
    <form action="#" method="post" className={styles.form} ref={formRef}>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>帳號</div>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="填寫您的帳號"
          size="large"
          flex={true}
        />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle} data-optional="選填">
          信箱
        </div>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="填寫您的信箱"
          size="large"
          flex={true}
        />
      </div>
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
        <div className={formStyles.fieldTitle}>暱稱</div>
        <Input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="填寫您的暱稱"
          size="large"
          flex={true}
        />
      </div>
      <p>
        已經有帳號？請前往
        <Link href="/login" className="link">
          登入
        </Link>
        ！
      </p>
      <div className={formStyles.actions}>
        <Button
          color="primary"
          content={btnDisabled ? '註冊中' : '註冊'}
          size="large"
          width="relaxed"
          onClick={handleRegister}
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
