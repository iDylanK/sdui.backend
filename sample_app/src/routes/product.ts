/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/product';

const router = express.Router();

router.get('/energy', controller.getEnergyScreen);
router.get('/pokebowl', controller.getPokebowlScreen);
router.get('/spareribs', controller.getSpareribsScreen);
router.get('/hamburger', controller.getHamburgerScreen);

export = router;
