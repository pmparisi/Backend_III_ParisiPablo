import { mockUsersService, mockPetsService } from '../services/index.js';
import { usersService, petsService } from '../services/index.js'; 

const getMockPets = async (req, res) => {
    try {
        const quantity = 100; 
        const mockPets = await mockPetsService.getAll(quantity);
        res.send({ status: "success", payload: mockPets });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: "error", message: "Error retrieving mock pets." });
    }
};

const getMockUsers = async (req, res) => {
    try {
        const quantity = 50;
        const mockUsers = await mockUsersService.getAll(quantity);
        res.send({ status: "success", payload: mockUsers });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: "error", message: "Error retrieving mock users." });
    }
};

const generateData = async (req, res) => {
    const { users, pets } = req.body;
    if (isNaN(users) || isNaN(pets) || users <= 0 || pets <= 0) {
        return res.status(400).send({ status: "error", message: "Both 'users' and 'pets' must be numeric values greater than 0." });
    }
    try {
        const mockUserData = mockUsersService.create(Number(users));
        const mockPetData = mockPetsService.create(Number(pets));
        await Promise.all([
            usersService.create(mockUserData),
            petsService.create(mockPetData)
        ]);

        res.send({ status: "success", message: `${users} users and ${pets} pets created successfully!` });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: "error", error: 'Error generating data' });
    }
};

export default {
    getMockPets,
    getMockUsers,
    generateData
};