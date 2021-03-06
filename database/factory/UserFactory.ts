import { UserEntity } from '@/schema/UserEntity';
import { BaseEntity } from 'typeorm';
import { User, UserTheme } from '../../src/entities/User';
import BaseFactory from './BaseFactory';

export class UserFactoryClass extends BaseFactory {
    getData(): BaseEntity {
        const user = new User();
        // user.name = this.faker.name.findName();
        // user.azkarCount = this.faker.random.number(1000);
        // user.fontSize = 1;
        // user.theme = this.faker.random.objectElement(UserTheme);
        return user;
    }
}

export const UserFactory: UserFactoryClass = new UserFactoryClass(UserEntity)