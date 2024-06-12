'use client';
import { useState, useRef } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import RadioInput from '@/components/RadioInput';
import styles from './index.module.css';
import formStyles from '@/styles/form.module.css';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCustomeTypeData } from '@/utils/getTypeData';

const RadioWrapper = ({ options, name }) => {
  return (
    <div className={styles.radioWrapper}>
      {options.map((option) => {
        const content = <>
          {option.icon}
          {option.content}
        </>;
        return <RadioInput key={option.type} type={option.type} name={name} content={content} />
      })}
    </div>
  );
};

export default function RecordForm() {
  const [btnDisabled, setBtnDisabled] = useState(false);

  const submitToast = useRef(null);

  const handleSubmit = (event) => {
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
    <form action="#" method="post" className={styles.form}>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>日期</div>
        <Input
          type="date"
          name="date"
          id="date"
          defaultValue={dayjs().format('YYYY-MM-DD')}
          size="large"
          flex={true}
        />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>金額</div>
        <Input
          type="number"
          name="price"
          id="price"
          placeholder="請輸入金額"
          size="large"
          flex={true}
          left="NT$"
        />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>類型</div>
        <Input
          type="text"
          name="comment"
          id="comment"
          placeholder="請輸入備註"
          size="large"
          flex={true}
        />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>類別</div>
        <RadioWrapper name="item" options={getCustomeTypeData(['type', 'content', 'icon'])} />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle} data-optional="選填">備註</div>
        <Input
          type="text"
          name="comment"
          id="comment"
          placeholder="請輸入備註"
          size="large"
          flex={true}
        />
      </div>
      <div className={formStyles.actions}>
        <Button
          color="primary"
          content={btnDisabled ? '新增中' : '新增'}
          size="large"
          width="relaxed"
          onClick={handleSubmit}
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