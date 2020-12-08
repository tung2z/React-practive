import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { readFileSync } from 'fs';
import md5 from 'md5';

interface User {
  id: number;
  email: string;
  password: string;
  numberPerPage: number;
  token: string;
}

interface Order {
  productName: string;
  itemCost: number;
}

interface State {
  _id: string;
  id: number;
  abbreviation: string;
  name: string;
}

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: State;
  orders: Order[];
  latitude: number;
  longitude: number;
}

const app = express();
const brief: Customer[] = JSON.parse(readFileSync('data/brief.json', 'utf-8'));
const countries: State[] = JSON.parse(
  readFileSync('data/countries.json', 'utf-8')
);
const timeseries: State[] = JSON.parse(
  readFileSync('data/timeseries.json', 'utf-8')
);
const users: User[] = JSON.parse(readFileSync('data/users.json', 'utf-8'));
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  );
  next();
});

function checkToken(request: Request, response: Response, next: NextFunction) {
  const token = getToken(request);

  if (!token) {
    return response.status(401).json({
      message: 'token is required',
    });
  }

  const user = findUserByToken(token);

  if (!user) {
    return response.status(401).json({
      message: 'token is invalid',
    });
  }

  console.log('currentUser', user);

  response.locals.currentUser = user;

  next();
}

app.get('/api/brief', checkToken, (req: Request, res: Response) => {
  res.json({
    brief
  });
});

app.get('/api/countries', checkToken, (req: Request, res: Response) => {
  res.json({ countries });
});

app.get('/api/timeseries', checkToken, (req: Request, res: Response) => {
    res.json({ timeseries });
  });

app.post('/api/login', (req: Request, res: Response) => {
  var { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(400).json({ message: 'Email or password is invalid' });
  }

  user.token = md5(new Date().getTime().toString());

  return res.json({ user });
});

app.post('/api/logout', checkToken, (request: Request, response: Response) => {
  const currentUser = response.locals.currentUser;

  currentUser.token = '';

  console.log(currentUser);

  response.json({ success: true });
});

function getToken(request: Request) {
  const authorization = request.headers.authorization;

  const token = authorization?.replace(/^Bearer\s/, '');

  return token;
}

function findUserByToken(token: string) {
  return users.find((user) => user.token === token);
}

app.listen(port);

console.log('Express listening on port ' + port);
