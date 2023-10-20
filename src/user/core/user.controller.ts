import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { LoginGuard } from "../guard/user.guard";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Post('signup')
    async createUser(@Req() req: Request) {
        await this.userService.createUser(req.body.email, req.body.password);
    }

    @Post('login')
    async loginUser(@Req() req: Request) {
        return await this.userService.loginUser(req.body.email, req.body.password);
    }

    @Get()
    @UseGuards(LoginGuard)
    async getAll(@Req() req: Request){
        return await this.userService.getAllUsers()
    }
}