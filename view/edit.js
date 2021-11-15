
/* Update student form */
module.exports = {
    formName: '<div class="ErrorsBlock"><div id="error" class="hide">' +
        '<p id="textErr" class="hide">The length of the name and surname must not be less than 3 characters and longer than 16 characters!</p>' +
        '</div></div><br><form class="AddStudentForm">' +
        '<label for="name">Student name:</label><br>' +
        '<input type="text" name="name" class="form-control" id="name" placeholder="Enter student name..." value="',
    formSurname: '<br><br><label for="surname">Student surname:</label><br>' +
        ' <input type="text" name="surname" class="form-control" id="surname" placeholder="Enter student surname..." value="',
    formYear: '<br><br><label>Year:</label><br><select class="form-control" id="SelectYear" value="',
    option: '<option v-for="(year, index) in years" :value="year.value" :key="index">{{year.label}}</option></select><br><br>' +
        '<div class="GradesSelect"><div><input type="number" value="',
    formCourse_1: '<label> - Special Mathematics</label></div><br>' +
        '<div><input type="number" value="',
    formCourse_2: '<label> - Linear Algebra</label></div><br>' +
        '<div><input type="number" value="',
    formCourse_3: '<label> - Physics</label></div><br>' +
        '<div><input type="number" value="',
    formCourse_4: '<label> - Applied Informatics</label></div><br>' +
        '<div><input type="number" value="',
    formCourse_5: '<label> - Power Electronics</label></div><br>' +
        '<div><input type="number" value="',
    formCourse_6: '<label> - Communication systems</label></div><br>' +
        '</div><br><div class="submitBlock"><button title="Update" class="UpdateBTN" type="button">Update</button></div></form>'

}


