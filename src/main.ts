import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Database } from "sqlite3"

async function bootstrapNest() {
    console.log("Bootstrapping Nest")
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log(`Nest App started`);
  }

function start(){
    console.log(`Creating DB`);
    new Database(":memory:", (error) => {
        if(error){
            console.log(`ERROR opening DB: ${error}`)
            return;
        }

        console.log(`DB created`);
        bootstrapNest()
    })
};


start();
