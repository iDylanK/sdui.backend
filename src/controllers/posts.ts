/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import { post } from '../../api';

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => res.status(200).json([
    post({
        id: '0',
        title: 'Star Warssss',
        message: 'Star Wars Lego just released for all next gen consolesss!',
        image_url: 'https://playsense.nl/wp-content/uploads/2022/04/LEGO-Star-Wars.jpg',
    }),
    post({
        id: '2',
        title: 'Red Bull',
        message: 'Red Bull will participate in the Australian GP this weekend met some new upgrades.',
        image_url: 'https://media.nu.nl/m/5znx253arrq8_xwd1280.jpg/red-bull-houdt-nog-veel-achter-bij-presentatie-nieuwe-auto-verstappen.jpg',
    })]);

export default { getPosts };
