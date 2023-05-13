const express = require('express')
const nodemailer = require("nodemailer")

const app = express()
const ejs = require('ejs')


app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


// app.use(express.json())

const userID = 1;
const userType = "B";

const signed = true;
const cards = [{
    job: "prog",
    date: "20/3/2020"
}]
const cvs = [{
    job: "prog",
    date: "20/3/2020"
}]

const talents = [{
    name: "Abdulaziz Albaiz",
    status: "active",
    uni: "KFUPM",
    major: "Software Engineering",
    following: ["1", '2', '3']
}]
let cvsNotFull = true;

if (cvs.length >= 3) {
    cvsNotFull = false;
}

app.listen(1579)

app.get('/', function (req, res) {
    res.render('index', { userType, signed, title: 'Home' });
})
app.get('/3d-Card', function (req, res) {
    res.render('3d-Card', { userType, signed, title: '3D Card' });
})

app.get('/about-us', function (req, res) {
    res.render('about-us', { userType, signed, title: 'About Us' });
})

app.get('/account', function (req, res) {
    res.render('account', { userType, signed, title: 'Account' });
})

app.get('/card', function (req, res) {
    res.render('card', { userType, signed, title: 'Home' });
})

app.get('/cv', function (req, res) {
    res.render('cv', { userType, signed, title: 'Home' });
})

app.get('/portfolio', function (req, res) {
    res.render('portfolio', { userType, signed, title: 'Portfolio', cvs, cards, userID, cvsNotFull });
})

app.get('/sign-up', function (req, res) {
    res.render('sign-up', { userType, signed: false, title: 'Sign Up' });
})

app.get('/sign-in', function (req, res) {
    res.render('sign-in', { userType, signed: false, title: 'Sign In' });
})


app.get('/contact', function (req, res) {
    res.render('contact-recruiter', { userType, signed: false, title: 'Contact Us' })
})


app.get('/reset-password', function (req, res) {
    res.render('resetpass', { userType, signed: false, title: 'Reset Password' });
})

app.get('/tas', function (req, res) {
    res.render('tas', { talents, userType, signed: false, title: 'Talents' });
})

app.put('/tas/followed/:tal_id', function (req, res) {
    console.log("follow: " + req.params.tal_id)
})

app.put('/tas/Unfollowed/:tal_id', function (req, res) {
    console.log('unfollow: ' + req.params.tal_id)
})

app.get('/Contact', function (req, res) {
    res.render('Contact_Recruiter.ejs', { userType, signed: false });
})
app.post('/Contact', function (req, res) {
    let email = req.body.email;
    let text = req.body.name + ' Is hvaing an ' + req.body.service + '\n  Topic: ' + req.body.topic + '  \n ' + req.body.message
    sendEmail(email, text);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.service);
    console.log(req.body.topic);
    console.log(req.body.message);
    res.redirect("/")
})

// sending an emaiil
function sendEmail(email, text) {
    return new Promise((resolove, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "zada00000000@gmail.com",
                pass: "vkejtyczovjglmed"

            }


        })

        const mail_config = {
            from: 'zada00000000@gmail.com',
            to: email,
            subject: 'Khreej',
            text: text
        }
        transporter.sendMail(mail_config, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: 'no' })
            }
            return resolove({ message: 'email sent' });
        })

    })
}

// TODO: 404 page
// app.use(function (req, res) {
//     res.status(404).send('404 Not Found');
// })

// app.post('/card', function (req, res) {
//     console.log(req.body)
// })


