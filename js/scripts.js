var Tamagotchi = {
  initialize: function(inputName) {
  this.name = inputName;
  this.foodLevel = 10;
  this.sleepLevel = 10;
  this.activityLevel = 10;
  },
  timePasses: function(){
    this.foodLevel-= 1;
    this.sleepLevel-= 1;
    this.activityLevel-= 1;
  },
  isAlive: function(){
    if (this.foodLevel >= 1){
      return true;
    }else{
      return false;
    }
  }
};

$('document').ready(function(){
  var timeoutID;
  $("form#new-nameform").submit(function(event){
    event.preventDefault();
    $("#tamo-name").text($("#new-name").val());
    $("form#new-nameform").addClass("hide-form");
    $("#button-hide").show();

    var newTamo = Object.create(Tamagotchi);
    newTamo.initialize();
    newTamo.name = $("#new-name").val();

   // timeoutID = window.setTimeout(timePasses, 5000);

  })
})
