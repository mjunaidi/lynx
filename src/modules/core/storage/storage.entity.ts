import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { STORAGE_TYPE } from './storage.constants';

@Entity()
export class StorageEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  url: string;

  @Column()
  size: number;

  @Column()
  mimetype: string;

  @Column({ type: 'enum', enum: STORAGE_TYPE })
  storageType: STORAGE_TYPE;
}
