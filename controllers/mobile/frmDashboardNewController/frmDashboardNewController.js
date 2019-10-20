define({ 

  //Type your controller code here 
  useridReceived:null,
  preShowfrmDashBoardNew: function(){
    /* this.view.segAccCheckingsAcc.widgetDataMap={ 
          lblHeading:"Account_id", 
          lblDescription:"AccountName"
     };*/
    // this.HamburgerFunc();
    var payload={"input":"1000000001"};
    var InfinityHopeObjServicesModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("accountFetchInfinityHope");   
    InfinityHopeObjServicesModel.accountFetch(payload,this.cback);         
  },
  onNavigate: function(){
    if(arguments[0]!=null || arguments[0]!=undefined){
      this.useridReceived=arguments[0].userId;
    }
  },
  cback: function(resp){
    var resp=arguments[1].records;
    //   this.setTotalAmount();
    this.setValuesToSegment(resp);
  },
  /* setTotalAmount: function(){

  },*/
  setValuesToSegment: function(resp){
    var arr=[];
    for(var i=0;i<resp.length;i++){
      var temp={	
        "lblHeading":{"text":resp[i].Account_id},
        "lblDescription":{"text":resp[i].AccountName},
        "lblStrip":{"isVisible":true,"text":""},
        "lblAmount":{"text":resp[i].AvailableBalance}
      };
      arr.push(temp);
    }
    this.view.segAccCheckingsAcc.setData(arr);
    this.view.forceLayout();
  },

});