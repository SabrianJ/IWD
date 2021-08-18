var name;
var email;
var numberOfAdults;
var numberOfChildren;
var date;
var needCookingFacilities;
var isUsingCamperVan;
var equipments;
var color;
var range;
var userAgreement = "no";



const progressBar =   document.getElementById('myProgressBar');

function nextButtonClick() {
  let currentProgress = document.getElementById('myProgressBar').innerHTML;
  if(currentProgress === '25%'){
    document.getElementById('myProgressBar').innerHTML = '50%';
    document.getElementById('myProgressBar').style.width = '50%';
    var cur = $('.form-panel').index($('.form-panel.active'));
    if (cur!=$('.form-panel').length-1) {
        $('.form-panel').removeClass('active');
        $('.form-panel').eq(cur+1).addClass('active');
    }

    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    numberOfAdults = document.getElementById('numberOfAdults').value;
    numberOfChildren = document.getElementById('numberOfChildren').value;
    date = new Date(document.getElementById('date').value);



  }else if(currentProgress === '50%'){
    document.getElementById('myProgressBar').innerHTML = '75%';
    document.getElementById('myProgressBar').style.width = '75%';
    var cur = $('.form-panel').index($('.form-panel.active'));
    if (cur!=$('.form-panel').length-1) {
        $('.form-panel').removeClass('active');
        $('.form-panel').eq(cur+1).addClass('active');
    }

    needCookingFacilities = document.getElementById('cookingFacilities').value;
    isUsingCamperVan = document.getElementById('isUsingCamperVan').value;
    equipments = document.getElementById('equipments').value;
    color = document.getElementById('color').value;

  }else if(currentProgress === '75%'){
    document.getElementById('myProgressBar').innerHTML = '100%';
    document.getElementById('myProgressBar').style.width = '100%';
    var cur = $('.form-panel').index($('.form-panel.active'));
    if (cur!=$('.form-panel').length-1) {
        $('.form-panel').removeClass('active');
        $('.form-panel').eq(cur+1).addClass('active');
    }

    range = document.getElementById('range').value;

    if($('#agreeUserAgreement').is(':checked')){
      userAgreement = "Yes";
    }

    document.getElementById('summaryName').innerHTML = "Name : " + name;
    document.getElementById('summaryEmail').innerHTML = "Email : " + email;
    document.getElementById('summaryNumberOfAdults').innerHTML = "Number of Adult : " + numberOfAdults;
    document.getElementById('summaryNumberOfChildren').innerHTML = "Number of Children : " + numberOfChildren;
    document.getElementById('summaryDate').innerHTML = "Date : " + date.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).replace(/ /g, '-');
    document.getElementById('summaryNeedCookingFacilities').innerHTML = "Need Cooking Facilities : " + needCookingFacilities;
    document.getElementById('summaryIsUsingCampervan').innerHTML = "Is using campervan : " + isUsingCamperVan;
    document.getElementById('summaryEquipments').innerHTML = "Equipments : " + equipments;
    document.getElementById('summaryColor').innerHTML = "Color : " + color;
    document.getElementById('summaryRange').innerHTML = "Range : " + range;
    document.getElementById('summaryAgreeUserAgreement').innerHTML = "Agree user agreement : " + userAgreement;
  }
};

function previousButtonClick(){
  let currentProgress = document.getElementById('myProgressBar').innerHTML;
  if(currentProgress === '100%'){
    document.getElementById('myProgressBar').innerHTML = '75%';
    document.getElementById('myProgressBar').style.width = '75%';
    var cur = $('.form-panel').index($('.form-panel.active'));
    if (cur!=0) {
        $('.form-panel').removeClass('active');
        $('.form-panel').eq(cur-1).addClass('active');
    }
  }else if(currentProgress === '75%'){
    document.getElementById('myProgressBar').innerHTML = '50%';
    document.getElementById('myProgressBar').style.width = '50%';
    var cur = $('.form-panel').index($('.form-panel.active'));
    if (cur!=0) {
        $('.form-panel').removeClass('active');
        $('.form-panel').eq(cur-1).addClass('active');
    }
  }else if(currentProgress === '50%'){
    document.getElementById('myProgressBar').innerHTML = '25%';
    document.getElementById('myProgressBar').style.width = '25%';
    var cur = $('.form-panel').index($('.form-panel.active'));
    if (cur!=0) {
        $('.form-panel').removeClass('active');
        $('.form-panel').eq(cur-1).addClass('active');
    }
  }
};


$(function()
{
$('.form-range').on('input change', function(){
          $(this).next($('.slider_label')).html(this.value);
        });
      $('.slider_label').each(function(){
          var value = $(this).prev().attr('value');
          $(this).html(value);
        });
});

function validationCheck(){
  if(name === "" || email === "" || numberOfAdults === "" || !Date.parse(date) || userAgreement === "no"){
    alert('Form is not complete, Please complete before submitting')
  }else{
    alert('Booking submitted')
    document.location.reload(true)
  }
};

function replayAnimation(){
  $( "#advertisement" ).load(window.location.href + " #advertisement" );
};
