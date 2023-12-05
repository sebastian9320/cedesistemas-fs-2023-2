import express, { json } from 'express';
import { router as UserRouter } from './modules/users/users.routes.js';
import { router as CompanyRouter } from './modules/companies/companies.routes.js';
import { router as EventRouter } from './modules/events/events.routes.js';
import { router as BookingRouter } from './modules/booking/booking.routes.js';
import cors from 'cors'
import './conn/conn.mongo.js'

const app = express();
const port = 3000;

app.use(json());
app.use(cors());

//Modules

//users
app.use('/users', UserRouter);

//companies
app.use('/companies', CompanyRouter);

//events
app.use('/events', EventRouter);

//booking
app.use('/booking', BookingRouter);

app.listen(port, () => {
    console.log(`App listen on port: ${port}`)
});

