import Users from "../dao/Users.dao.js";
import Pet from "../dao/Pets.dao.js";
import Adoption from "../dao/Adoption.js";
import GenerateMockUsers from "../dao/mockingUsers.js";
import GenerateMockPets from "../dao/mockingPets.js";

import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import AdoptionRepository from "../repository/AdoptionRepository.js";
import MockRepository from "../repository/MockRepository.js";


export const usersService = new UserRepository(new Users());
export const petsService = new PetRepository(new Pet());
export const adoptionsService = new AdoptionRepository(new Adoption());


export const mockUsersService = new MockRepository(GenerateMockUsers);
export const mockPetsService = new MockRepository(GenerateMockPets);