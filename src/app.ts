import 'dotenv/config';
import express from 'express';
import UserRouter from './routes/UserRouter';
import AuthRouter from './routes/AuthRouter';
import ProductRouter from './routes/ProductRouter';
import CategoryRouter from './routes/CategoryRouter';

const app = express();
app.use(express.json());
app.use('/users', new UserRouter().getRoutes());
app.use('/auth', new AuthRouter().getRoutes());
app.use('/products', new ProductRouter().getRoutes());
app.use('/categories', new CategoryRouter().getRoutes());

app.listen(3000, () => console.log('Listening 3000'));
