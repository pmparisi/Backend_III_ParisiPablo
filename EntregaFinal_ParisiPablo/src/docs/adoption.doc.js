/**
 * @swagger
 * tags:
 *   name: Adoptions
 *   description: API for managing pet adoptions
 */

/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     tags: [Adoptions]
 *     summary: Retrieve a list of all adoptions
 *     responses:
 *       200:
 *         description: A list of adoptions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   owner:
 *                     type: string
 *                     format: objectId
 *                     description: The ID of the owner (User)
 *                   pet:
 *                     type: string
 *                     format: objectId
 *                     description: The ID of the adopted pet
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/adoptions/{aid}:
 *   get:
 *     tags: [Adoptions]
 *     summary: Retrieve an adoption by ID
 *     parameters:
 *       - in: path
 *         name: aid
 *         required: true
 *         description: The adoption ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adoption found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 owner:
 *                   type: string
 *                   format: objectId
 *                   description: The ID of the owner (User)
 *                 pet:
 *                   type: string
 *                   format: objectId
 *                   description: The ID of the adopted pet
 *       404:
 *         description: Adoption not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/adoptions/{uid}/{pid}:
 *   post:
 *     tags: [Adoptions]
 *     summary: Create a new adoption
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: The ID of the owner (User)
 *         schema:
 *           type: string
 *       - in: path
 *         name: pid
 *         required: true
 *         description: The ID of the adopted pet
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: The adoption has been created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */