import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

class GenerateMockUsers {
    constructor(num) {
        this.num = num;
    }

    generate() {
        const users = [];
        for (let i = 0; i < this.num; i++) {
            const role = Math.random() < 0.5 ? 'user' : 'admin';
            users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: bcrypt.hashSync('coder123', 10),
                role: role,
                pets: []
            });
        }
        return users;
    }
}

export default GenerateMockUsers;