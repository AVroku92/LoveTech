//create server
const { Console } = require("console");
const express = require("express");
const { validationResult, check, Result } = require("express-validator");

const path = require("path");
const app = express();

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

let conatctFormValidation = getContactFormValidation();
//method to read the body of post
app.use(express.urlencoded({extended:false}));

//routing
app.use("/", express.static("./Website")) //localhost:4000

app.get("/Catagories",(req,res) =>{

    const mysql = require("mysql2");
    let mydb = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        port:'3306',
        database:'accounts'
    });
        
        
        //sql command
        let sql = "SELECT * FROM "+ "laptops";
        
        //execute sql command
        mydb.query(sql,function(err,resultlaptops){

            if(err) throw err;

            //if no errors
            let sql = "SELECT * FROM "+ "smartphones";
            mydb.query(sql,function(err,resultphone){
            console.log("Comment added to database");
            

            res.render("Catagories",{result1: resultlaptops,result2:resultphone});
            });
        });
        
        
});
    





//contact process
app.post("/contactProcess", conatctFormValidation ,(request,response) => {

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        let msg = "<p>errors found</p>" + printErrors(errors.array());
        response.send(msg);

    }
    else{

        const firstname = request.body.firstname;
        const lastname = request.body.lastname;
        const gender = request.body.gender;
        const mobile = request.body.mobile;
        const date = request.body.date;
        const email = request.body.email;
        const language = request.body.language;
        const subject = request.body.subject;
        const comment = request.body.comment;


        //save to database
        addComment(firstname,lastname,gender,mobile,date,email,language,subject,comment);
        response.send("<p>Thank you, your information has been submitted</p>");

    } 

});

//server listen
app.listen(4000, () => {

    console.log("server is running");
});



function getContactFormValidation(){
    return [

        //first name
        check("firstname").isLength({min:2,max:20}).withMessage("First name length must be between 2-20")//length
        .isString().withMessage("First name must be a string")//type
        .isAlpha().withMessage("First name must match format").trim().escape(),//format

        //last name
        check("lastname").isLength({min:2,max:20}).withMessage("Last name length must be between 2-20")//length
        .isString().withMessage("Last name must be a string")//type
        .isAlpha().withMessage("Last name must match format").trim().escape(),//format

        check("gender").custom(val =>{
            const whitelist = ["female","male","other"]
            if(whitelist.includes(val))
                return true
            return false    
        }).withMessage("selection gender must be from the provided list").trim().escape(),


        //mobile
        check("mobile").isLength({min:10,max:10}).withMessage("Phone number length must be 10").isNumeric().withMessage("Phone number must contain only numbers").trim().escape(),

        //date
        check("date").custom(val =>{
            // First check for the pattern
            var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

            if (!regex_date.test(val)) {
                return false;
            }

            // Parse the date parts to integers
            var parts = val.split("-");
            var day = parseInt(parts[2], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[0], 10);

            // Check the ranges of month and year
            if (year < 1920 || year > 2018 || month == 0 || month > 12) {
                return false;
            }

            var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            // Adjust for leap years
            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
                monthLength[1] = 29;
            }

            // Check the range of the day
            if (!(day > 0 && day <= monthLength[month - 1])) {
                return false;
            }
            return true;
        }).withMessage("date value is not vaild").trim().escape(),

        //email
        check("email").isEmail().withMessage("Email address must match format"),

        //language
        check("language").custom(val =>{
            const whitelist = ["arabic","english","spanish"]
            if(whitelist.includes(val))
                return true
            return false    
        }).withMessage("selection language must be from the provided list").trim().escape(),

        check("subject").isLength({min:3,max:20}).withMessage("Subject length must be between 3-20")//length
        .isString().withMessage("Subject must be a string")//type
        .isAlpha().withMessage("Subject must match format").trim().escape(),//format

        check("comment").isLength({min:10,max:600}).withMessage("Comment length must be between 3-20")//length
        .isString().withMessage("Comment must be a string").trim().escape()//format
    ]
}

function printErrors(errArray){
    let errors = [];
    for (let index = 0; index < errArray.length; index++) {
        let err = errArray[index]["msg"];
        let msg = "<p>-"+err+"</p>";
        errors.push(msg);
    }
    return errors.join("");
}


//add comment to database
function addComment(firstname,lastname,gender,mobile,date,email,language,subject,comment){

    //connection
    const mysql = require("mysql2");
    let mydb = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        port:'3306',
        database:'comments'
    });

    mydb.connect(function(err){
        
        
        //sql command
        let sql = "INSERT INTO comment (first_name, last_name, gender, mobile, date, email, language, subject, comment) VALUES ('"+firstname+"','"+lastname+"','"+gender+"','"+mobile+"','"+date+"','"+email+"','"+language+"','"+subject+"','"+comment+"')";
        
        //execute sql command
        mydb.query(sql,function(err,result){

            if(err) throw err;

            //if no errors
            console.log("Comment added to database");
        });

    });

    
}


//signup process
let signupFormValidation = getSignupFormValidation();

//signup validation
app.post("/signupProcess", signupFormValidation ,(request,response) => {

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        let msg = "<p>errors found</p>" + printErrors(errors.array());
        response.send(msg);

    }
    else{

        const username = request.body.username;
        const email = request.body.email;
        const password = request.body.password;
        


        //save to database
        signup(username,email,password);
        response.send("<p>you have been signed up</p>");

    } 

});
function getSignupFormValidation(){
    return [

        //first name
        check("username").isLength({min:2,max:20}).withMessage("Username length must be between 2-20")//length
        .isString().withMessage("First name must be a string")//type
        .trim().escape(),

        check("email").isEmail().withMessage("Email format is not valid").trim().escape(),

        check("password").isLength({min:8,max:30}).withMessage("password length must be between 8-30")
        .isString().withMessage("password must be string").matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,30}$").trim().escape()

    ]
}

//signup to database method
function signup(username,email,password){

    //connection
    const mysql = require("mysql2");
    let mydb = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        port:'3306',
        database:'accounts'
    });

    mydb.connect(function(err){
        
        
        //sql command
        let sql = "INSERT INTO users (username, email, password) VALUES ('"+username+"','"+email+"','"+password+"')";
        
        //execute sql command
        mydb.query(sql,function(err,result){

            if(err) throw err;

            //if no errors
            console.log("User signed up");
        });

    });

    
}


//login process
let loginFormValidation = getLoginFormValidation();

app.post("/loginProcess", loginFormValidation ,(request,response) => {

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        let msg = "<p>errors found</p>" + printErrors(errors.array());
        response.send(msg);

    }
    else{
        
        const email = request.body.email;
        const password = request.body.password;
        


        //save to database
        login(email,password);
        response.send("<p>Welcome back!</p>");

    } 

});

function getLoginFormValidation(){
    return [

        //first name
        check("email").isEmail().withMessage("Email format is not valid").trim().escape(),

        check("password").isLength({min:8,max:30}).withMessage("password length must be between 8-30")
        .isString().withMessage("password must be string").matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,30}$").trim().escape()

    ]
}

function login(username,email,password){

    //connection
    const mysql = require("mysql2");
    let mydb = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        port:'3306',
        database:'accounts'
    });

    mydb.connect(function(err){
        
        
        //sql command
        let sql = "select email,password from users where email = '"+email+"' AND password = '"+password+ "'";
        
        //execute sql command
        mydb.query(sql,function(err,result){

            if(err) throw err;

            //if no errors
            // TODO
            //
            
        
        });

    });

    
}