/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/library';

const router = express.Router();

router.get('/library', controller.getLibraryScreen);

export = router;
