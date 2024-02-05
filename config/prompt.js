const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyD0SG2HzoslgU1bcAQTTkqTmjOyMhBgilI");   // AIzaSyD0SG2HzoslgU1bcAQTTkqTmjOyMhBgilI

// ...

// const model = genAI.getGenerativeModel({ model: "MODEL_NAME"});

// ...

 async function promptCall(prompt) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    // const prompt = "give me the java code for iterating over array"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }
  

  module.exports = promptCall;