
const express = require('express')
const mysql = require('mysql')
const port = 3333
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  database: "studentdb",
  user: "root",
  password: "",
});


app.get('/student', (req, res) => {
  db.query('SELECT * FROM student',(err,result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(result)
    }
  })
});


app.get('/student/:id', (req, res) => {
  const id = req.params.id
  db.query('SELECT * FROM `student` WHERE `id` = ?',id,
  (err,result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(result)
      console.log(result)
    }
  })
});

app.get('/dashbord', (req, res) => {

  db.query('SELECT major, COUNT(*) AS count FROM student GROUP BY major;',
  (err,result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(result)
      console.log(result)
    }
  })
});



app.post('/student', (req, res) => {
  const name = req.body.name
  const surname = req.body.surname
  const faculty = req.body.faculty
  const major = req.body.major
  const entrance_date = req.body.entrance
  const GPA = req.body.gpa
  db.query('INSERT INTO `student` (`id`,`name`, `surname`, `faculty`, `major`, `entrance_date`, `GPA`) VALUE (?,?,?,?,?,?,?)',[null,name,surname,faculty,major,entrance_date,GPA] ,
  (err,result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(result)
    }
  })
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});