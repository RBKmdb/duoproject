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
    return acc}
    //
    function factory(title,duration,descreption,category,rating,pictures){
return{title:title,
        duration:duration,
        descreption:descreption,
      category:category,
      rating:rating,
      pictures:pictures 
    }
    }
    
  //
let list = []

      const add=function(title,duration,descreption,category,rating,pictures){
      return list.push(factory(title,duration,descreption,category,rating,pictures))}

 const search=function(titre){
        return filter(list,function(elem,i){
            return elem.title===titre
        })
      }
 
      const toprated=function(){
      
        
        x =  list.sort(function(a,b){
          return b.rating-a.rating
        })
        console.log(x);
        
        return x 
              }
   

      function displayOne(film){
        $(".displays").append(`<div class = "mov"> 
          <img src="${film.pictures}">
             <h3 id =""> Name :${film.title}</h3>
             <h3 id =""> duration:${film.category}</h3>
             <h3 id="">durartion:${film.duration}</h3>
           <h3 id ="">rating:${film.rating }</h3>
           <h3 id ="">descreption: ${film.descreption}</h3>
           <a id="mm" href=""><h3>get it</h3></a>  
             </div>`)  
      }

      function displayAll(array){
        console.log(array)
          for (let i = 0; i < array.length; i++) {
              const element = array[i];
              displayOne(element)
          }
      }
     

add("inception",148,"great movie ","fun",7.6,"https://www.shutterstock.com/image-vector/detailed-illustration-clapper-board-short-260nw-210237415.jpg")
add("oppenheimer",148,"great movie ","",5,"https://www.shutterstock.com/image-vector/detailed-illustration-clapper-board-short-260nw-210237415.jpg")
add("game of thrones",148,"great tv show ","action",9,"https://www.shutterstock.com/image-vector/detailed-illustration-clapper-board-short-260nw-210237415.jpg")
add("breaking bad",148,"great tv show ","fun",7,"https://www.shutterstock.com/image-vector/detailed-illustration-clapper-board-short-260nw-210237415.jpg")

displayAll(list)
 function research() {
        var sear = $("#B-recherche").val();
        $(".displays").empty();
     var x=  search(sear);
    
     if(x.length===0){
        alert('          ***not found***')
     }
     displayAll(x)
      }
      $("#SBT").on("click", function () {
    research();
      });
      $("#rate").click(function(){
        console.log("hi");
        $(".displays").empty();
        displayAll(toprated())
      })