define({ 

  selectDebitAccount : function(){
    this.view.flxEnrollAccount.isVisible=false;
   // this.view.flxSetupDebitAccount.isVisible=true;
    this.view.flxSuccess.isVisible = true;
  },

  openSuccessFlex: function(){
    this.view.flxSetupDebitAccount.isVisible= false;
    this.view.flxSuccess.isVisible = true;
  },

  openInvitePage: function(){
    var x = new kony.mvc.Navigation("frmInviteFriends");
    x.navigate({});
  }
});