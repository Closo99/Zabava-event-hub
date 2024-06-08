import express, { Request, Response } from 'express';
import TrabalhoController from '../controllers/trabalhoController';

const router = express.Router();
const controller = new TrabalhoController();

router.post('/create', async (req: Request, res: Response) => {
  const response = await controller.create(req.body);
  return res.status(response === 'OK' ? 200 : 400).send(response);
});

router.get('/getAll', async (req: Request, res: Response) => {
  const response = await controller.getAll();
  return res.status(response.error ? 400 : 200).send(response);
});

router.patch('/update', async (req: Request, res: Response) => {
  const response = await controller.update(req.body);
  return res.status(response.error ? 400 : 200).send(response);
});

router.delete('/delete/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await controller.delete(id);
  return res.status(response.error ? 400 : 200).send(response);
});

router.get('/getById', async (req: Request, res: Response) => {
  const id = req.query.id as string;
  const response = await controller.getById(id);
  return res.status(response.error ? 400 : 200).send(response);
});

export default router;