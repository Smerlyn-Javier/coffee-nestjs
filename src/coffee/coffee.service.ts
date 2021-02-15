import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {
    findAll(){
      return [{coffee:`🍵`},{bread:`🥐`}]
    }
    findOne(id):[{id:string},{coffee:string},{bread:string}]{
     return [{id:`${id}`},{coffee:`🍵`},{bread:`🥐`}]
    }
    create(body){
      return body;
    }
    update(id){
      return `Update element #${id}`
    }
    delete(id){
      return `Delete element #${id}`
    }
}
