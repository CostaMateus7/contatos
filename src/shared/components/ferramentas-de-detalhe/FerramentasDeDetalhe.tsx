import {
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';

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
          Salvar
        </Button>
      )}
      {showSaveButtonIsLoading && <Skeleton width={110} height={67} />}

      {showSaveAndCloseButton && !showSaveAndCloseButtonIsLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickSaveAndClose}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}
      {showSaveAndCloseButtonIsLoading && <Skeleton width={180} height={67} />}
      {showDeleteButton && !showDeleteButoonIsLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickDelete}
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}
      {showDeleteButoonIsLoading && <Skeleton width={110} height={67} />}

      {showNewButton && !showNewButtonIsLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickNew}
          startIcon={<Icon>add</Icon>}
        >
          {textNewButton}
        </Button>
      )}
      {showNewButtonIsLoading && <Skeleton width={110} height={67} />}

      <Divider variant="middle" orientation="vertical" />
      {showBackButton && !showBackButtonIsLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={whenClickBack}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
      {showBackButtonIsLoading && <Skeleton width={110} height={67} />}
    </Box>
  );
};
