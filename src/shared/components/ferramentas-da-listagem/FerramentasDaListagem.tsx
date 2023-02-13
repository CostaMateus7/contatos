import {
  Box,
  Button,
  Icon,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from '@mui/material';
interface IFerramentasDaListagem {
  textSearch?: string;
  showInputSearch?: boolean;
  whenChangingSearchText?: (textValue: string) => void;
  textButtonNew?: string;
  showButtonNew?: boolean;
  whenClickNew?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagem> = ({
  textSearch = '',
  showInputSearch = false,
  whenChangingSearchText,
  textButtonNew = 'Novo',
  showButtonNew = true,
  whenClickNew,
}) => {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={1}
      height={theme.spacing(5)}
      paddingX={2}
      marginX={1}
      padding={1}
    >
      {showInputSearch && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={textSearch}
          onChange={(event) => whenChangingSearchText?.(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {showButtonNew && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={whenClickNew}
            endIcon={<Icon>add</Icon>}
          >
            {textButtonNew}
          </Button>
        )}
      </Box>
    </Box>
  );
};
