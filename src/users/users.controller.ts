
import { Body, Controller, Get, Post, UseGuards, Param, Patch, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

   
    @Post('/registration')
    async create(@Body() userDto: CreateUserDto){
        try{
            const data = await this.usersService.create(userDto);
            return data
        }
        catch(error){
           
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
     
    }

   
    @Get('/get-all')
    getAll(){
        return this.usersService.findAll();
    }

    @Get('/get-user/:id')
    async getUser(@Param('id') id:number){
        try{
            const data = await this.usersService.getUser(id);
            return data
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
        
    }

    @Post('/login')
    async Login(@Body() userDto: UserDto){
    
        

        try{
            const data = await this.usersService.login(userDto)
            return data
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
    }

    
    
}