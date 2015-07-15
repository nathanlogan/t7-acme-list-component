var $ = require('jquery');


module.exports = function(options){

  var selector = options.el || '.t7-acme-list-component';
  var el = document.querySelectorAll(selector);

  var data = options.data || ['1', '2', '3'];
  var html = '';

  var makeHtml = function(arr){
  	for (var i=0; i<arr.length; i++) {
  	  html += '<li>'+ arr[i] +'</li>';
  	}
  };

  el.innerHTML = makeHtml(data);

};