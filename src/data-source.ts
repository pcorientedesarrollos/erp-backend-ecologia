import 'dotenv/config'; // Para que lea tu archivo .env
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10), // Asegúrate de tener DB_PORT en .env
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  // Apunta a la carpeta donde se guardarán los archivos de migración
  migrations: [__dirname + '/migrations/*{.ts,.js}'],

  // CLAVE: Desactivamos la sincronización automática para tomar el control.
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;