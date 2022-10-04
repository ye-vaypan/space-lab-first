import express from 'express';
import { creationRouter } from './routes/creationRouter.js';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;
const options = {
  swaggerOptions: {
    url: "/swagger.json",
  },
}

app.use(express.static('public'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup( {}, options));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/creation', creationRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

