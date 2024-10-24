import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgCongfig: PostgresConnectionOptions = {
  url: 'postgresql://realestatedb_owner:nYK8l9tdUBMi@ep-green-cloud-a8sr8o17.eastus2.azure.neon.tech/realestatedb?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
