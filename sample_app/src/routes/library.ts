/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/library';
import controllerView from '../controllers/view';
import controllerHeader from '../controllers/header';

const router = express.Router();

router.get('/library', controller.getLibraryScreen);
router.get('/library/views', controllerView.getContentScreen);
router.get('/library/list', controllerView.getListScreen);
router.get('/library/header/scrollable', controllerHeader.getHeaderScrollableScreen);
router.get('/library/header', controllerHeader.getHeaderScreen);

export = router;
