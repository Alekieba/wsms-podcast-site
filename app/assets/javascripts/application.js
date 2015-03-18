// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(function() {

  var json = '{"success":1,"podcasts":[{"id":"4","name":"New Podcast!","desc":"Here is the description","markup":"Here is the markup for the podcast","thumb-url":"\/files\/images\/thumbnails\/4.png"},{"id":"3","name":"NEW PODCAST","desc":"DESCRIPTION","markup":"MARKUP","thumb-url":"\/files\/images\/thumbnails\/3.JPG"},{"id":"2","name":"Another new podcast","desc":"This is the description","markup":"This is the markup","thumb-url":"\/files\/images\/thumbnails\/2.png"}]}';

  var jsonObject = JSON.parse(json);

  $('#something').click(function() {
    $.get ("http://wsmspodcast.h2oworldwide.org/php/interfaces/get-podcasts.php", {command: 'three'}, function (data) {

       // process the json stored in the “data” variable
       // Getting a cross something error

    });  
    
  });

  function setMarkups(json_object) {
    $('#markup').text(json_object.podcasts[0].markup);
    $('#markup-2').text(json_object.podcasts[1].markup);
    $('#markup-3').text(json_object.podcasts[2].markup);
  }

  function setTitles(json_object) {
    $('.title').text(json_object.podcasts[0].name);
    $('.title-2').text(json_object.podcasts[1].name);
    $('.title-3').text(json_object.podcasts[2].name);
  }

  function setDates(json_object) {
    $('#date').text(json_object.podcasts[0].name);
    $('#date-2').text(json_object.podcasts[1].name);
    $('#date-3').text(json_object.podcasts[2].name);
  }

  $('#myModal').on('show.bs.modal',
      function(e) {
        // setMarkups(jsonObject);
        // setTitles(jsonObject);
      }
    );

  setMarkups(jsonObject);
  setTitles(jsonObject);

});