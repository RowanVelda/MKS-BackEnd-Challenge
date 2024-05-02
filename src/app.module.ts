import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/movie.entity';

@Module({
 imports: [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 4321,
    username: 'usuario',
    password: 'senha_de_usuario',
    database: 'banco_de_dados_de_filmes',
    entities: [Movie],
    synchronize: true
  }),
  MoviesModule,
 ],
})
export class AppModule {}
