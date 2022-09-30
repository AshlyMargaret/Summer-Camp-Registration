

let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let mobileNumber = document.getElementById("mobileno");
let address = document.getElementById("address");
let image = document.getElementById("image_id");
let gender = document.getElementsByName("group3")
let select = document.getElementById("select_id");
let mainForm = document.getElementById("mainFormId");

function bindListners() {
    firstName.addEventListener("keyup", validateFirstName);
    firstName.addEventListener("focusout", validateFirstName);
    lastName.addEventListener("keyup", validateLastName);
    lastName.addEventListener("focusout", validateLastName);
    email.addEventListener("keyup", validateEmail);
    email.addEventListener("focusout", validateEmail);
    password.addEventListener("keyup", validatePassword);
    password.addEventListener("focusout", validatePassword);
    mobileNumber.addEventListener("keyup", validatePhoneNumber);
    mobileNumber.addEventListener("focusout", validatePhoneNumber);
    address.addEventListener("keyup", validateAddress);
    address.addEventListener("focusout", validateAddress);
    // image.addEventListener("keyup", validateFileUpload);
    // image.addEventListener("focusout", validateFileUpload);
    select.addEventListener("change",selectOptionValidation);
    select.addEventListener("focusout",selectOptionValidation);
}

// name validation

function isNameValidation(name) {
    let nameValidationRegex = /^[a-zA-Z ]+$/;
    if (name && name.match(nameValidationRegex) && name.trim().length > 0) {
        return true;
    }
    return false;
}


 function validateFirstName() {
    let firstNameValue = firstName.value;
    if (isNameValidation(firstNameValue)) {
        showErrorForInputField("error_img1", "error_msg1", null)
        return firstNameValue;
    } else {
        showErrorForInputField("error_img1", "error_msg1", "enter valid name");
        return null;
    }
}
 function validateLastName() {
    let lastNameValue = lastName.value;
    if (isNameValidation(lastNameValue)) {
        showErrorForInputField("error_img2", "error_msg2", null)
        return lastNameValue;
    } else {
        showErrorForInputField("error_img2", "error_msg2", "enter valid name");
        return null;
    }
}

// Email Validation

function isEmailValid(email) {
    let emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email && email.match(emailValidationRegex) && email.trim().length > 0) {
        return true;
    }
    return false;
}

 function validateEmail() {
    let emailValue = email.value;
    if (isEmailValid(emailValue)) {
       
        showErrorForInputField("error_img3", "error_msg3", null)
        return emailValue;
    }
    showErrorForInputField("error_img3", "error_msg3", "enter valid email");
    return undefined;
}

// password validation

function ispasswordValid(pswd) {
    let passwordValidationRegex = /^(?=.*\d).{4,8}$/;
    if (pswd && pswd.match(passwordValidationRegex) && pswd.trim().length > 0) {
        return true;
    }
    return false;
}

 function validatePassword() {
    let passwordValue = password.value;
    if (ispasswordValid(passwordValue)) {       
        showErrorForInputField("error_img4", "error_msg4", null)
        return passwordValue;
    }
    showErrorForInputField("error_img4", "error_msg4", "Password must be between 4 and 8 digits long and include at least one numeric digit.");
    return undefined;
}

// phone number validation

function isphoneNumberValid(number){
let phoneNumberValidationRegex = /^\d{10}$/;
if(number && number.match(phoneNumberValidationRegex) && number.trim().length > 0){
    return true;
}
    return false;
}

 function validatePhoneNumber() {
    let mobilenoValue = mobileNumber.value;
    if (isphoneNumberValid(mobilenoValue)) {        
        showErrorForInputField("error_img5", "error_msg5", null)
        return mobilenoValue;
    }
    showErrorForInputField("error_img5", "error_msg5", "phone number should be 10 digits");
    return undefined;
}

// address validation

function isaddressValid(address){
   
    if(address && address.trim().length > 0){
        return true;
    }
        return false;    
    }   
 function validateAddress() {
        let addressValue = address.value;
        if (isaddressValid(addressValue)) {    
            showErrorForInputField("error_img6", "error_msg6", null)
            return addressValue;
        }
        showErrorForInputField("error_img6", "error_msg6", "enter your address");   
        return undefined;
    }

 // select validation

  function selectOptionValidation(){
    let selectValue = select.value;
    if(selectValue){
        showErrorForInputField("error_img9", "error_msg9", null) 
        return selectValue;
    }else{
        showErrorForInputField("error_img9", "error_msg9", "Please Choose the option");
        return undefined;
    }
       
    }

//show error function
function showErrorForInputField(errorImageId, errorMesssageId, error) {
    document.getElementById(errorImageId).style.display = error ? "block" : "none";
    document.getElementById(errorMesssageId).innerHTML = error ? error : null;
}



// Dynamically Add Forms 

let addFormBtn = document.getElementById("addFormBtnId");
let dynamicForm = document.getElementById("dynamicFormId");
let counter = 1;
let activeIdArray = [];

 // Create a form dynamically

 addFormBtn.addEventListener("click",addForm);


 function addForm(e){
  e.preventDefault();

  addDynamicStudentForm(counter);

  console.log(`studentFormId-${counter}`);
  activeIdArray.push(counter);
  console.log("Active Form Ids Are",activeIdArray);
  console.log(`deleteInputId-${counter}`);
  var dltbtn = document.getElementById(`deleteInputId-${counter}`);
  console.log("deletebutton-",dltbtn); 
  let studForm =  document.getElementById(`studentFormId-${counter}`) 

  dltbtn.addEventListener("click", function(){
    deleteFunc(studForm);
  },false)
     counter++;
     console.log(activeIdArray);
  return;
 }

// function definition for student form deletion
 function deleteFunc(studentFormForDelete){
    console.log("select for delete",studentFormForDelete)  
    let deletedId =  studentFormForDelete.id;
    console.log("deleted id",deletedId)
    let text = deletedId;
    const myArray = text.split("-");
    console.log("my array is",myArray);
    let lastElement = myArray.slice(-1);
    let lastElementValue = parseInt(lastElement);
    console.log("last element is",lastElementValue);
    var myIndex =  activeIdArray.indexOf(lastElementValue);
    studentFormForDelete.remove();
    M.toast({html: '"Sucessfully Deleted!'})      

    if (myIndex !== -1) {
    activeIdArray.splice(myIndex, 1);
     }
     console.log(activeIdArray)
     console.log("Deleted Form Ids Are",activeIdArray);
    //    counter--;
       return;
     }
 
 // function definition for add form and input fields dynamically    

function addDynamicStudentForm(counter){
    
  // create heading element
  let h2Element = document.createElement("h5");
  h2Element.setAttribute("class","student_heading green-text")
  h2Element.innerHTML = `Student Registration Form`;

  // Create a form element
  let form = document.createElement("form");
  form.setAttribute("method", "");
  form.setAttribute("action", "");
  form.setAttribute("class","studentForm card-panel")
  form.setAttribute("id",`studentFormId-${counter}`)

  let hDiv = document.createElement("div");
  hDiv.setAttribute("class","headField")

  let inputDiv1 = document.createElement("div");
  inputDiv1.setAttribute("class","input-field")

  let inputDiv2 = document.createElement("div");
  inputDiv2.setAttribute("class","inputField input-field")

  let inputDiv3 = document.createElement("div");
  inputDiv3.setAttribute("class","genderField input-field")

  let inputDivFileUpload = document.createElement("div");
  inputDivFileUpload.setAttribute("class","file-field input-field")

  let deleteInputButton = document.createElement("div");
  deleteInputButton.setAttribute("class","input-field")


  // Create a label for Student Name
  let labelInputName = document.createElement("label");
  labelInputName.setAttribute("class","")
  labelInputName.setAttribute("id","fullNameLabel");
  labelInputName.setAttribute("for","fullNameLabel");
  labelInputName.innerHTML="Student Name";

  // create prefix icon for Student Name
  let studentNamePrefix = document.createElement("i");
  studentNamePrefix.setAttribute("class","material-icons prefix")
  studentNamePrefix.innerHTML="account_circle";
  
  

   // Create an input type field for Student Name
  let inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id",`studentfullNameId-${counter}`);
  inputName.setAttribute("class","studentfullNamecls input-field");


  

   // Create a label for DOB
   let labelDobName = document.createElement("label");
   labelDobName.setAttribute("class","active")
   labelDobName.innerHTML="DOB";
 
    // Create an input type field for DOB
   let dob = document.createElement("input");
   dob.setAttribute("type", "text");
   dob.setAttribute("class","datepicker")
   dob.setAttribute("id", `studentdobId-${counter}`);
  
  
   
    // create prefix icon for DOB
  let dobPrefix = document.createElement("i");
  dobPrefix.setAttribute("class","material-icons prefix")
  dobPrefix.innerHTML="date_range";


    // Create an input for gender

    let genderMale = document.createElement("input");
    genderMale.setAttribute("type","radio");
    genderMale.setAttribute("value","male");
    genderMale.setAttribute("name","group1");
    genderMale.setAttribute("class","with-gap");
    genderMale.setAttribute("id",`studentGenderMale-${counter}`);
    genderMale.onclick=(event)=>console.log(event);

    let  genderFeMale = document.createElement("input");
    genderFeMale.setAttribute("type","radio");
    genderFeMale.setAttribute("value","female");
    genderFeMale.setAttribute("id",`studentGenderFemale-${counter}`);
  

    let genderundisclosed = document.createElement("input");
    genderundisclosed.setAttribute("type","radio");
    genderundisclosed.setAttribute("value","undisclosed");
    genderundisclosed.setAttribute("id",`studentGenderUndisc-${counter}`);
    
// span tag for gender input
    let genderMaleSpan = document.createElement("span");
    genderMaleSpan.innerHTML ="Male"

    let genderFemaleSpan = document.createElement("span");
    genderFemaleSpan.innerHTML ="Female"

    let genderundisclosedSpan = document.createElement("span");
    genderundisclosedSpan.innerHTML ="Undisclosed"

//   Create an input file for student image
  let BtnDiv = document.createElement("div"); 
  BtnDiv.setAttribute("class","btn") 

  let uploadSpan = document.createElement("span")
  uploadSpan.innerHTML="Upload Student Image"

// create  icon for upload image
     let uploadImage = document.createElement("i");
     uploadImage.setAttribute("class","material-icons")
     uploadImage.innerHTML="insert_photo";

  let StudentImageInput = document.createElement("input");
  StudentImageInput.setAttribute("type","file");
  StudentImageInput.setAttribute("class","fileImage");
  StudentImageInput.setAttribute("id",`studentImageId-${counter}`)
 

  let filePathWrapperDiv = document.createElement("div");
  filePathWrapperDiv.setAttribute("class","file-path-wrapper")

  let filepathInput = document.createElement("input");
  filepathInput.setAttribute("type","text")
  filepathInput.setAttribute("class","file-path")

  let imagePreview = document.createElement("div")
  imagePreview.setAttribute("id",`imagePreview-${counter}`)
 


// create  icon for delete
let deleteIcon = document.createElement("i");
deleteIcon.setAttribute("class","material-icons delete_icon_btn")
deleteIcon.innerHTML="delete";
deleteIcon.setAttribute("id",`deleteInputId-${counter}`)
deleteIcon.type = 'button';
deleteIcon.value = "Delete";
deleteIcon.name = 'deleteForm';




//Appending Section

  // Append the header element to the form
  form.appendChild(hDiv);
  hDiv.appendChild(h2Element);

  // Append the full name input to the form
  form.appendChild(inputDiv1); 
  inputDiv1.appendChild(studentNamePrefix)
  inputDiv1.appendChild(inputName);
  inputDiv1.appendChild(labelInputName);

  
  
 // Append the input date element to the form
  form.appendChild(inputDiv2)
  inputDiv2.appendChild(dobPrefix);
  inputDiv2.appendChild(dob);
  inputDiv2.appendChild(labelDobName);
  
  $(document).ready(function(){
    $('.datepicker').datepicker();
  });


// Append Upload File 
  form.appendChild(inputDivFileUpload);
  inputDivFileUpload.appendChild(BtnDiv);
  BtnDiv.appendChild(uploadImage);
  BtnDiv.appendChild(StudentImageInput);
  
  
  inputDivFileUpload.appendChild(filePathWrapperDiv);
  filePathWrapperDiv.appendChild(filepathInput);
  form.appendChild(imagePreview);

  form.appendChild(deleteInputButton);
  deleteInputButton.appendChild(deleteIcon) 
  

  dynamicForm.appendChild(form);
}
// validate student name
function validateStudentName(studentNameInputField){
    let StudentNameValue = studentNameInputField.value;
     if(isNameValidation(StudentNameValue)){
         return StudentNameValue;
     }  
     M.toast({html: '"Enter Vald Name!'})
     return null;          
 }

//validate student dob

 function isDateSelected(studentDobInputField){ 
     let studentDobValue = studentDobInputField.value;
     var today =new Date();
     var inputDate = new Date(studentDobValue);
     var age = today.getFullYear() - inputDate.getFullYear();
     console.log("age is"+age);

     if (inputDate.value == ""){
         M.toast({html: '"Please enter a valid birthday!'})
         return false;
     } else if (inputDate > today) {
         M.toast({html: '"Please enter a valid birthday!'})
         return false;
     } else if(age>15){
         M.toast({html: '"above 15 ages are not allowed!'})
         return false;
     }else {
         return studentDobValue;
     }
 }

// validate image file

function fileValidation(studentImageInputField){
let studentImageValue = studentImageInputField.value;
console.log(studentImageValue);

// Allowing file type

let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
if (!allowedExtensions.exec(studentImageValue)&& !studentImageValue) {

 M.toast({html: '"Enter Vald File Type!',classes: 'rounded'})
 return false;

}else{          
     return studentImageValue;  

}    
}

// event listners


bindListners();

// constructor method for creating object

function StudentObj(studentNameVal,studentBdayVal,studentImageVal){

    this.studentName=studentNameVal;
    this.studentBirthday=studentBdayVal;
    this.studentProfileImage=studentImageVal;

}

function ParentObject(firstNameVal,secondNameVal,emailVal,passwordVal,addressVal,phonenumberVal,SelectOptionVal){
    this.parentFirstName=firstNameVal;
    this.parentLastName=secondNameVal;
    this.parentEmail=emailVal;
    this.parentPassword=passwordVal;
    this.parentAddress=addressVal;
    this.parentPhoneNumber=phonenumberVal;
    this.parentDistrict=SelectOptionVal;
}

function RegistrationFormObj(parentObject,studentObject){
    this.parentObject = parentObject;
    this.studentObjects = studentObject;
}





// form submision function

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
     
        const firstName = validateFirstName();
        console.log(firstName);
        const secondName = validateLastName();
        console.log(secondName);
        const email = validateEmail();
        console.log(email);
        const password = validatePassword();
        console.log(password);
        const phonenumber = validatePhoneNumber();
        console.log(phonenumber);
        const address = validateAddress();
        console.log(address);
        const SelectOption = selectOptionValidation();
        console.log(SelectOption);

    
        if (!firstName || !secondName || !email || !password || !phonenumber || !address || !SelectOption){
            return;
     }

   const parentObject= parentObjectFunc(firstName,secondName,email,password,phonenumber,address,SelectOption)  

     console.log(parentObject);
    
// getting student input data values using for loop based how many student form created

let studentObjArray=[];

for(let i=0;i<activeIdArray.length;i++){
       
    console.log(activeIdArray[i]);
    let studentFormId = activeIdArray[i];

       let studentNameInputField =document.getElementById(`studentfullNameId-${studentFormId}`);
       let studentDobInputField = document.getElementById(`studentdobId-${studentFormId}`);
       let studentImageInputField = document.getElementById(`studentImageId-${studentFormId}`);

       const studentName =validateStudentName(studentNameInputField);
       console.log(studentName);
    
       const studentBday = isDateSelected(studentDobInputField);
       console.log(studentBday);
       
       const studentImage = fileValidation(studentImageInputField)
       console.log(studentImage);
   
       if(!studentName || !studentBday || !studentImage){   

            M.toast({html: '"Registration Denined!'})
              return;
       }  
  
      const studentObj = new StudentObj(studentName,studentBday,studentImage)
      console.log("last student form obj is:",studentObj) // here display the last loop element

    //   if(i%2==0){
    //     const studentObj =  new StudentObj(studentName,studentBday,studentImage)
    //     studentObjArray.push(studentObj);
    //     console.log("last student form obj is:",studentObj)
    //   }
    // else{const studentObj = new StudentObj(studentName)
    //     studentObjArray.push(studentObj);  
    //     console.log("last student form obj is:",studentObj)    
    // }
       
  
}  // for loop end
        console.log("total added student form obj is:",studentObjArray);  // display multiple student object

        M.toast({html: '"Sucessfully Regitred!'}) // Show succesfull message here

// creating registrationFormObject object for displaying
            
           const registrationFormObject = registrationFormObjFunc(parentObject,studentObjArray)
           console.log("Registration Form Objects is:",registrationFormObject)

        
        // window.location.href = "./sucess.html";  //if form submission is sucessfull ,Redirected to next page
     
        // document.forms[0].reset();      // clear the form fields for next registration
});


function parentObjectFunc(firstNameVal,secondNameVal,emailVal,passwordVal,addressVal,phonenumberVal,SelectOptionVal){
     
        let parentRegObj ={
                parentFirstName:firstNameVal,
                parentLastName:secondNameVal,
                parentEmail:emailVal,
                parentPassword:passwordVal,
                parentAddress:addressVal,
                parentPhoneNumber:phonenumberVal,
                parentDistrict:SelectOptionVal
        }
        console.log(parentRegObj);
        return parentRegObj;
    }
function studentobjFunc(studentNameVal,studentBdayVal,studentImageVal){
        
        let studentObj = {
                    studentName:studentNameVal,
                    studentBirthday:studentBdayVal,
                    studentProfileImage:studentImageVal
                 }
                 console.log(studentObj);
                 return studentObj;
    }

function registrationFormObjFunc(parentObjectVal,studentObjectVal){
    let registrationFormObj={
        parentObject :parentObjectVal,
        studentObject : studentObjectVal
    }
      console.log(registrationFormObj);
      return registrationFormObj;
    }



























// function definition for object creation

// function parentObjectFunc(firstNameVal,secondNameVal,emailVal,passwordVal,addressVal,phonenumberVal,SelectOptionVal){
     
//     let parentRegObj ={
//             parentFirstName:firstNameVal,
//             parentLastName:secondNameVal,
//             parentEmail:emailVal,
//             parentPassword:passwordVal,
//             parentAddress:addressVal,
//             parentPhoneNumber:phonenumberVal,
//             parentDistrict:SelectOptionVal
//     }
//     console.log(parentRegObj);
//     return parentRegObj;
// }


// function studentobjFunc(studentNameVal,studentBdayVal,studentImageVal){
        
//     let studentObj = {
//                 studentName:studentNameVal,
//                 studentBirthday:studentBdayVal,
//                 studentProfileImage:studentImageVal
//              }
//              console.log(studentObj);
//              return studentObj;
// }

// parentObjectFunc(firstName,secondName,email,password,phonenumber,address,SelectOption)  
//  studentobjFunc(studentName,studentBday,studentImage);  // creating object for displaying


// for display purpose using json
// registraionDetails.push(details);
// console.warn('added',registraionDetails)
// console.log("added",registraionDetails);

// const myJSON = '\n' + JSON.stringify(registraionDetails, '\t',2);
// document.getElementById("demo").innerHTML = myJSON;


// saving to local storage parent details
// localStorage.setItem( "Summer Registration Camp Details" , JSON.stringify(registraionDetails) )
// localStorage.setItem("First_Name",firstName);
// localStorage.setItem("Last_Name",secondName);
// localStorage.setItem("Email",email);
// localStorage.setItem("Password",password);
// localStorage.setItem("Phone Number",phonenumber);
// localStorage.setItem("Address",address);
// localStorage.setItem("District",SelectOption);

//    // json object for student details 
//        let detailsStudent = {
//         sname:studentName,
//         bday:studentBday,
//         image:studentImage
//     }
    
    // // for display purpose using json
    // sudentDetailsArray.push(detailsStudent)
    // console.warn('added',sudentDetailsArray)
    // console.log("added",sudentDetailsArray);
    
    //  const studentJSON = '\n' + JSON.stringify(sudentDetailsArray, '\t',2);
    // document.getElementById("demo1").innerHTML = studentJSON; 

    // Delete Form button
// let newDeleteButton = document.createElement('input');
// newDeleteButton.setAttribute("id",`deleteInputId-${counter}`)
// newDeleteButton.type = 'button';
// newDeleteButton.value = "Delete";
// newDeleteButton.name = 'deleteForm';









// const studentObj = new StudentObj(studentName,studentBday,studentImage)
// console.log("last student form obj is:",studentObj) // here display the last loop element
// studentObjArray.push(studentObj);


// const parentObject = new ParentObject(firstName,secondName,email,password,phonenumber,address,SelectOption)
// console.log("parent object is:",parentObject)





//constructor method for creating object

// function StudentObj(studentNameVal,studentBdayVal,studentImageVal){

//     this.studentName=studentNameVal;
//     this.studentBirthday=studentBdayVal;
//     this.studentProfileImage=studentImageVal;

// }

// function ParentObject(firstNameVal,secondNameVal,emailVal,passwordVal,addressVal,phonenumberVal,SelectOptionVal){
//     this.parentFirstName=firstNameVal;
//     this.parentLastName=secondNameVal;
//     this.parentEmail=emailVal;
//     this.parentPassword=passwordVal;
//     this.parentAddress=addressVal;
//     this.parentPhoneNumber=phonenumberVal;
//     this.parentDistrict=SelectOptionVal;
// }

// function RegistrationFormObj(parentObject,studentObject){
//     this.parentObject = parentObject;
//     this.studentObjects = studentObject;
// }

// console.log("Registration Form Objects is:",registrationFormObject)
// registrationFormObjFunc(parentObject,studentObjArray)