/* Send dates */
function submitForm(event){
    event.preventDefault();
    let form = document.querySelector('.AddStudentForm').elements;
    console.log(form);
    const parent = document.querySelector('.ErrorsBlock');
    const paragraph = document.createElement('p');

    /* Validation */
    if (form[0].value.length < 3 || form[0].value.length >= 16) {
        document.getElementById("name").classList.add("invalid");
        document.getElementById('error').classList.remove("hide");
        document.getElementById('textErr').classList.remove("hide");
    }
    else if(form[1].value.length < 3 || form[1].value.length >= 16){
        document.getElementById("surname").classList.add("invalid");
        document.getElementById('error').classList.remove("hide");
        document.getElementById('textErr').classList.remove("hide");
    }
    else{
        fetch('save-form', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                "input-0" : form[0].value,
                "input-1" : form[1].value,
                "input-2" : form[2].value,
                "input-3" : form[3].value,
                "input-4" : form[4].value,
                "input-5" : form[5].value,
                "input-6" : form[6].value,
                "input-7" : form[7].value,
                "input-8" : form[8].value
            })
        })
            .then(res => res.text())
            .then(res => paragraph.innerHTML = res).then(res => parent.append(paragraph));
    }

}


if(document.querySelector('.submitBTN')){
    document.querySelector('.submitBTN').addEventListener('click', submitForm);
}


/* Edit dates */
function UpdateForm(event){
    event.preventDefault();
    let form = document.querySelector('.AddStudentForm').elements;
    console.log(form);
    const parent = document.querySelector('.ErrorsBlock');
    const paragraph = document.createElement('p');

    /* Validation */
    if (form[0].value.length < 3 || form[0].value.length >= 16) {
        document.getElementById("name").classList.add("invalid");
        document.getElementById('error').classList.remove("hide");
        document.getElementById('textErr').classList.remove("hide");
    }
    else if(form[1].value.length < 3 || form[1].value.length >= 16){
        document.getElementById("surname").classList.add("invalid");
        document.getElementById('error').classList.remove("hide");
        document.getElementById('textErr').classList.remove("hide");
    }
    else{
        var StudentID = document.querySelector('#StudentID').value;
        console.log(StudentID);
        fetch('update-form?id=' + StudentID, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                "input-0" : form[0].value,
                "input-1" : form[1].value,
                "input-2" : form[2].value,
                "input-3" : form[3].value,
                "input-4" : form[4].value,
                "input-5" : form[5].value,
                "input-6" : form[6].value,
                "input-7" : form[7].value,
                "input-8" : form[8].value,
            })
        })
            .then(res => res.text())
            .then(res => paragraph.innerHTML = res).then(res => parent.append(paragraph));
    }
}

if(document.querySelector('.UpdateBTN')){
    document.querySelector('.UpdateBTN').addEventListener('click', UpdateForm);
}

/* Delete dates */
function DeleteStudent(event){
    event.preventDefault();
    var answer = window.confirm("You want to delete this student?");
    var StudentID = this.value;
    console.log(StudentID);
    if (answer) {
        fetch('delete-form?id=' + StudentID, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
            .then(res => res.text().then(res => console.log(res)));
        let element = document.getElementById(StudentID);
        element.remove();
    }
}

if(document.querySelector('.DeleteBTN')){
    let blocks = document.querySelectorAll('.DeleteBTN');
    for(let i = 0; i < blocks.length; i++){
        blocks[i].addEventListener('click', DeleteStudent);
    }
}
