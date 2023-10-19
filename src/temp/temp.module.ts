import { Module } from "@nestjs/common";
import { TempService } from "./temp.service";
import { TempRepository } from "./temp.repository";
import { TempController } from "./temp.controller";
import { DataBaseModule } from "src/core/database/database.module";

@Module({
    imports: [DataBaseModule],
    providers: [TempService,TempRepository],
    controllers: [TempController]
})
export class TempModule{

}