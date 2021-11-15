<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project_X</title>
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
        <li><a href="#">FAQs</a></li>
        <li><a href="#">About</a></li>
    </ul>
</header>

<!-- BODY -->
<section class="container">
    <div class="Main">
        <h1 style="text-align: center">Students:</h1><br>
        <table>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Year</th>
                <th>Special Mathematics</th>
                <th>Linear Algebra</th>
                <th>Physics</th>
                <th>Applied Informatics</th>
                <th>Power Electronics</th>
                <th>Communication systems</th>
                <th>Average grade</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>Andrei</td>
                <td>Bozu</td>
                <td>III</td>
                <td>6.7</td>
                <td>8.5</td>
                <td>6.7</td>
                <td>7.4</td>
                <td>6.2</td>
                <td>9.1</td>
                <td>7.5</td>
                <th class="ActionBlock">
                    <button type="button" class="ActionBTN"><img src="public/assets/edit.png" title="Edit"></button>
                    <button type="button" class="ActionBTN DeleteBTN"><img src="public/assets/delete.png" title="Delete"></button>
                </th>
            </tr>

        </table>
    </div>
</section>

<!-- FOOTER -->
    <footer>
        <div class="col-md-4 d-flex align-items-center">
            <span class="text-muted">© 2021 Created by Bozu Andrei</span>
        </div>
    </footer>
<script src="public/js/vue.global.min.js"></script>
<script src="public/js/vendor.js"></script>
</body>
</html>