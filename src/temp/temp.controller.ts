import { Controller, Get } from "@nestjs/common";
import { TempService } from "./temp.service";

@Controller('temp')
export class TempController{

    constructor(private tempService: TempService){

    }

    @Get('all')
    async AllAtTime(){
        await this.tempService.createAll();
    }
}