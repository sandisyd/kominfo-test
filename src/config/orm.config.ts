import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    autoLoadEntities: true,
    logging: true,
    database: 'db_sekolahku',
    synchronize: true
}