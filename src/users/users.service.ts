import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { UsersDto } from 'src/dto/users.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users)
    private userRepo: Repository<Users>){}

    // Create users
    async userCreate(insertUser: UsersDto){
        const dataUsers = this.userRepo.create(insertUser);
        await this.userRepo.save(dataUsers)
        return dataUsers;
    }

    // get all

    async getUsers(){
        return await this.userRepo.find();
    }

    
    // udpate users
    async updateUsers(id: number, updateData: UsersDto){
        await this.userRepo.update(id, updateData)
        return await this.userRepo.findOne({where: {id}})
    }

    // delete users
    async deleteUsers(id: number){
        if (id === null) {
            return "Data user tidak ada"
        }
        return this.userRepo.delete(id);
    }
}
