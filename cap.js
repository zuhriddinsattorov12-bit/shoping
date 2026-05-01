/*

Fullstack = Restuarant 

Frontend Development:
         - BSSR: (Backend Server Side Rendering) > DTE/ JTE/ EJS
         - SPA (React/Angular/Vue)

API REQUEST:
         - Design    > Traditional API |  Rest API | Graph API
         - Method    > GET | POST 
         - Structure > header |  body
*/
function division(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Error: Division by zero");
    } else {
      setTimeout(function () {
        resolve(a % b);
      }, 2000);
    }
  });
}

// call
division(10, 3)
  .then((data) => {
    console.log("result:", data);
    console.log("....");

    division(10, 4)
      .then((data) => {
        console.log("result:", data);
        console.log("....");

        division(20, 7)
          .then((data) => {
            console.log("result:", data);
            console.log("....");
          })
          .catch((err) => {
            console.log("error division:", err);
          });
      })
      .catch((err) => {
        console.log("error division:", err);
      });
  })
  .catch((err) => {
    console.log("error division:", err);
  });
