require('dotenv').config()
const fs = require('fs');  //Connect file-system
const http = require('http');   //Connect localserver
const path = require('path');
const url = require('url');
const jwt = require('jsonwebtoken');


const db = require('./db');
const Students = db.content;
const PORT = process.env.PORT;
const HOST = process.env.HOST;



var server = http.createServer(function (req, res){
    console.log("URL is: " + req.url);

    /* Routing */
    if(req.method == 'GET'){
        let urlRequest = url.parse(req.url, true);
        switch (urlRequest.pathname) {

            case '/':
                /* Extract dates from DB */
                Students.findAll({raw:true}).then(users=>{
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

                    let head = fs.readFileSync(__dirname + '/static/blocks/head.html');
                    let header = fs.readFileSync(__dirname + '/static/blocks/header.html');
                    let table_head = fs.readFileSync(__dirname + '/static/blocks/table.html');
                    res.write(head + header +'<h1 style="text-align: center">Students:</h1><br>'+ '<table>' + table_head);

                    //Ray helper
                    for(let i = 0; i < users.length; i++){
                        let token = jwt.sign({
                            userName: users[i]['Name'], userSurname: users[i]['Surname'], userYear: users[i]['Year'],
                            C_1: users[i]['Course_1'], C_2: users[i]['Course_2'], C_3: users[i]['Course_3'],
                            C_4: users[i]['Course_4'], C_5: users[i]['Course_5'], C_6: users[i]['Course_6']
                        }, process.env.jwt, { expiresIn: 60 * 60 });
                        let decoded = jwt.verify(token, process.env.jwt);

                        let avgGrade = (decoded.C_1+decoded.C_2+decoded.C_3+decoded.C_4+decoded.C_5+decoded.C_6)/6;
                        res.write('<tr id="' + users[i]['id'] + '"><td>'+ decoded.userName+'</td>' + '<td>'+ decoded.userSurname+'</td>' +
                            '<td>'+ decoded.userYear+'</td>' +
                            '<td>'+ decoded.C_1+'</td>' + '<td>'+ decoded.C_2+'</td>' + '<td>'+ decoded.C_3+'</td>' +
                            '<td>'+ decoded.C_4+'</td>' + '<td>'+ decoded.C_5+'</td>' + '<td>'+ decoded.C_6+'</td>' +
                            '<td>'+ avgGrade.toFixed(2)+ '</td>' +
                            '<th class="ActionBlock"><a href="student?id='+ users[i]['id'] +'" class="ActionBTN"><img src="public/assets/edit.png" title="Edit"></a> ' +
                            '<button type="button" class="ActionBTN DeleteBTN" value="'+ users[i]['id'] +'"><img src="public/assets/delete.png" title="Delete"></button></th></tr>');
                    }
                    res.write('</table>')

                    let footer = fs.readFileSync(__dirname + '/static/blocks/footer.html');
                    let close = fs.readFileSync(__dirname + '/static/blocks/close.html');
                    res.write(footer + close);
                    res.end();
                }).catch(err=>console.log(err));
                break;

            case '/create':
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                fs.createReadStream(__dirname + '/static/create.vue').pipe(res);
                break;

            case '/edit_course':
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                fs.createReadStream(__dirname + '/static/edit_course.html').pipe(res);
                break;

            case '/student':
                module.exports = {
                    Sid: urlRequest.query.id
                }
                Students.findOne({where: {id: urlRequest.query.id}}).then(data =>{
                    let token = jwt.sign({
                        Name: data['Name'], Surname: data['Surname'], Year: data['Year'],
                        C_1: data['Course_1'], C_2: data['Course_2'], C_3: data['Course_3'],
                        C_4: data['Course_4'], C_5: data['Course_5'], C_6: data['Course_6']
                    }, process.env.jwt, { expiresIn: 60 * 60 });
                    let decoded = jwt.verify(token, process.env.jwt);

                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                    let head = fs.readFileSync(__dirname + '/static/blocks/head.html');
                    let header = fs.readFileSync(__dirname + '/static/blocks/header.html');
                    res.write(head + header +'<h2 class="formHeader">Edit student '+ decoded.Name +':</h2><br>' +
                        '<input type="hidden" value="'+ data['id'] +'" id="StudentID">');

                    const EditForm = require('./view/edit');
                    res.write(EditForm.formName + decoded.Name +'">'+ EditForm.formSurname + decoded.Surname +'">' + EditForm.formYear +
                        decoded.Year +'">'+ EditForm.option + decoded.C_1 +'">'+ EditForm.formCourse_1 + + decoded.C_2 +'">'+
                        EditForm.formCourse_2 + decoded.C_3 +'">'+ EditForm.formCourse_3 + decoded.C_4 +'">'+ EditForm.formCourse_4 +
                        decoded.C_5 +'">'+ EditForm.formCourse_5 + decoded.C_6 +'">'+ EditForm.formCourse_6);

                    let footer = fs.readFileSync(__dirname + '/static/blocks/footer.html');
                    res.write(footer + '<script src="public/js/vue.global.min.js"></script><script src="public/js/FrontEdit.js"></script>' +
                        '<script src="public/js/vendor.js"></script></body></html>');
                    res.end();
                }).catch(err=>console.log(err));
                break;

            case '/FAQ':
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                fs.createReadStream(__dirname + '/static/FAQ.html').pipe(res);
                break;

            case '/about':
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                fs.createReadStream(__dirname + '/static/about.html').pipe(res);
                break;

            default:
                sendRes(req.url, getContentType(req.url), res);
                break;
        }
    }
    else if(req.method == 'POST'){
        let urlRequest = url.parse(req.url, true);
        switch (urlRequest.pathname){

            case '/save-form':
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    body = JSON.parse(body, true);
                    console.log("Body: " + body);
                    const token = jwt.sign({
                        Body: body
                    }, process.env.jwt, { expiresIn: 60 * 60 });
                    writeToDb(token, res);
                });
                break;

            case '/update-form':
                let StudentID = urlRequest.query.id;
                let body_2 = '';
                req.on('data', chunk => {
                    body_2 += chunk.toString();
                });
                req.on('end', () => {
                    body_2 = JSON.parse(body_2, true);
                    console.log("Body: " + body_2);
                    const token = jwt.sign({
                        Body2: body_2
                    }, process.env.jwt, { expiresIn: 60 * 60 });
                    updateDates(token, res, StudentID);
                });
                break;

            case '/delete-form':
                let ID = urlRequest.query.id;
                Students.destroy({
                   where: {id: ID}
                });
                res.end("The student has been deleted!");
                break;

            default:
                sendRes(req.url, getContentType(req.url), res);
                break;
        }
    }
    else {
        sendRes(req.url, getContentType(req.url), res);
    }
});

/* Listen server */
server.listen(PORT, HOST);
console.log("Server works!");


//Send resources
function sendRes(url, contentType, res){
    let file = path.join(__dirname+'/static/', url);
    fs.readFile(file, (err, content) =>{
        if(err){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            fs.createReadStream(__dirname + '/static/404_page.html').pipe(res);
            console.log(`error 404 ${file}`);
        }
        else{
            res.writeHead(200, {'Content-Type': contentType});
            res.write(content);
            res.end();
            //console.log(`res 200 ${file}`);
        }
    })
}

/* Type of dates */
function getContentType(url){
    switch (path.extname(url)){
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".json":
            return "application/json";
        default:
            return "application/octate-stream";
    }
}

//Save data in DB
function writeToDb(token, res){
    const decoded = jwt.verify(token, process.env.jwt);
    const data = decoded.Body;
    Students.create({
        Name: data['input-0'],
        Surname: data['input-1'],
        Year: data['input-2'],
        Course_1: data['input-3'],
        Course_2: data['input-4'],
        Course_3: data['input-5'],
        Course_4: data['input-6'],
        Course_5: data['input-7'],
        Course_6: data['input-8']
    })
        .then(result =>{
            console.log(result);
            res.end('<div id="success"><p>Success!</p></div>');
        }).catch(err => {
        console.log(err.message);
        res.end('<div id="error"><p>The grade must not be less than 1 and greater than 10!</p></div>');
    })
}

//Update data
function updateDates(token, res, StudentID){
    const decoded = jwt.verify(token, process.env.jwt);
    const data = decoded.Body2;
    Students.update({
        Name: data['input-0'],
        Surname: data['input-1'],
        Year: data['input-2'],
        Course_1: data['input-3'],
        Course_2: data['input-4'],
        Course_3: data['input-5'],
        Course_4: data['input-6'],
        Course_5: data['input-7'],
        Course_6: data['input-8'],
    }, {where: {id: StudentID}})
        .then(result =>{
            console.log(result);
            res.end('<div id="success"><p>Success!</p></div>');
        }).catch(err => {
        console.log(err.message);
        res.end('<div id="error"><p>The grade must not be less than 1 and greater than 10!</p></div>');
    })
}



