import * as express from 'express';
import { Request, Response } from 'express';
import { database } from './lib/database';

const app = express();
const { PORT = 3000 } = process.env;

app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
