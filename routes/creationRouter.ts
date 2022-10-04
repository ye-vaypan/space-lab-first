import express, {Request, Response} from "express";
const creationRouter = express.Router();

/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */

 /**
 *  * @swagger
 * parameters:
 *   username:
 *     name: username
 *     description: Username to use for login.
 *     in: formData
 *     required: true
 *     type: string
 */

 /**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 *
 */

 /**
 * @swagger
 * tags:
 *   - name: Login
 *     description: Login
 *   - name: Accounts
 *     description: Accounts
 */

 /**
 *  * @swagger
 * /factory-method:
 *   post:
 *     description: Login to the application
 *     tags: [Users, Login]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Login'
 */

creationRouter.post('/factory-method', (req: Request, res: Response) => {
    res.send('Its Factory method Works!!!');
});

creationRouter.post('/abstract-factory', (req: Request, res: Response) => {
    res.send('Its Abstract Factory Works!!!');
});

export { creationRouter };