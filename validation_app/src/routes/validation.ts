/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/validation';

const router = express.Router();

router.get('/products', controller.getProductsScreen);
router.get('/product', controller.getProductScreen);

export = router;
