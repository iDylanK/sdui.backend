/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/react';

const router = express.Router();

router.get('/react', controller.getJSXTest);
// router.get('/posts/:id', controller.getPost);
// router.put('/posts/:id', controller.updatePost);
// router.delete('/posts/:id', controller.deletePost);
// router.post('/posts', controller.addPost);
// router.get('/migrate', controller.migrate);

export = router;
