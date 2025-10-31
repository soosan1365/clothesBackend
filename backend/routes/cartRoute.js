import express from 'express';
import { getUserCart, addToCart, updateCart } from '../controllers/cartController.js';
import AuthUser from '../middleware/auth.js';
 const cartRouter = express.Router();

cartRouter.post('/get',AuthUser, getUserCart);
cartRouter.post('/add',AuthUser, addToCart);
cartRouter.post('/update',AuthUser, updateCart);


export default cartRouter;