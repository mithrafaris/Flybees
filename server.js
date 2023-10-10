const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')

dotenv.config({ path: 'config.env' });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(express.static(path.resolve(__dirname, 'public/user')));
app.use(express.static(path.resolve(__dirname, 'public/admin')));




app.use('/', userRoute);
app.use('/', adminRoute);
// app.get("/userdetails", (req, res) => {
//     res.render("userdetails");
// });


// Set views directories for admin and user
app.set('views', [
    path.resolve(__dirname, 'views/admin'),
    path.resolve(__dirname, 'views/user'),
]);
app.use((req, res, next) => {
    console.log('Page not found:', req.url);
    res.status(404).render('error', { message: 'Page not found' });
});
  









app.use((req, res, next) => {
    res.status(404).render('error', { message: 'Page not found' });
  });



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
