var $ = require('jquery');


module.exports = function(options){

  var selector = (options && options.el) || '.t7-acme-list-component';
  var $els = $(selector);

  var dataArr = (options && options.data) || ['a', 'b', 'c'];

  var makeList = function(arr){
    var html = '<ul>';
    
    for (var i=0; i<arr.length; i++) {
      html += '<li>'+ arr[i] +'</li>';
    }

    return html +'</ul>';
  };

  $els.html( makeList(dataArr) );

};