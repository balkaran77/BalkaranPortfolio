function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var add = document.getElementById("add").value;
    var city = document.getElementById("city").value;
    var postalcode = document.getElementById("postalcode").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var postalRegex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
    var addressRegex = /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/
    var cityRegex = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
    error_message.style.padding = "10px";
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(!email.match(validRegex)){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(!add.match(addressRegex)){
      text = "Please Enter Your Address";
      error_message.innerHTML = text;
      return false;
    }
    if(!city.match(cityRegex)){
      text = "Please Enter City Name";
      error_message.innerHTML = text;
      return false;
    }

    if(!postalcode.match(postalRegex)){
      text = "Please Enter Postal Code";
      error_message.innerHTML = text;
      return false;
    }

    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

  function add(type)
  {
    var element = document.createElement("input");
    
  }
  function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';
    if (document.getElementById('noCheck').checked) {
      document.getElementById('ifNo').style.visibility = 'visible';
  }
  else document.getElementById('ifNo').style.visibility = 'hidden';

}