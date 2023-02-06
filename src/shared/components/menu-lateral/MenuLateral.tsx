import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { useAppDrawerContext } from '../../contexts';
interface Props {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toogleDrawerOpen } = useAppDrawerContext();
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toogleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box
            width={'100%'}
            height={theme.spacing(20)}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://avatars.githubusercontent.com/u/99267038?s=96&v=4"
            />
          </Box>
        </Box>
        <Divider />
        <Box flex={1}>
          <List component={'nav'}>
            <ListItemButton>
              <ListItemIcon>
                <Icon>home</Icon>
              </ListItemIcon>
              <ListItemText primary={'Página Inicial'} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box height={'100vh'} marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
