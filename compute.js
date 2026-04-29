/*
  callback function:
  define         call
  callback       function
*/

// define
function division(a, b, callback) {
  if (b === 0) {
    callback("Error: Division by zero", null);
  } else {
    callback(null, a % b);
  }
}

// call
const result = division(7, 4, function (err, data) {
  if (err) console.log("ERROR:", err);
  else {
    console.log("result:", data);
    console.log("=======");
  }
});
