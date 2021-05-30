const server = require("express");
const formidable = require("formidable");
const { Task } = require("./taskSchema");
const cors = require("cors");
const app = server();
app.use(cors());
//Connect NodeJs with MongoDB
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/taskManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log("DB CONNECTED....");
});

//Define All Routes....

 /* 
newTask.save((error, task) =>{
   if(error){
       console.log(error);
   }else{
       console.log(task);
   }
});  */


app.get("/all-tasks", (req,res) => {
    Task.find({},(error,tasks) => {
     //  var allTasks = []
     //tasks.map((task, index) => {
     //allTasks.push(task.title);
     //});
        return res.json({ allTasks: tasks });
    });  
});

app.post("/create-new-task", (req,res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, data, fileData) => {
        var newTask =new Task(data);
            newTask.save();
                
            });
        }); 
 
app.post("/delete-task", (req,res) => {
     var form = new formidable.IncomingForm();
     form.parse(req, (err, data, fileData) => {
             // console.log(data);
               Task.findOneAndDelete({_id: data.taskId}, () => {
                   return res.json({
                       status: true,
                   }) ;
               });
                       
                 });
            }); 

app.listen(5000, () => {
    console.log("I am Running on Port: 5000");
});
