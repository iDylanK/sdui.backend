/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/product';

const router = express.Router();

router.get('/product', controller.getProductScreen);

export = router;
