const expres = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080


app.listen(port, function() {
    console.log(`server is running on port ${port}`);
});
