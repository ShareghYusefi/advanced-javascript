// What is JQuery
// jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

// The document needs to be ready before we can manipulate it using jQuery's .ready() function
// Specify a function to execute when the DOM is fully loaded
// Anonymous function: no name, no parameter and used only once in the code.
$(document).ready(function () {
  console.log("Document is Ready!");
  // Use jQuery to access the document elements
  // Syntax: $("selector").action()

  // Select the form element with name="sign-in-form" and listen for the submit event using .on function
  $("form[name='sign-in-form']").on("submit", function (event) {
    // get email value use .val function
    var email = $("#email").val();
    console.log(email);
    var password = $("#password").val();
    console.log(password);

    // add a div element with id="result" to the body of document using .append()
    $("body").append('<div id="result"></div>');

    // get div element with id="result" and set the innerHTML using .html()
    $("#result").html(`
            <h2>Form Data</h2>
            <ul>
                <li>Email: ${email}</li>    
                <li>Password: ${password}</li>    
            </ul>
        `);

    // prevent the default form submission to current page/reload
    event.preventDefault();
  });
});

// function signIn(event) {
//   // document is a key term that returns an object referecing our html document within a browser
//   var form = document.forms["sign-in-form"];

//   // get form data
//   console.log(form["email"].value);
//   var email = form["email"].value;
//   console.log(form["password"].value);
//   var password = form["password"].value;

//   // create a dive element with id="result"
//   var div = document.createElement("div");
//   // adding attributes to element
//   div.setAttribute("id", "result");
//   // append the div to the body of document
//   document.body.appendChild(div);

//   // retrieving elements can be done via the following methods.
//   // getElementById, get ElementsByClassName, getElementsByTagName, querySelector, querySelectorAll.
//   var result = document.getElementById("result");
//   // Add html inside of element
//   result.innerHTML = `
//             <h2>Form Data</h2>
//             <ul>
//                 <li>Email: ${email}</li>
//                 <li>Password: ${password}</li>
//             </ul>
//         `;

//   // update css properties
//   result.style.backgroundColor = "black";
//   result.style.padding = "10px";
//   result.style.color = "white";
//   result.style.fontSize = "18px";
//   result.style.marginTop = "20px";
//   result.style.borderRadius = "5px";
//   result.style.fontFamily = "Arial";

//   // add more classes to elements
//   result.classList.add("bg-primary", "text-white");

//   // set attributes on an element
//   result.setAttribute("data-custom", "customValue");

//   // send the form data to a server using AJAX to replace need for process file within the form action attribute

//   // prevent the default form submission to current page/reload
//   event.preventDefault();
// }
