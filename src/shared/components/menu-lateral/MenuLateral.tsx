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
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppDrawerContext, useAppThemeContext } from '../../contexts';
interface Props {
  children: React.ReactNode;
}
interface IListItemLinkProps {
  icon: string;
  label: string;
  to: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  icon,
  label,
  to,
  onClick,
}) => {
  const navigate = useNavigate();
  const resolvePath = useResolvedPath(to);
  const macth = useMatch({ path: resolvePath.pathname, end: false });
  const handleClick = () => {
    navigate(to);
    onClick?.();
  };
  return (
    <ListItemButton selected={!!macth} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toogleDrawerOpen, drawerOptions } =
    useAppDrawerContext();
  const { toogleTheme } = useAppThemeContext();
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
            {drawerOptions.map((drawerOption) => (
              <ListItemLink
                key={drawerOption.path}
                icon={drawerOption.icon}
                label={drawerOption.label}
                to={drawerOption.path}
                onClick={smDown ? toogleDrawerOpen : undefined}
              />
            ))}
          </List>
        </Box>
        <Box>
          <List component={'nav'}>
            <ListItemButton onClick={toogleTheme}>
              <ListItemIcon>
                <Icon>dark_mode</Icon>
              </ListItemIcon>
              <ListItemText primary={'Toogle Theme'} />
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
