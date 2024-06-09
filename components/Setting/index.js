'use client';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { usePathname, useRouter } from 'next/navigation';
import styles from './index.module.css';
import { CgLogOut } from 'react-icons/cg';
import { useTheme } from 'next-themes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Setting() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  const defaultProps = {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    draggable: true,
    theme: theme,
    // transition: bounce,
  };

  const handleLogout = () => {
    // localStorage.removeItem('token');
    Cookies.remove('token');
    toast.success('登出成功！將於三秒後跳轉至登入頁！', {...defaultProps});
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      <h2>其它</h2>
      <Button
        color="secondary"
        icon={<CgLogOut />}
        content="登出"
        size="large"
        width="relaxed"
        onClick={handleLogout}
        flex={true}
      />
    </div>
  );
}
