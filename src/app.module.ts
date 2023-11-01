import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasModule } from './ventas/ventas.module';
import { VentasController } from './ventas/ventas.controller';
import { VentasService } from './ventas/ventas.service';

@Module({
  imports: [
    TypeOrmModule,
    VentasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password:'1234',
      database:'hpcoral',
      autoLoadEntities:true,
      synchronize: true,
      dropSchema: true,// solo en desarrollo
    })
  ],
  controllers: [AppController,
    VentasController,
  ],
  providers: [AppService,
    VentasService,
  ],
})
export class AppModule {}