define({ 

 sendInvite: function(){
    var x = new kony.mvc.Navigation("frmHopeDashboard");    
    //var obj={amount:0};
   
   kony.store.setItem("amountInHopeAccount",0);
    x.navigate();
 }
 });