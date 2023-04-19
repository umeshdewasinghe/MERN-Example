const router = require("express").Router();
let Student = require("../models/student");


//Create
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

//Retrieve all
router.route("/").get((req,res) => {
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
})


//update
router.route("/update/:id").put(async(req,res)=>{
    let userID = req.params.id; 
    const{name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userID,updateStudent).then(() =>{
        res.status(200).send({status:"user updated",user: update});

    }).catch((err) =>{
        console.log(err);
    });



})




module.exports = router;