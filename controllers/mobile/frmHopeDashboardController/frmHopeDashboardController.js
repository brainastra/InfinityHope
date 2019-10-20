define({ 
  preShow: function(){

  },

  onNavigate: function(){
    var userName;
    var loggedInUser = kony.store.getItem("loggedinUserId")
    if(loggedInUser == '1000000001')
      {
        userName = "Jack";
      }
    else
      {
        userName = "Adam"
      }
    
    this.view.lblOrganizer.text = userName;
    
    var amountInHope = kony.store.getItem("amountInHopeAccount");

//     if(arguments[0]!=null || arguments[0]!=undefined){
//       amount =  arguments[0].amount;

//     }
//     else{ 
//       amount = 90;
//     }

    var chartDataToSet;
    if( amountInHope >= 100){
      this.view.imgTarget.isVisible = true;
      this.view.lblTragetComplete.isVisible = true;
      this.view.lblTarget.text = "$100/$100";
      this.view.flxAlert.isVisible = false;
      this.view.flxGraphs.isVisible = true;
      chartDataToSet = [
        {"colorCode": "#1b9ed9", "label": "Jack", "value": 40}, 
        {"colorCode": "#e8672b", "label": "Adam", "value": 30}, 
        {"colorCode": "#76c044", "label": "Alexa", "value": 30}
      ];
    }
    else if(amountInHope == 0){
      this.view.imgTarget.isVisible = false;
      this.view.lblTragetComplete.isVisible = false;
      this.view.lblTarget.isVisible = false;
      this.view.flxAlert.isVisible = true;
      this.view.flxGraphs.isVisible = false;
      this.view.lblTargerHeader.isVisible = false;
    }
    else
    {
      this.view.imgTarget.isVisible = false;
      this.view.lblTragetComplete.isVisible = false;
      this.view.lblTarget.text = "$22.55/$100";
      this.view.flxAlert.isVisible = false;
      this.view.flxGraphs.isVisible = true;
      chartDataToSet = [
        {"colorCode": "#1b9ed9", "label": "Jack", "value": 10.50}, 
        {"colorCode": "#e8672b", "label": "Adam", "value": 7.50}, 
        {"colorCode": "#76c044", "label": "Alexa", "value": 4.55}
      ];

    }
    this.view.donutchart.chartData = {
      "data": chartDataToSet
    };
    this.view.forceLayout();

  },

});

