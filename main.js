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
    $("#result")
      .html(
        `
            <h2 id="data-heading">Form Data</h2>
            <ul>
                <li>Email: ${email}</li>    
                <li>Password: ${password}</li>    
            </ul>
            <button id="cancel" class="btn btn-danger text-white">X</button>
        `
      )
      .addClass("bg-primary text-white p-2 rounded");

    // update h2 text using .text()
    $("#data-heading").text("Form submitted with JQuery");

    // update the remember checkbox checked attribute value using .attr()
    $("#remember").val("remembered").attr("checked", true);

    // attach a click event handler function
    $("#cancel").click(function () {
      $("#result").hide();
    });

    // prevent the default form submission to current page/reload
    event.preventDefault();
  });
});
