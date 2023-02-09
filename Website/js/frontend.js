

//--------------contact us validation---------------
const form = document.querySelector(".contact-us-form");

if(form != null)
    form.addEventListener("submit",e=>{

    //first name
    {
    let messages = []
    const firstname = document.querySelector("#firstname").value.trim();    
    if(isEmpty("#firstname")){
        messages.push("- Field is empty");
        
    }

    if(messages.length < 1)
        if(!checkLength("#firstname",2,20)){
            messages.push("- Length must be between 2-20");  
        }

    
        if(!firstname.match("[a-zA-Z]+")){
            messages.push("- First name must match the right format");
        }  
    
    if(!checkType("#firstname","text")){
        messages.push("- Type must be text");
    }

    if(messages.length > 0){
        
        showAlert("First Name",messages);
        e.preventDefault();
        return
    }
    
    }

    //last name
    {
        let messages = []
        const lastname = document.querySelector("#lastname").value.trim();   
        if(isEmpty("#lastname")){
            messages.push("- Field is empty");
            
        }
    
        if(messages.length < 1)
            if(!checkLength("#lastname",2,20)){
                messages.push("- Length must be between 2-20");  
            }

        if(!lastname.match("[a-zA-Z]+")){
            messages.push("- Last name must match the right format");
        }     
        
        if(!checkType("#lastname","text")){
            messages.push("- Type must be text");
        }
    
        if(messages.length > 0){
            
            showAlert("Last Name",messages);
            e.preventDefault();
            return
        }
        
        }

    //gender
    {
        let gender = document.getElementById("gender").value.trim();
        let messages = []

        if(isEmpty("#gender")){
            messages.push("- Field is empty");
            
        }

        if(gender == "Gender"){
            messages.push("- must pick from list");  
        }

        if(messages.length < 1)
        if(!checkLength("#gender",4,6)){
            messages.push("- must pick from list");  
        }

        if(messages.length > 0){
        
            showAlert("Gender",messages);
            e.preventDefault();
            return
        }

    }

    //phone
    {
        let messages = [];
        let phone = document.getElementById("mobile").value.trim();

    if(isEmpty("#mobile")){
        messages.push("- Field is empty");
        
    }
    
    if(messages.length < 1){
    if(!phone.match("[0]{1}[5]{1}[0-9]{8}")){
        messages.push("- Mobile number must match the right format");
    }}

    

    if(!checkType("#mobile","text")){
        messages.push("- Type must be text");
    }

    if(messages.length > 0){
        
        showAlert("mobile Number",messages);
        e.preventDefault();
        return
    }

    }

    //Date of birth
    {
        let messages = [];
        let dateOfBirth = document.getElementById("date").value.trim();
        
        if(isEmpty("#date")){
            messages.push("- Field is empty");
            
        }

        if(messages.length < 1){
        if(!isValidDate(dateOfBirth)){
            messages.push("- Date is not valid");
        }}



    

    if(!checkType("#date","text")){
        messages.push("- Type must be text");
    }

    if(messages.length > 0){
        
        showAlert("Date of Birth",messages);
        e.preventDefault();
        return
    }



    }

    //choose a language
    {
        let messages = [];
        let radios = document.getElementsByName("language");
        let ischeck = false;
        for(i in radios){
            if(radios[i].checked){
                ischeck = true;
            }
        }

        if(!ischeck){
            messages.push("- please pick a language to communicate with");
        }
        



    if(messages.length > 0){
        
        showAlert("Date of Birth",messages);
        e.preventDefault();
        return
    }



    }

    //email address
    {
        let messages = [];
        let email = document.getElementById("email-contact-us").value.trim();

    if(isEmpty("#email-contact-us")){
        messages.push("- Field is empty");
        
    }

    if(messages.length < 1){
    if(!email.match("[a-zA-Z0-9-_\.]+@[a-zA-Z]+[.]{1}[a-zA-Z]{2,4}")){
        messages.push("- Email Adress must match the right format");
    }}

    

    if(!checkType("#email-contact-us","email")){
        messages.push("- Type must be email");
    }

    if(messages.length > 0){
        
        showAlert("Email Address",messages);
        e.preventDefault();
        return
    }

    }

    //Subject
    {
        let messages = []
    
        if(isEmpty("#subject")){
            messages.push("- Field is empty");
            
        }
    
        if(messages.length < 1)
            if(!checkLength("#subject",3,20)){
                messages.push("- Length must be between 3-20");  
            }
        
        if(!checkType("#subject","text")){
            messages.push("- Type must be text");
        }
    
        if(messages.length > 0){
            
            showAlert("Subject",messages);
            e.preventDefault();
            return
        }
        
        }

    //Subject
    {
        let messages = []
    
        if(isEmpty("#comment")){
            messages.push("- Field is empty");
            
        }
    
        if(messages.length < 1)
            if(!checkLength("#comment",10,600)){
                messages.push("- Length must be at least 10 characters");  
            }

    
        if(messages.length > 0){
            
            showAlert("Details",messages);
            e.preventDefault();
            return
        }
        
        }    

        
    
});

//close button
document.getElementById("close-oops").addEventListener("click",function(){

    document.getElementsByClassName("alert-section")[0].style.display = "none";
});

document.getElementById("hide-alert").addEventListener("click",function(){
    document.getElementsByClassName("alert-section")[0].style.display = "none";
});






//--------------login validation---------------
const loginForm = document.getElementById("loginForm");
if(loginForm != null)
loginForm.addEventListener("submit",e=>{

    //Email address

    {
        let messages = [];

    if(isEmpty("#email-login")){
        messages.push("- Field is empty");
        
    }

    if(messages.length > 0){
        
        showAlert("Email Address",messages);
        e.preventDefault();
        return
    }

    }
    //password
    {
        let messages = [];

    if(isEmpty("#password-login")){
        messages.push("- Field is empty");
        
    }

    if(messages.length > 0){
        
        showAlert("Password",messages);
        e.preventDefault();
        return
    }

    }
})


//--------------sign up validation---------------
const signupForm = document.getElementById("signupForm");
if(signupForm != null)
    signupForm.addEventListener("submit",e=>{
    

    //username
    {
        let messages = []
    
        if(isEmpty("#username")){
            messages.push("- Field is empty");
            
        }
    
        if(messages.length < 1)
            if(!checkLength("#username",2,20)){
                messages.push("- Length must be between 2-20");  
            }
        
        if(!checkType("#username","text")){
            messages.push("- Type must be text");
        }
    
        if(messages.length > 0){
            
            showAlert("Username",messages);
            e.preventDefault();
            return
        }
        
        }



    //email address
    {
        let messages = [];
        let email = document.getElementById("email").value.trim();

    if(isEmpty("#email")){
        messages.push("- Field is empty");
        
    }

    if(messages.length < 1){
    if(!email.match("[a-zA-Z0-9-_\.]+@[a-zA-Z]+[.]{1}[a-zA-Z]{2,4}")){
        messages.push("- Email Adress must match the right format");
    }}

    

    if(!checkType("#email","email")){
        messages.push("- Type must be email");
    }

    if(messages.length > 0){
        
        showAlert("Email Address",messages);
        e.preventDefault();
        return
    }

    }
    //password
    {
        let messages = [];
        let password = document.getElementById("password").value.trim();

    if(isEmpty("#password")){
        messages.push("- Field is empty");
        
    }

    if(messages.length < 1){
    if(!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,30}$")){
        messages.push("- Password must match the right format");
        messages.push("- At least 1 Uppercase");
        messages.push("- At least 1 Lowercase");
        messages.push("- At least 1 Number");
        messages.push("- At least 1 special character");
        messages.push("- min 8 max 30");
    }}

    

    if(!checkType("#password","password")){
        messages.push("- Type must be email");
    }

    if(messages.length > 0){
        
        showAlert("Password",messages);
        e.preventDefault();
        return
    }

    }

    e.preventDefault();

});

// General functions

function isValidDate(dateString) {
    // First check for the pattern
    var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

    if (!regex_date.test(dateString)) {
        return false;
    }

    // Parse the date parts to integers
    var parts = dateString.split("-");
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
}

function showAlert(componentname,messages){
    document.getElementsByClassName("alert-section")[0].style.display = "block";
        document.getElementsByClassName("component-name")[0].innerHTML= componentname;
        let ULlist = document.getElementsByClassName("issues-list")[0];
        ULlist.innerHTML = ""
    for(msg in messages){
        let li = document.createElement("li")
        li.innerHTML = messages[msg]
        ULlist.appendChild(li);
    } 

}


function checkType(selector,typeOfComponent){
    let element = document.querySelector(selector);
    if(element.type === typeOfComponent)
        return true
    
    return false
}

function checkLength(selector,min,max){

    let element = document.querySelector(selector).value;

    if(element.length > max || element.length < min)
        return false
    return true    
}

function isEmpty(selector){

    let element = document.querySelector(selector).value.trim();
    if(element.length == 0){

        return true
    }
    
    return false


}
