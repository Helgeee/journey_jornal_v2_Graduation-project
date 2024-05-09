import {BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm';


// npm start run:dev

@Injectable()
export class CollectionService {

  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: Repository<Collection> ) {}

  //Создаёт Новую коллекцию

  async create(createCollectionDto: CreateCollectionDto, id:number) {

    const isExist = await this.collectionRepository.findBy({
      user: { id },
      title: createCollectionDto.title,
    })

    if(isExist.length) 
      throw new BadRequestException('This collection already exist!') ///Проверка на существует ли такая уже Коллекция

    const newCollection = {
        
        title: createCollectionDto.title,
        img: createCollectionDto.img,
        user: { id } ,
      }
      console.log(newCollection)

    return await this.collectionRepository.save(newCollection)
    
  }

  // поиск всех коллекций пользователя
  async findAll(id: number) {
    return await this.collectionRepository.find({
      where:{
        user: {id},
      },
      relations: { 
        notes: true,
      },
    })
  }

   // поиск коллекций пользователя

  async findOne(id: number) {
    const collection = await this.collectionRepository.findOne({
      where: { id },
      relations: {
        user: true,
        notes: true,
      },
    })
    if(!collection)  throw new  NotFoundException('Collections not found')
    return collection ;
  }

  // обновление коллекций

  async update(id: number, updateCollectionDto: UpdateCollectionDto) {
    const collection = await this.collectionRepository.findOne({
      where: { id } ,
      
    })
    if(!collection)  throw new  NotFoundException('Collections not found')
    return await this.collectionRepository.update( id , updateCollectionDto) ;
  }


  // удаление коллекции

  async remove(id: number) {
    const collection = await this.collectionRepository.findOne({
      where: { id },
  })
      if(!collection)  throw new NotFoundException('Notes N F')

    return await this.collectionRepository.delete(id)
  }

}
