import { faker } from '@faker-js/faker';

class GenerateMockPets {
    constructor(num) {
        this.num = num;
    }

    generate() {
        const pets = [];
        for (let i = 0; i < this.num; i++) {
            pets.push({
                name: faker.person.firstName(),
                specie: faker.animal.type(),
                birthDate: faker.date.past(),
                adopted: false,
                owner: null,
                image: faker.image.urlLoremFlickr({
                    width: 640,
                    height: 480,
                    category: "animals",
                })
            });
        }
        return pets;
    }
}

export default GenerateMockPets;