// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function(){

  $('form').on('submit', function(){
      
      // var item = $('form input');
      // console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/niceSurvey',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
          $("#bb").css("background-color", "red");
          $("#bb").prop("disabled", "true");
          $("#bb").text("Thank you!");
        }
      });
      return false;
  });
});
