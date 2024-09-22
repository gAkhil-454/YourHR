import express from "express";
import {dirname} from "path";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import fs from 'fs';
import bodyParser from "body-parser";

const port = 80;
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({extended: true}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(__dirname, '/uploads');
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath);
      }
      cb(null, uploadPath); // Set the destination folder
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname); // Give the file a unique name
    }
  });

const upload = multer({ storage });

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/build/index.html");

});

app.get("/signupPage", (req, res)=>{
  res.sendFile(__dirname + "/build/index.html" );
});

app.post('/signup', upload.single('resume'), (req, res) => {
    const { name, email, phone, jobTitle, location, experience } = req.body;
    const resumeFile = req.file;
  
    // Store form data and resume info
    const userData = {
      name,
      email,
      phone,
      jobTitle,
      location,
      experience,
      resume: resumeFile ? resumeFile.path : null, // Store the path to the uploaded resume
    };
  
    // You can now save this data to a file, database, etc.
    console.log('User Data:', userData);
    res.send('Form data received successfully');
  });

app.listen(port , ()=>{
    console.log(`Listening to port ${port}`);
});

