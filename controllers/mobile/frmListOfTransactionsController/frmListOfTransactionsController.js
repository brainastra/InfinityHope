define({ 

 //Type your controller code here 
  earlyLoad : function(){
    var payload={"input":"190128223246001"};
        var InfinityHopeObjServicesModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("transfinityFetchOnFromInfinityHope");   
       InfinityHopeObjServicesModel.transfinityFetchBasedOnFrom(payload,this.cback);         
  },
  
  onNavigate: function(){
    var dummy="";
  },
  cback: function(){
    kony.application.showLoadingScreen();
    var resp=arguments[1].records;
     var arr=[];
    for(var i=0;i<resp.length;i++){
      var temp={	
        		 "lblAmnt":{"text":resp[i].amount},
                 "lblDes":{"text":resp[i].description},
                 "lblAccountID":{"isVisible":true,"text":""},
        		 "lblDT":{"text":resp[i].transactiondate}
        
               };
      arr.push(temp);
    }      
      this.view.segTransaction.setData(arr);
     kony.application.dismissLoadingScreen();
      
  },

 });