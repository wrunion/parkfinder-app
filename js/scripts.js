//Business Logic
var userResponses = []

//User Interface Logic
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});

/* to create an array of user responses:

var userResponses = [];
$("input:checkbox[name=work-transportation]:checked").each(function(){
    var workTransportationMode = $(this).val();
    userResponses.push(workTransportationMode);
  });

/////////
  //business logic

  function Ticket(selecttitle, selectage, selecttime) {
    this.title = selecttitle;
    this.age = selectage;
    this.time = selecttime;
  };

  //user interface logic

  $(document).ready(function() {

    $("form#input").submit(function(event) {

      event.preventDefault();

      var inputTitle = ($("#title").val());
      var inputAge = ($("#age").val());
      var inputTime = ($("#time").val());

      var newTicket = new Ticket(inputTitle, inputAge, inputTime);

      var price = 0

      if (newTicket.title === "new-release"){
        price += 15;
      } else {
        price += 10;
      }

      if (newTicket.age === "discount"){
        price -= 5
      }

      if (newTicket.time === "matinee"){
        price += 2
      } else {
        price += 5
      }

      $("#show-price").text("Your ticket price is $" + price + ".");

      // console.log(price);
    });
  });
