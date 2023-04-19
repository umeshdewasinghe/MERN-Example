const router = require("express").Router();
let Student = require("../models/student");

router.route("/add").post((req,res) =>{
    const name = Number(req.body.name);
    const age = req.body.age;
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(() =>{
        res.json("Studentd added");
    }).catch((err) =>{
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;