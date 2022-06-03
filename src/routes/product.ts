/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/product';

const router = express.Router();

router.get('/products/custom', controller.getProductsCustomScreen);
router.get('/products', controller.getProductsScreen);
router.get('/product', controller.getProductScreen);
// router.get('/posts/:id', controller.getPost);
// router.put('/posts/:id', controller.updatePost);
// router.delete('/posts/:id', controller.deletePost);
// router.post('/posts', controller.addPost);
// router.get('/migrate', controller.migrate);

export = router;
