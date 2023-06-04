import { useContext } from 'react';
import { UIContext } from '@/context/ui';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from '@mui/material';
import {
  InboxOutlined,
  MailOutline,
  HighlightOffOutlined,
} from '@mui/icons-material';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer
      anchor='left'
      open={sidemenuOpen}
      onClose={() => console.log('cerrando')}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }} display='flex' justifyContent='space-between'>
          <Typography variant='h4'>Menú</Typography>

          <IconButton size='large' edge='end' onClick={closeSideMenu}>
            <HighlightOffOutlined />
          </IconButton>
        </Box>

        <List>
          {menuItems.map((text, index) => (
            <ListItemButton key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
