import {
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { useAppDrawerContext } from '../contexts';
interface IBaseLayoutPagina {
  children: React.ReactNode;
  title: string;
}

export const BaseLayoutPagina: React.FC<IBaseLayoutPagina> = ({
  children,
  title,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { toogleDrawerOpen } = useAppDrawerContext();
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        height={theme.spacing(12)}
        display={'flex'}
        alignItems={'center'}
        gap={1}
      >
        {smDown ? (
          <IconButton onClick={toogleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        ) : (
          ''
        )}

        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box>Barra de Ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};
