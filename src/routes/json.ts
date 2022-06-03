/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/json';

const router = express.Router();

router.get('/clean', controller.cleanSDUI);

export = router;
