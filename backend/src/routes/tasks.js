import { Router } from 'express';

import { 
    getMenu, 
    getMenuId, 
    login
} from '../controllers/tasks';

const router = Router();
 
router.get('/menu', getMenu );

router.get('/menu/:id', getMenuId );

router.post('/login', login);

router.post('/pedido');

router.delete('/pedido:id');

router.put('/pedido:id');

export default router;