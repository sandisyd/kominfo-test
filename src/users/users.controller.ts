import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from 'src/dto/users.dto';
import { JsonContains } from 'typeorm';

@Controller('users')
export class UsersController {
    constructor(private usrService: UsersService){}
    // Read atau get users
    @Get('all_users')
    async getUserAll(){
        return this.usrService.getUsers()
    }

    // Create users
    @Post('insert_users')
    async insertUser(@Body() userCreateDto: UsersDto){
        return await this.usrService.userCreate(userCreateDto)
    }

    // Update users
    @Post('update_users/:id')
    async updateUsers(@Param('id') id: number, @Body() usrUpdate: UsersDto){
        return this.usrService.updateUsers(id, usrUpdate);
    }

    // Delete users
    @Delete('delete_users/:id')
    async deleteUser(@Param('id') id: number){
        await this.usrService.deleteUsers(id);
        return {message: "Data berhasil dihapus"}
    }
}
