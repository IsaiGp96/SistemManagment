export interface Usuario {
  id: number;
  nombres: string;
  apellidos: string;
  correo: string;
  sucursal_id?: number;
  carpeta_id?: number;
  fecha_ingreso?: string;
  rol_empresa?: string;
  is_active: boolean;
}
