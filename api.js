const express =  require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors");
const fileUpload = require('express-fileupload');


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/images/', express.static(__dirname + '/images'));

app.use(fileUpload());

app.use(express.static('public'));

const db = require('./models')

const postRouter = require("./routers/index");
app.use("/routes", postRouter);


db.sequelize.sync().then(() => {
    app.listen(3039, () => {
        console.log('All models were synchronized successfully.');
    })
})
