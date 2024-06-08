'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import styles from './index.module.css';
import { RiMoneyDollarCircleFill, RiSunLine, RiMoonLine, RiTerminalFill } from 'react-icons/ri';
import { CgLogOut } from 'react-icons/cg';
import { useTheme } from 'next-themes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { navItems } from '@/utils/getNavItems';

export default function TopNav() {
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
      <div className={styles.logo}>
        <RiMoneyDollarCircleFill />記帳 App
      </div>
      <nav className={styles.nav}>
        <ul data-desktop>
          {
            navItems.slice(0, 3).map((item) => (
              <li key={item.url} className={clsx({[styles.active]: pathname === item.url})}>
                <Link href={item.url}>
                  {pathname === item.url ? item.icon.active : item.icon.normal}
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
        <Button
          isIconType={true}
          onClick={handleThemeToggle}
          icon={mounted ? theme === 'dark' ? <RiSunLine /> : <RiMoonLine /> : <RiTerminalFill />}
          desktop={true}
          tippy={{
            content: `點擊切換為${theme === 'dark' ? '淺色' : '深色'}主題`,
            placement: 'bottom',
          }}
        />
        <Button
          isIconType={true}
          onClick={handleThemeToggle}
          icon={mounted ? theme === 'dark' ? <RiSunLine /> : <RiMoonLine /> : <RiTerminalFill />}
          mobile={true}
        />
        <Button
          isIconType={true}
          icon={<CgLogOut />}
          onClick={handleLogout}
          desktop={true}
          tippy={{
            content: '點擊登出',
            placement: 'bottom',
          }}
        />
        <Tippy
          content={`點擊進入${navItems[3].title}`}
          placement={'bottom'}
        >
          <Link href={navItems[3].url} className={clsx(styles.avatar, {[styles.active]: pathname === navItems[3].url})} data-desktop>
            <Image src={'/avatar/avatar-1.png'} width={35} height={35} alt='avatar' />
          </Link>
        </Tippy>
        <Link href={navItems[3].url} className={clsx(styles.avatar, {[styles.active]: pathname === navItems[3].url})} data-mobile>
          <Image src={'/avatar/avatar-1.png'} width={35} height={35} alt='avatar' />
        </Link>
      </nav>
    </div>
  )
}