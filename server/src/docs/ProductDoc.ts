/**
 * @swagger
 * /api/admin:
 *  get:
 *    summary: Retrieve a list of products
 *    tags:
 *      - Products
 *    description: Return a list of products
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 *
 */

/**
 * @swagger
 * /api/admin/{id}:
 *  get:
 *    summary: Get a product By Id
 *    tags:
 *      - Products
 *    description: Return a product finded by id
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The ID of the product to retrieve
 *      required: true
 *      schema:
 *        type: integer
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Product not found
 *      400:
 *        description: Bad Request - invalid URL
 */

/**
 * @swagger
 * /api/admin:
 *  post:
 *    summary: Create a new product
 *    tags:
 *      - Products
 *    description: Returns a new record in the database
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor curvo 49 pulgadas"
 *              price:
 *                type: number
 *                example: 399
 *    responses:
 *     201:
 *       description: Successful response
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     400:
 *       description: Bad request - invalid input data
 */

/**
 * @swagger
 * /api/admin/{id}:
 *  put:
 *    summary: Updates a product with the user info
 *    tags:
 *      - Products
 *    description: Returns the updated product
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The ID of the product to retrieve
 *      required: true
 *      schema:
 *        type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor curvo 49 pulgadas"
 *              price:
 *                type: number
 *                example: 399
 *              available:
 *                type: boolean
 *                example: true
 *    responses:
 *      200:
 *        description: Successfull response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad request - invalid id or invalid input data
 *      404:
 *        description: Product not found
 */

/**
 * @swagger
 * /api/admin/{id}:
 *  patch:
 *    summary: Updates a available with the user state
 *    tags:
 *      - Products
 *    description: Returns the updated product
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The ID of the product to retrieve
 *      required: true
 *      schema:
 *        type: integer
 *    responses:
 *      200:
 *        description: Successfull response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad request - invalid id
 *      404:
 *        description: Product not found
 */

/**
 * @swagger
 * /api/admin/{id}:
 *  delete:
 *    summary: Delete the product By id
 *    tags:
 *      - Products
 *    description: Returns string to confirm the status from delete
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The ID of the product to retrieve
 *      required: true
 *      schema:
 *        type: integer
 *    responses:
 *      200:
 *        description: Product delete successful
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: "Producto  eliminado correctamente"
 *      400:
 *        description: Bad request - invalid id
 *      404:
 *        description: Product not found
 */
