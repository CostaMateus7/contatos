/* eslint-disable indent */
import {
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';

//Implementar botão em grupo
interface IFerramentasDeDetalheProps {
  textNewButton?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveAndCloseButton?: boolean;

  showNewButtonIsLoading?: boolean;
  showBackButtonIsLoading?: boolean;
  showDeleteButoonIsLoading?: boolean;
  showSaveButtonIsLoading?: boolean;
  showSaveAndCloseButtonIsLoading?: boolean;

  whenClickNew?: () => void;
  whenClickBack?: () => void;
  whenClickDelete?: () => void;
  whenClickSave?: () => void;
  whenClickSaveAndClose?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textNewButton = 'Novo',
  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showSaveAndCloseButton = false,

  showNewButtonIsLoading = false,
  showBackButtonIsLoading = false,
  showDeleteButoonIsLoading = false,
  showSaveButtonIsLoading = false,
  showSaveAndCloseButtonIsLoading = false,

  whenClickNew,
  whenClickBack,
  whenClickDelete,
  whenClickSave,
  whenClickSaveAndClose,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      gap={1}
      height={theme.spacing(5)}
      paddingX={2}
      marginX={1}
      padding={1}
    >
      {showSaveButton && !showSaveButtonIsLoading && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={whenClickSave}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            Salvar
          </Typography>
        </Button>
      )}
      {showSaveButtonIsLoading && <Skeleton width={110} height={67} />}

      {showSaveAndCloseButton &&
        !showSaveAndCloseButtonIsLoading &&
        !smDown &&
        !mdDown && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={whenClickSaveAndClose}
            startIcon={<Icon>save</Icon>}
          >
            <Typography
              variant="button"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            >
              Salvar e Voltar
            </Typography>
          </Button>
        )}
      {showSaveAndCloseButtonIsLoading && !smDown && !mdDown && (
        <Skeleton width={180} height={67} />
      )}
      {showDeleteButton && !showDeleteButoonIsLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickDelete}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            Apagar
          </Typography>
        </Button>
      )}
      {showDeleteButoonIsLoading && <Skeleton width={110} height={67} />}

      {showNewButton && !showNewButtonIsLoading && !smDown && !mdDown && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickNew}
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {textNewButton}
          </Typography>
        </Button>
      )}
      {showNewButtonIsLoading && !smDown && !mdDown && (
        <Skeleton width={110} height={67} />
      )}

      {showBackButton &&
        (showDeleteButton ||
          showNewButton ||
          showSaveAndCloseButton ||
          showSaveButton) && (
          <Divider variant="middle" orientation="vertical" />
        )}
      {showBackButton && !showBackButtonIsLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickBack}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            Voltar
          </Typography>
        </Button>
      )}
      {showBackButtonIsLoading && <Skeleton width={110} height={67} />}
    </Box>
  );
};
