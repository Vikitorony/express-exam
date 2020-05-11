import * as express from 'express';
import { Request, Response } from 'express';
import { router } from './app/routers'

const app: express.Application = express();
const { PORT = 3000 } = process.env;

app.use(router);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
