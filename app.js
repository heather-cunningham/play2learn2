const express = require("express");
const {check, validationResult} = require("express-validator");
const path = require("path");
const fs = require("fs");
const app = express();


// Middleware to set the correct MIME type
app.use(async (request, result,
               next) => {
    const mime = await import('mime');
    const type= mime.default.getType(request.path);
    
    if(type){
      result.setHeader("Content-Type", type);
    }
    
    next();
});

// Serve static files from the Node.js app directory
app.use(express.static(path.join(__dirname, "public")));

// Serve static files from the Node.js public styles directory
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Serve static files from the Vue app's dist directory
app.use('/games/anagram-hunt/anagram-hunt-vue/anagram-hunt', express.static(
  path.join(__dirname, 'public', 'games', 'anagram-hunt', 'anagram-hunt-vue', 'anagram-hunt', 'dist'))
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ------------------------------------------ Node.js Homepage ------------------------------------------------
// Node.js routing:
//-----------------
// Default route for the Node.js home page
// Set the homepage to url leg to "/" with Node and send it the homepage, aka `index.html`
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

const testimonialRawData = fs.readFileSync(path.join(__dirname, "./public/data/testimonials.json"));
const testimonialsJSON = JSON.parse(testimonialRawData);
app.get("/testimonials", (request, response) => {
  // NOTE to Grading Instructor and/or Jared Dunn:  I could not get this GET request to work the way we did
  // in class, so I used async fetch() instead.
  if (testimonialsJSON && testimonialsJSON.length > 0) {
    // If the testimonials JSON is not null and not empty, send the response to:
    // scripts.js > fetchQuotes()
    response.json(testimonialsJSON);
  } else {
    response.json(null);
  }
});


// ------------------------------------------ Vue3 Anagram Hunt Node.js Routing ---------------------------------------
// Node.js Route to serve the Vue3 app from the dist directory
app.get("/games/anagram-hunt/anagram-hunt-vue/anagram-hunt",
  (request, result)=>{
    result.sendFile(
      path.join(__dirname, 'public', 'games', 'anagram-hunt', 'anagram-hunt-vue', 'anagram-hunt', 'dist', 'index.html')
    );
});

// ------------------------------------------ Contact-Us page ------------------------------------------------
app.post("/contact-response-msg",
  [check("email", "Invalid email address.").isEmail()],
  (request, response) => {
    const contactErrors = validationResult(request);
    
    let responseMsg = "";
    
    if (!contactErrors.isEmpty()) {
      let contactErrorsHtmlList = "";
      
      for (let error of contactErrors.array()) {
        contactErrorsHtmlList += `<li>${error.msg}</li>`
      }
      
      responseMsg = `<ul id="contact-response-message">
                      Message not sent due to:
                        ${contactErrorsHtmlList}
                    </ul>`
    }
    
    response.status(200).send(responseMsg);
  });


// ------------------------------------- Math Facts game page Final Screen for end of game  ----------------------
app.get("/math-facts-final-screen",
  (request, response) => {
    const jsonStr = request.query.jsonStr;
    if (jsonStr) {
      try {
        const endGameObj = JSON.parse(jsonStr);
        
        const operation = endGameObj.operation;
        const timesUpNote = endGameObj.timesupnote;
        const playersFinalScore = endGameObj.score;
        
        // response HTML:
        const responseMsg = `
          <h3 id="math-facts-operation" class="game-header">
            ${operation}
          </h3>
          <p id="math-facts-times-up-note" class="times-up-note">
            ${timesUpNote}
          </p>
          <h3 id="math-facts-final-score-header" class="final-score-header">
            Your final score is:
          </h3>
          <h3 id="math-facts-final-score" class="final-score">
            ${playersFinalScore}
          </h3>
          <button id="play-math-facts-again-btn"
                  class="play-again-btn"
                  alt="Play the Math Facts game again"
                  name="again"
                  type="button"
                  value="Play Again">
            Play Again
          </button>`;
        
        response.status(200).send(responseMsg);
      } catch (error) {
        response.status(400).send('Invalid JSON');
      }
    } else {
      response.status(400).send('Missing jsonStr query parameter');
    }
  });

// ------------------------------------------ Error Handling Middleware -----------------------------------------------
app.use(
  (err, req, res, next) =>
  {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
    next();
});


// ------------------------------------------ App listening port ------------------------------------------------
const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log("Express / Node.js app running on port: " + port);
}); // port = 8081
