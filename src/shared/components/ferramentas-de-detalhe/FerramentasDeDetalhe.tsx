import { Button, Divider, Icon, Paper, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface IFerramentasDeDetalheProps {
  textNewButton?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButoon?: boolean;
  showSaveButton?: boolean;
  showSaveAndCloseButton?: boolean;

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
  showDeleteButoon: showDeleteButton = true,
  showSaveButton = true,
  showSaveAndCloseButton = false,

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
      {showSaveButton && (
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

      {showSaveAndCloseButton && (
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
      {showDeleteButton && (
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
      {showNewButton && (
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
      <Divider variant="middle" orientation="vertical" />
      {showBackButton && (
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
    </Box>
  );
};
