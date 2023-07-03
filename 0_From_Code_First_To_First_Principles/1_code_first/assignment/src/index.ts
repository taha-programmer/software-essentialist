import express from 'express';
import * as userController from './controllers/userController';

const app = express();
app.use(express.json());

app.post('/users/new', userController.createUser);
app.post('/users/edit/:userId', userController.editUser);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
