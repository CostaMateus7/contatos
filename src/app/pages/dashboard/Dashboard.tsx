import { BaseLayoutPagina } from '../../../shared/layouts';
import { FerramentasDaListagem } from '../../../shared/components/ferramentas-da-listagem/FerramentasDaListagem';
export const Dashboard: React.FC = () => {
  return (
    <BaseLayoutPagina
      title="Página Inicial"
      barraDeFerramentas={<FerramentasDaListagem showInputSearch />}
    >
      Testando
    </BaseLayoutPagina>
  );
};
