// business logic
function BankAccount(name, amount) {
this.userName = name;
this.currentBalance = amount;
}

BankAccount.prototype.deposit = function(amount){
debugger;
  if(!isNaN(amount)){
   this.currentBalance += amount;
 };
}

BankAccount.prototype.withdraw = function(amount){
debugger;
  if(!isNaN(amount)){
   this.currentBalance -= amount;
 };
}





// user interface
$(document).ready(function(){

  $("#account-form").submit(function(event){
    event.preventDefault();
    var accountName = $("input#account-name").val();
    var openBalance = parseInt($("input#initial-deposit").val());
    var newAccount = new BankAccount(accountName, openBalance);
    $("#available-funds").text(newAccount.currentBalance);

    $("#transaction").click(function(){
      var depositAmount = parseInt($("input#deposit-amount").val());
      var withdrawAmount = parseInt($("input#withdraw-amount").val());
debugger;
      newAccount.deposit(depositAmount);
      newAccount.withdraw(withdrawAmount);

      $("#available-funds").text(newAccount.currentBalance);

      $("input#deposit-amount").val("");
      $("input#withdraw-amount").val("");
    });
    $("input#account-name").val("");
    $("input#initial-deposit").val("");
  });








});
