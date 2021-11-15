<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project_X » Students</title>
    <link rel="stylesheet" type="text/css" href="public/css/style.css">
    <link href="public/assets/a_logo.png" rel="shortcut icon" type="image/x-icon" />
</head>
<body>
<!-- HEADER -->
<header>
    <a href="/" class="LogoSite" title="Project_X">
        <span><img id="logo" src="public/assets/a_logo.png">Header</span>
    </a>

    <ul id="NavBTN">
        <li><a href="/">Home</a></li>
        <li><a href="create">Add Students</a></li>
        <li><a href="edit_course">Edit Courses</a></li>
        <li><a href="FAQ">FAQs</a></li>
        <li><a href="about">About</a></li>
    </ul>
</header>

<!-- BODY -->
<section class="container" >
    <div class="Main">
      <div class="ErrorsBlock">
        <div id="error" class="hide">
          <p id="textErr" class="hide">The length of the name and surname must not be less than 3 characters and longer than 16 characters!</p>
        </div>
      </div><br>
        <form class="AddStudentForm">
            <label for="name">Student name:</label><br>
            <input type="text" name="name" v-model.trim="name" class="form-control" id="name" placeholder="Enter student name..."
            :style="{border: name.length > 16 ? '2px solid red' : ''}"><br><br>

            <label for="surname">Student surname:</label><br>
            <input type="text" name="surname" v-model.trim="surname" class="form-control" id="surname" placeholder="Enter student surname..."
            :style="{border: surname.length > 16 ? '2px solid red' : ''}"><br><br>


            <label>Year:</label><br>
            <select class="form-control" id="SelectYear" v-model="year">
                <option v-for="(year, index) in years" :value="year.value" :key="index">{{year.label}}</option>
            </select><br><br>

            <div class="GradesSelect">
                <div>
                  <input type="number" v-model="Course1"
                  :class="Course1 > 10 ? 'invalid_grade' : ''">
                  <label> - Special Mathematics</label><br><br>
                </div>
                <div>
                  <input type="number" v-model="Course2"
                  :class="Course2 > 10 ? 'invalid_grade' : ''">
                  <label> - Linear Algebra</label><br><br>
                </div>
                <div>
                  <input type="number" v-model="Course3"
                  :class="Course3 > 10 ? 'invalid_grade' : ''">
                  <label> - Physics</label><br><br>
                </div>
                <div>
                  <input type="number" v-model="Course4"
                  :class="Course4 > 10 ? 'invalid_grade' : ''">
                  <label> - Applied Informatics</label><br><br>
                </div>
                <div>
                  <input type="number" v-model="Course5"
                  :class="Course5 > 10 ? 'invalid_grade' : ''">
                  <label> - Applied Informatics</label><br><br>
                </div>
                <div>
                  <input type="number" v-model="Course6"
                  :class="Course6 > 10 ? 'invalid_grade' : ''">
                  <label> - Communication systems</label><br><br>
                </div>

            </div><br>
            <div class="submitBlock">
                <button title="Submit" class="submitBTN" @click="Submit()" type="button">Submit</button>
            </div>
        </form>
    </div>
</section>

<!-- FOOTER -->
<footer>
    <div class="col-md-4 d-flex align-items-center">
        <span class="text-muted">© 2021 Created by Bozu Andrei</span>
    </div>
</footer>
<script src="public/js/vue.global.min.js"></script>
<script>

  const StudentForm = {
    data() {
      return {
        name: '',
        surname: '',
        year: '1',
        years: [
          {
            label: 'First year (I)',
            value: '1'
          },
          {
            label: 'Second year (II)',
            value: '2'
          },
          {
            label: 'Third year (III)',
            value: '3'
          },
          {
            label: 'Fourth year (IV)',
            value: '4'
          }
        ],
        Course1: '0.00',
        Course2: '0.00',
        Course3: '0.00',
        Course4: '0.00',
        Course5: '0.00',
        Course6: '0.00',
      }
    },
    methods:{
      Submit(){

      }
    }
  }
  Vue.createApp(StudentForm).mount('.Main')
</script>
<script src="public/js/vendor.js"></script>
</body>
</html>