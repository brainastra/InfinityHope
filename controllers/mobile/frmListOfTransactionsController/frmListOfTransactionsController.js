define({ 

 //Type your controller code here 
  preShow : function(){
    /* this.view.segListOfTransactions.widgetDataMap={ 
          lblHeading:"Account_id", 
          lblDescription:"AccountName"
     };*/
    var payload={"input":"1000000001"};
        var InfinityHopeObjServicesModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("transfinityFetchOnFromInfinityHope");   
       InfinityHopeObjServicesModel.transfinityFetchBasedOnFrom(payload,this.cback);         
  },
  cback: function(resp){
    
    this.view.segListOfTransactions.setData(resp);
    
  },

 });