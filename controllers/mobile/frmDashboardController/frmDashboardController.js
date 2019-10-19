define({ 

  
  preshow: function(param){
    var userId = param.userId;
    if(userId == '1000000002'){ //hardcoding userid to represent invite
      this.view.flxInvite.isVisible =  true;
    }
    alert(param);
    
  },
  declineHopeInvitation: function(){
    this.view.flxInvite.isVisible = false;

  },

  acceptHopeInvitation: function(){
	var x = new kony.mvc.Navigation("frmSelectAccounts");
    x.navigate({});
  },
  
  onNavigate: function(param){
    alert(JSON.stringify(param));
    var userId = param.userId;
    if(userId == '1000000002'){ //hardcoding userid to represent invite
      this.view.flxInvite.isVisible =  true;
    }
  }


});