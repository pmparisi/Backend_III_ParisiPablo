/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: API for managing pets
 */

/**
 * @swagger
 * /api/pets:
 *   get:
 *     tags: [Pets]
 *     summary: Retrieve a list of all pets
 *     responses:
 *       200:
 *         description: A list of pets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: The name of the pet
 *                   specie:
 *                     type: string
 *                     description: The species of the pet
 *                   birthDate:
 *                     type: string
 *                     format: date
 *                     description: The birth date of the pet
 *                   adopted:
 *                     type: boolean
 *                     description: Whether the pet has been adopted
 *                   owner:
 *                     type: string
 *                     format: objectId
 *                     description: The ID of the owner (User)
 *                   image:
 *                     type: string
 *                     description: The URL of the pet's image
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/pets:
 *   post:
 *     tags: [Pets]
 *     summary: Create a new pet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the pet
 *               specie:
 *                 type: string
 *                 description: The species of the pet
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: The birth date of the pet
 *               adopted:
 *                 type: boolean
 *                 description: Whether the pet has been adopted
 *               owner:
 *                 type: string
 *                 format: objectId
 *                 description: The ID of the owner (User)
 *               image:
 *                 type: string
 *                 description: The URL of the pet's image
 *     responses:
 *       201:
 *         description: The pet has been created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/pets/withimage:
 *   post:
 *     tags: [Pets]
 *     summary: Create a new pet with an image
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the pet
 *               specie:
 *                 type: string
 *                 description: The species of the pet
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: The birth date of the pet
 *               adopted:
 *                 type: boolean
 *                 description: Whether the pet has been adopted
 *               owner:
 *                 type: string
 *                 format: objectId
 *                 description: The ID of the owner (User)
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The pet's image file
 *     responses:
 *       201:
 *         description: The pet has been created with an image
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/pets/{pid}:
 *   put:
 *     tags: [Pets]
 *     summary: Update a pet by ID
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: The pet ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the pet
 *               specie:
 *                 type: string
 *                 description: The species of the pet
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: The birth date of the pet
 *               adopted:
 *                 type: boolean
 *                 description: Whether the pet has been adopted
 *               owner:
 *                 type: string
 *                 format: objectId
 *                 description: The ID of the owner (User)
 *               image:
 *                 type: string
 *                 description: The URL of the pet's image
 *     responses:
 *       200:
 *         description: The pet has been updated
 *       404:
 *         description: Pet not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/pets/{pid}:
 *   delete:
 *     tags: [Pets]
 *     summary: Delete a pet by ID
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: The pet ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: The pet has been deleted
 *       404:
 *         description: Pet not found
 *       500:
 *         description: Internal server error
 */