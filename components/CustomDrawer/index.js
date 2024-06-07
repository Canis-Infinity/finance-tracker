import vaulStyles from '@/styles/vaul.module.css';
import { Drawer } from 'vaul';
import { RxDividerHorizontal } from 'react-icons/rx';

export default function CustomDrawer({ children, bar }) {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className={vaulStyles.overlay} />
      <Drawer.Content className={vaulStyles.content}>
        {bar && <div className={vaulStyles.bar}></div>}
        {children}
        <div style={{ minHeight: '200vh' }}></div>
      </Drawer.Content>
    </Drawer.Portal>
  );
}
