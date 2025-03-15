import express, {NextFunction,Response,Request} from 'express';

const app = express();

const PORT = 3000

app.get('/api/users', (req:Request, res:Response, next:NextFunction) => {
  res.send('Welcome to my API!');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// inintiolize ts with express
// npm init -y
// install express
// install -D typescript
// install i -D @types/express
// npx tsc --init
// npx i -D ts-node
// npm install -D nodemon
// npm i -g nodemon