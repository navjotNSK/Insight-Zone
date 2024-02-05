const express = require("express");
const dotenv = require("dotenv");
const promptCall = require("./config/prompt")

const app =express();
dotenv.config(); 
const PORT  =  3006 ;  //process.env.PORT ||

app.listen(PORT , console.log(`Running on ${PORT}`));

app.get("/api/chat",(req,res)=>{
    console.log(req.body);
   print("running");
// res.send("chats");
});


// Middleware to parse JSON in the request body
app.use(express.json());

app.post("/api/prompt", async (req, res) => {
    try {
      // Extract the prompt from the request body
      console.log(req);
      console.log(req.body);
      const prompt = req.body.prompt;
    
      // Validate the prompt 
      if (!prompt || prompt.trim() === "") {
        return res.status(400).json({ error: "Prompt is required" });
      }
  
      // Call the promptCall function to generate content
      const generatedText = await promptCall(prompt);
  
      // Send the generated text as the response
      res.json({ generatedText });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate content" });
    }
  });
  




