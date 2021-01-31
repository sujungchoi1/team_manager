const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/team-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the database team-manager"))
    .catch(err => console.log("Something went wrong when connecting to the database team-manager", err));
