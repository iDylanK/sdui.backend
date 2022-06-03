/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/library';

const router = express.Router();

router.get('/home', controller.getHome);
// router.get('/page1', controller.getPage1);
// router.get('/page2', controller.getPage2);
// router.get('/header', controller.getHeaderPage);
router.get('/product', controller.getProduct);

export = router;
