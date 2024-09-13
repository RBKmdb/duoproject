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
    function factory(title,duration,descreption,category,rating,pictures){
        var obj={
        title:title,
        duration:duration,
        descreption:descreption,
      category:category,
      rating:rating,
      pictures:pictures,
      search:search, 
        }
      return obj
      }
      const search=function(titre){
        return filter(list,function(elem,i){
            return list.title===titre
        })
      }
      
