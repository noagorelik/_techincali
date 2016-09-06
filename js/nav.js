$( "#weather" ).click(function() {
  $('#active-bar1').addClass('show').removeClass('hidden');
  $('#active-bar2').addClass('hidden').removeClass('show');
  $('#active-bar3').addClass('hidden').removeClass('show');
  $('#active-bar4').addClass('hidden').removeClass('show');
});
$( "#thestartups" ).click(function() {
  $('#active-bar2').addClass('show').removeClass('hidden');
  $('#active-bar1').addClass('hidden').removeClass('show');
  $('#active-bar3').addClass('hidden').removeClass('show');
  $('#active-bar4').addClass('hidden').removeClass('show');
});
$( "#familiarfaces" ).click(function() {
  $('#active-bar3').addClass('show').removeClass('hidden');
  $('#active-bar2').addClass('hidden').removeClass('show');
  $('#active-bar1').addClass('hidden').removeClass('show');
  $('#active-bar4').addClass('hidden').removeClass('show');
});
$( "#funfacts" ).click(function() {
  $('#active-bar4').addClass('show').removeClass('hidden');
  $('#active-bar2').addClass('hidden').removeClass('show');
  $('#active-bar3').addClass('hidden').removeClass('show');
  $('#active-bar1').addClass('hidden').removeClass('show');
});
