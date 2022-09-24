
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


   // file upload validation

// function isfileUploadValid(image){
//     let fileUploadValidationRegex = /([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$/;
//     if(image && image.match(fileUploadValidationRegex) && image.trim().length > 0){
//         return true;
//     }
//         return false;
    
//     }
    
    
//     function validateFileUpload() {
//         let imageValue = image.value;
//         if (isfileUploadValid(imageValue)) {  
//             showErrorForInputField("error_img7", "error_msg7", null)
//             return ;
//         }
//         showErrorForInputField("error_img7", "error_msg7", "allowing Image files only[.png,.jpg,.gif]");   
//         return undefined;
//     } 

    // radio button validation

    // function genderValidation(){
    //     genderValue = gender.length;      
    //     for(var i=0; i<gender.length;i++){
    //         if(gender[i].checked == true){
    //             console.log(gender[i]);
    //             showErrorForInputField("error_img8", "error_msg8", null) 
    //             return true;             
    //         }
    //     }
    //     if(!genderValue){
    //         alert("Please Choose the gender");
    //         showErrorForInputField("error_img8", "error_msg8", "Please Choose the gender");
    //         return false;
    //     }
    // }

 // select validation

 function selectOptionValidation(){
    selectValue = select.value;
    if(selectValue){
        showErrorForInputField("error_img9", "error_msg9", null) 
        return true;
    }else{
        showErrorForInputField("error_img9", "error_msg9", "Please Choose the option");
        return false;
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


 function addForm(event){
  event.preventDefault();

  addDynamicStudentForm(counter);

  console.log(`studentFormId-${counter}`);

  activeIdArray.push(counter);
   
  console.log("Active Form Ids Are",activeIdArray);


  console.log(`deleteInputId-${counter}`);
  var dltbtn = document.getElementById(`deleteInputId-${counter}`);
  console.log("deletebutton-",dltbtn);
  
  let studForm =  document.getElementById(`studentFormId-${counter}`) 
  dltbtn.addEventListener("click",deleteFunc)
   
   function deleteFunc(){
    console.log("select for delete",studForm)
   
    let deletedId =  studForm.id;
    console.log("deleted id",deletedId)

    let text = deletedId;
    const myArray = text.split("-");
    console.log("my array is",myArray);

   
    let lastElement = myArray.slice(-1);
    let lastElementValue = parseInt(lastElement);
    console.log("last element is",lastElementValue);
    var myIndex =  activeIdArray.indexOf(lastElementValue);
    studForm.remove();

    if (myIndex !== -1) {
    activeIdArray.splice(myIndex, 1);
     }
    console.log(activeIdArray)

     console.log("Deleted Form Ids Are",activeIdArray);
    //    counter--;
       return;
     }

     counter++;
     console.log(activeIdArray);

  return;
 }

 

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
  

   // Create an input type field for Student Name
  let inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id",`studentfullNameId-${counter}`);
  inputName.setAttribute("class","studentfullNamecls");
  inputName.setAttribute("required"," ");
  inputName.required = true;     
  

   // Create a label for DOB
   let labelDobName = document.createElement("label");
   labelDobName.setAttribute("class","active")
   labelDobName.innerHTML="DOB";
 
    // Create an input type field for DOB
   let dob = document.createElement("input");
   dob.setAttribute("type", "date");
   dob.setAttribute("id", `studentdobId-${counter}`);
   dob.setAttribute("required"," ");
   dob.required = true;    


   // Create a label for gender

   let labelgender = document.createElement("label");
  
  
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

  let StudentImageInput = document.createElement("input");
  StudentImageInput.setAttribute("type","file");
  StudentImageInput.setAttribute("id",`studentImageId-${counter}`)
 

  let filePathWrapperDiv = document.createElement("div");
  filePathWrapperDiv.setAttribute("class","file-path-wrapper")

  let filepathInput = document.createElement("input");
  filepathInput.setAttribute("type","text")
  filepathInput.setAttribute("class","file-path")

  let imagePreview = document.createElement("div")
  imagePreview.setAttribute("id",`imagePreview-${counter}`)
 
// Delete Form button
let newDeleteButton = document.createElement('input');
newDeleteButton.setAttribute("id",`deleteInputId-${counter}`)
newDeleteButton.type = 'button';
newDeleteButton.value = "Delete";
newDeleteButton.name = 'deleteForm';



//Appending Section

  // Append the header element to the form
  form.appendChild(hDiv);
  hDiv.appendChild(h2Element);

  // Append the full name input to the form
  form.appendChild(inputDiv1);
  inputDiv1.appendChild(labelInputName);
  inputDiv1.appendChild(inputName);
  
 // Append the input date element to the form
  form.appendChild(inputDiv2)
  inputDiv2.appendChild(labelDobName);
  inputDiv2.appendChild(dob);

// Append Radio Button
//   form.appendChild(inputDiv3)

//   inputDiv3.appendChild(genderMale);
//   inputDiv3.appendChild(genderMaleSpan);

//   inputDiv3.appendChild(genderFeMale);
//   inputDiv3.appendChild(genderFemaleSpan);

//   inputDiv3.appendChild(genderundisclosed);
//   inputDiv3.appendChild(genderundisclosedSpan);

// Append Upload File 
  form.appendChild(inputDivFileUpload);
  inputDivFileUpload.appendChild(BtnDiv);
  BtnDiv.appendChild(uploadSpan);
  BtnDiv.appendChild(StudentImageInput);
  inputDivFileUpload.appendChild(filePathWrapperDiv);
  filePathWrapperDiv.appendChild(filepathInput);
  form.appendChild(imagePreview);

  form.appendChild(deleteInputButton);
  deleteInputButton.appendChild(newDeleteButton)
 
  
  

  dynamicForm.appendChild(form);
}

// event listners
bindListners();

 

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
    for(let i=0;i<activeIdArray.length;i++){
       
     console.log(activeIdArray[i]);
     let studentId = activeIdArray[i];

        console.log(`studentfullNameId-${studentId}`);
        console.log(`studentdobId-${studentId}`);
        console.log(`studentImageId-${studentId}`);
        console.log(`imagePreview-${studentId}`);
    
       
       
        let StudentNameValue = document.getElementById(`studentfullNameId-${studentId}`).value;
        let studentDobValue = document.getElementById(`studentdobId-${studentId}`).value;
        let studentImageId = document.getElementById(`studentImageId-${studentId}`);
        let imagePreview = document.getElementById(`imagePreview-${studentId}`);
        console.log(StudentNameValue);
        console.log(studentDobValue);
       
        
// validate student name
        function validateStudentName(){
           
            if(isNameValidation(StudentNameValue)){
                return StudentNameValue;
            }
            return null;
          
        }

//validate student dob

        function isDateSelected(){ 
            var today =new Date();
            var inputDate = new Date(studentDobValue);
            var age = today.getFullYear() - inputDate.getFullYear();
            console.log("age is"+age);

            if (inputDate.value == " "){
                alert("Please enter a valid birthday");
                return false;
            } else if (inputDate > today) {
                alert("Please enter a valid birthday");
                return false;
            } else if(age>15){
                alert("below 15 ages are not allowed");
                return false;
            }else {
                return true;
            }
        }

 // validate image file
 
 function fileValidation(){
    let studentImageValue = studentImageId.value;
    console.log(studentImageValue);

    // Allowing file type

    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(studentImageValue)) {
        alert('Invalid file type');
        studentImageValue = '';
        return false;

    }else{

       
        // if(studentImageId.files && studentImageId.files[0]){
        //     var reader = new FileReader();
            
        //     reader.onload = function(e) {
        //     imagePreview.innerHTML ='<img src="' + e.target.result+ '"/>';
        // };
        //     reader.readAsDataURL(studentImageId.files[0]);

       

            return true;
    
  }    
 }

    
 }
 // for loop end
      
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

//student input values
         const studentName =validateStudentName();
         console.log(studentName);

         const studentBday = isDateSelected();
         console.log(studentBday);

         const studentImage = fileValidation()
         console.log(studentImage);

        

        if (firstName && secondName && email && password && phonenumber && address && SelectOption &&  studentName && studentBday && studentImage) {
            alert("sucessfully registered");
            console.log("sucessfully registered");
            return true;
        }
        alert("Registration Denined"); 
        console.log("not working");
        return false;
    
});


