


function info (callback) {
  $.ajax({
    url: `http://json-data.herokuapp.com/forms`,
    dataType: "json",
    success: callback
  });
}


function getStuff(data){
  for (var count = 0; count < data.length; count++){
  if (data[count].type === "select" ) {
    putWords = $(".big-box").html();
    putWords +=
`

<select class="selectlist">
<option value="value1">Select Language...</option>
<option value="value2">${data[count].options[0].label}</option>
<option value="value2">${data[count].options[1].label}</option>
<option value="value3">${data[count].options[2].label}</option>
<option value="value4">${data[count].options[3].label}</option>
<option value="value5">${data[count].options[4].label}</option>
</select>
<textarea class ="comment" placeholder ="${data[5].label}"></textarea>
`

$(".big-box").html(putWords);
}

else{
  putWords = $(".big-box").html();
  putWords +=
  `
  <i class="fa ${data[count].icon}"></i>

  <input class="firstnamebox" placeholder= "${data[count].label}">

  </input>
  `


  $(".big-box").html(putWords);
}
  }

}




info(getStuff);
