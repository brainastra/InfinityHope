define({ 

  declineHopeInvitation: function(){
    this.view.flxInvite.isVisible = false;

  },

  acceptHopeInvitation: function(){
	var x = new kony.mvc.Navigation("frmSelectAccounts");
    x.navigate({});
  }


});