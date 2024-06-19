import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'lumos',
  password: 'lumos',
  database: 'lumos',
  entities: ['src/**/*.entity.{ts,js}'],
  migrations: ['src/migrations/*.{ts,js}'], // Path to your migrations
  synchronize: false, // Set to false when using migrations
});

AppDataSource.initialize()
  .then(() => {
    //console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export default AppDataSource;
