

//var Getstuff;


function info (callback) {
  $.ajax({
    url: `http://json-data.herokuapp.com/forms`,
    dataType: "json",
    success: callback
  });
}


function getStuff(data){
  for (var count = 0; count < data.length; count++){

  if (data[count].type === "select") {
    putWords = $(".big-box").html();
    putWords +=
`
<select name="selectlanguage">
Select Language
<option value="value1">${data[count].options[0].label}</option>
<option value="value1">${data[count].options[1].label}</option>
<option value="value1">${data[count].options[2].label}</option>
<option value="value1">${data[count].options[3].label}</option>
<option value="value1">${data[count].options[4].label}</option>
</select>
`
$(".big-box").html(putWords);
}else {
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
//Info(Gettype);


//function first () {
  //console.log(Getstuff.responseJSON[0].label)
//}








/*var Getthings;
for (var count = 0; count < Getstuff.length; count++) {
//function Putstuff (){
    putWords = $(".big-box").html();
    putWords +=

    `<div id="input_container">
    <input class="firstnamebox" placeholder= "${Getstuff.responseJSON[0].label}">
    <i class="fa fa-envelope"></i>
    </input>
    </div>
    <input class="lastnamebox" placeholder= "${Getstuff.responseJSON[1].label}">
    </input>
    <input class="emailbox" placeholder= "${Getstuff.responseJSON[2].label}">
    </input>
    <input class="urlbox" placeholder= "${Getstuff.responseJSON[3].label}">
    </input>
    <input class="languagebox" placeholder= "${Getstuff.responseJSON[4].label}">
    </input>
    <input class="commentbox" placeholder= "${Getstuff.responseJSON[5].label}">
    </input>
    <input class="mobilebox" placeholder= "${Getstuff.responseJSON[6].label}">
    </input>
    <input class="homebox" placeholder= "${Getstuff.responseJSON[7].label}">
    </input>
    `
    $(".big-box").html(putWords);
};

*/
/*for (var count = 0; count < items.results.length; count++) {
    putImages = $(".alltheitems").html();
    putImages +=
    `<div class="image">
      <div class="icons">
      <img class="heart" src="heart.png"/>
      <img class="hamburger" src="hamburger.png"/>
    </div>
    <a href = "${items.results[count].url}"><img src="${items.results[count].Images[0].url_170x135}" width = "225"/></a>
    <p class="title">${items.results[count].title}</p>
    <p class="shopname">${items.results[count].Shop.shop_name}</p>
    <p class="money">$${items.results[count].price}</p>

/*
   </div>`;
    $(".alltheitems").html(putImages);
};

/*Info(Getdata)

function Info(callback){
return  $.ajax({
    url: `http://json-data.herokuapp.com/forms/`,
    dataType: "json",
    success: callback
  })
};


function Getdata (){
console.log(Info.responseJSON);
}

Info


function Getstuff (){
console.log(I.responseJSON);
}
*/

//var first;
//for (var count = 0; count < Object.icon; count++) {
    //console.log (first)
  /*  putImages +=
    `<div class="image">
      <div class="icons">
      <img class="heart" src="heart.png"/>
      <img class="hamburger" src="hamburger.png"/>
    </div>
    <a href = "${items.results[count].url}"><img src="${items.results[count].Images[0].url_170x135}" width = "225"/></a>
    <p class="title">${items.results[count].title}</p>
    <p class="shopname">${items.results[count].Shop.shop_name}</p>
    <p class="money">$${items.results[count].price}</p>

   </div>`;
    $(".alltheitems").html(putImages); */
//};
