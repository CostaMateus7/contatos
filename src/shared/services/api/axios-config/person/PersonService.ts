import { Api } from '..';
import { Environment } from '../../../../environment';

interface IListPeople {
  id: number;
  email: string;
  idCity: number;
  fullName: string;
}
interface IDetailsPerson {
  id: number;
  email: string;
  idCity: number;
  fullName: string;
}
type TTotalPeopleCount = {
  data: IListPeople[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ''
): Promise<TTotalPeopleCount | Error> => {
  try {
    const relativeUrl = `/pessoas?_page=${page}&_limit=${Environment.LINE_LIMIT}&nomeCompleto_like=${filter}`;
    const { data, headers } = await Api.get(relativeUrl);
    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LINE_LIMIT),
      };
    }
    return new Error('Erro ao listar os registros');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros'
    );
  }
};
const getById = async (id: number): Promise<IDetailsPerson | Error> => {
  try {
    const { data } = await Api.get(`/pessoas/${id}`);
    if (data) {
      return data;
    }
    return new Error('Erro ao listar usuário');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar usuário'
    );
  }
};
const create = async (
  dados: Omit<IDetailsPerson, 'id'>
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetailsPerson>('/pessoas', dados);
    if (data) return data.id;
    return new Error('Erro ao listar usuário');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao criar usuário'
    );
  }
};
const updateById = async (
  id: number,
  dados: IDetailsPerson
): Promise<void | Error> => {
  try {
    await Api.put(`/pessoas/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao formatar usuário'
    );
  }
};
const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/pessoas/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao deletar usuário'
    );
  }
};

export const peopleService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
