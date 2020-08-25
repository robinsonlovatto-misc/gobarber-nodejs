// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.router';
import usersRouter from './users.router';
import sessionsRouter from './sessions.router';

const routes = Router();
// use é usado para qualquer tipo de rota, post, get, etc
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
