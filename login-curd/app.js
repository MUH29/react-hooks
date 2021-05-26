

let myExpress = require('express');
let mongoose = require('mongoose');
let fs = require('fs');


var multer = require('multer');
// var upload = multer({ dest: './server/files' });

var storage = multer.diskStorage({
    destination: function (req, file, next) {

        fs.mkdir('./files/' + req.body.name, () => {

            next(null, './files/' + req.body.name);


        })

    },
    filename: function (req, file, next) {
        next(null, file.originalname);
    }
})

var upload = multer({ storage: storage })


let myApp = myExpress();



myApp.use(myExpress.json());

let users = [];



myApp.get('/get_users', (req, res) => {

    res.json(users);

});

myApp.put('/edit', (req, res) => {

    users[req.body.index].email = req.body.newEmail;
    users[req.body.index].city = req.body.newCity;

    res.json(users);

});

myApp.delete('/delete', (req, res) => {

    users.splice(+req.query.myIndex, 1);

    res.json(users);

});

myApp.post("/register-user", (req, res) => {

    console.log(req.body);

    res.json({
        status: 'han g ok'
    })

});
myApp.post('/login', (req, res) => {

    let userFound = users.find((user) => {

        return user.email == req.body.email && user.password == req.body.password;

    })

    if (userFound) {

        res.json(userFound)

    }else{
        res.status(403).json({
            message:'User not found'
        })
    }

});

myApp.post('/signup', upload.single('pic'), (req, res) => {

    users.push(req.body);

    res.json({
        success: true
    });

})

// myApp.use(myExpress.static('./server/content'));
myApp.use(myExpress.static('./build'));

myApp.listen(process.env.PORT || 6060, () => {
    console.log("start is chaling");
})