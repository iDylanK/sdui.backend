/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
// import renderToJson from '../json/renderToJson';

// import { post } from '../../api';

function cleanSDUI(req: Request, res: Response, next: NextFunction) {


    return res.status(200).json();
}

export default { cleanSDUI };
 