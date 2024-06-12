import vaulStyles from '@/styles/vaul.module.css';
import { Drawer } from 'vaul';

export default function CustomDrawer({ children, bar }) {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className={vaulStyles.overlay} />
      <Drawer.Content className={vaulStyles.content}>
        {bar && <div className={vaulStyles.bar}></div>}
        {children}
      </Drawer.Content>
    </Drawer.Portal>
  );
}
