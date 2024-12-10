// extract  each node using id
const fnameNode = $("#email-input");
const passNode = $("#password-input");
const errorNode = $("#error-message");
const checkNode = $("#showp");
const formNode=$("#enrollmentForm");
// console.log(emailNode)

const namePattern = new RegExp("^[A-Za-z ]*$");

let fname = "";
let pass = "";

fnameNode.keyup(() => validate1())
passNode.on('keyup', () => validate2())
formNode.on("submit", ()=>validateAll())

const invalidBorder = "4px solid red";
const validBorder = "4px solid green";

function validate1() {
    errorNode.text("");
    fname = fnameNode.val();
    fnameNode.css("border", invalidBorder);
    //console.log(namePattern.test(fname));
    if (fname == "") {
        errorNode.text("Email is required");
        // return false;
    }
    // else if(namePattern.test(fname)==false){
    //     errorNode.text("first name must contain only alphabet")
    // return false;
    // }
    else {
        fnameNode.css({ border: validBorder })
        return true;
    }

}

function validate2() {
    errorNode.text("")
    passNode.css("border", invalidBorder);
    pass = passNode.val();
    //console.log(pass);
    if (pass == "") {
        errorNode.text('Password is required')
        // return false;
    }
    // else if(passwordPattern.test(pass)==false){
    //      errorNode.text("password must contain atleast one small alphabet, capital alphabet, digit, special symbol(!#@%&?). password must be 5 to 12 characters long");
    //      return false;
    // }
    else {
        passNode.css("border", validBorder)
        return true;
    }
}

$("#showp").change(() => togglePass());
function togglePass() {
    // console.log( $("#showp").prop("checked")); 
    if ($("#showp").prop("checked"))
        passNode.attr("type", "text")
    else
        passNode.attr("type", "password")
}

function validateAll() {
    const state1 = validate1();
    const state2 = validate2();
    if (!state1 || !state2) {
        errorNode.text('All fields are required');
        return false; // Prevent form submission
    }
    return true; // Allow submission if valid
}