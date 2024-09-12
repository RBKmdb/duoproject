function each(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
//factory function 
let list = JSON.parse(localStorage.getItem(("list"))) || []
function factory(title,duration,descreption,category,rating,pictures){
  var obj={
  title:title,
  duration:duration,
  descreption:descreption,
category:category,
rating:rating,
pictures:pictures,
remove : remove , 
  }
return obj
}
const remove=function(name){
  return filter(list,function(elem,i){
      return list.title!==name
  })
}
$("#ADBT").on('click',function(){
console.log("hi" , list);
var thefilm=$('#tit').val()
var thefil=$('#time').val()
var thefi=$('#catg').val()
var thef=$('#desc').val()
var the=$('#rat').val()
var th=$('#pic').val()
var x = factory(thefilm,thefil,thef,thefi,the,th) //addparams
list.push(x)
localStorage.setItem("list" , JSON.stringify(list))
hi()
})
hi()
function hi() {
  $("#your-film").empty()
each(list,function(elem){
  $(".your-film").append(`<div id="movi">
    <img  src=" ${elem.pictures}" > 
    <h1>  title : ${elem.title} </h1> 
  <h1> <strong>the title:</strong>${elem.duration}</h1>
  <h1> <strong>rating :</strong>${elem.rating}</h1>
  <h1> <strong>category:</strong>${elem.category}</h1>
    </div>`) 

});
}

$("#RMBT").on('click',function(){
  $('#movi').remove()
  })

 