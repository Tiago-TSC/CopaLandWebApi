require('dotenv').config();

const server = require('./server');

const init = require('./app/services/modelsService');

const port = process.env.PORT || 3000;

//init();

server.listen(port, async () => {
  try {
    console.log(`Environment is ${process.env.NODE_ENV}`);
    console.log(`App listening to port ${port}....`);
    console.log('Press Ctrl+C to quit.');
  } catch (err) {
    const message = err.message ? err.message : err;
    console.log(message);
  }
});
