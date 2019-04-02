import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

const port = process.env.PORT || 3000;
const app = express();

//Log requests to the console
app.use(logger('dev'));

//Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app)

app.get('*', (req, res) =>{
    return res.status(200).send({'message': 'Welcome to the FrontendMasters API.'})
});

app.listen(port, console.log(`Server running at port: ${port}`));