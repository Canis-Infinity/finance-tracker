'use client';
import { useState, useRef } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Select from '@/components/Select';
import RadioInput from '@/components/RadioInput';
import styles from './index.module.css';
import formStyles from '@/styles/form.module.css';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes';
import { RiExpandUpDownFill } from 'react-icons/ri';
import { getCustomeTypeData } from '@/utils/getTypeData';
import { defaultProps } from '@/utils/getToastProps';

const RadioWrapper = ({ options, name }) => {
  return (
    <div className={styles.radioWrapper}>
      {options.map((option) => {
        const content = (
          <>
            {option.icon}
            {option.content}
          </>
        );
        return (
          <RadioInput
            key={option.type}
            type={option.type}
            name={name}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default function EditRecordForm({ data, onOpenChange }) {
  const { theme } = useTheme();

  const [btnDisabled, setBtnDisabled] = useState(false);

  const formRef = useRef(null);
  const submitToast = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBtnDisabled(true);
    submitToast.current = toast.loading('登入中', { ...defaultProps, theme });
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    console.log('data', data);
    // onOpenChange(false);
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

  const handleDelete = () => {
    setBtnDisabled(true);
    submitToast.current = toast.loading('登入中', { ...defaultProps, theme });
    console.log('delete');
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
    <form
      action="#"
      method="post"
      className={styles.form}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>日期</div>
        <Input
          type="date"
          name="date"
          id="date"
          defaultValue={dayjs().format('YYYY-MM-DD')}
          size="large"
          flex={true}
          color="third"
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
          color="third"
        />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>類型</div>
        <Select
          name="category"
          id="category"
          options={[
            { value: 'income', label: '收入' },
            { value: 'expense', label: '支出' },
          ]}
          right={<RiExpandUpDownFill />}
          flex={true}
        />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle}>類別</div>
        <RadioWrapper
          name="type"
          options={getCustomeTypeData(['type', 'content', 'icon'])}
        />
      </div>
      <div className={formStyles.field}>
        <div className={formStyles.fieldTitle} data-optional="選填">
          備註
        </div>
        <Input
          type="text"
          name="comment"
          id="comment"
          placeholder="請輸入備註"
          size="large"
          flex={true}
          color="third"
        />
      </div>
      <div className={formStyles.actions}>
        <Button
          color="primary"
          content={btnDisabled ? '更新中' : '更新'}
          size="large"
          width="relaxed"
          onClick={handleSubmit}
          disabled={btnDisabled}
          flex={true}
        />
        <Button
          color="warning"
          content={btnDisabled ? '刪除中' : '刪除'}
          size="large"
          width="relaxed"
          onClick={handleDelete}
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
