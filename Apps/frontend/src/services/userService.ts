import api from '../api/api';
import { Usuario } from '../types/user';

export const getAllUsuarios = async (): Promise<Usuario[]> => {
  const res = await api.get<Usuario[]>('/usuarios');
  return res.data;
};

export const getUsuarioById = async (id: number): Promise<Usuario> => {
  const res = await api.get<Usuario>(`/usuarios/${id}`);
  return res.data;
};
