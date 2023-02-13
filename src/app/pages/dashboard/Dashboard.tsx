import { BaseLayoutPagina } from '../../../shared/layouts';
import { FerramentasDeDetalhe } from '../../../shared/components';
export const Dashboard: React.FC = () => {
  return (
    // <BaseLayoutPagina
    //   title="Página Inicial"
    //   barraDeFerramentas={<FerramentasDaListagem showInputSearch />}
    // >
    //   Testando
    // </BaseLayoutPagina>
    <BaseLayoutPagina
      title="Página Inicial"
      barraDeFerramentas={<FerramentasDeDetalhe showSaveAndCloseButton />}
    >
      Testando
    </BaseLayoutPagina>
  );
};
