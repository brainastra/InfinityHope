define({ 
useridReceived:null,
  preShow : function(){
    this.HamburgerFunc();
    var payload={"input":"1000000001"};
        var InfinityHopeObjServicesModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("accountFetchInfinityHope");   
       InfinityHopeObjServicesModel.accountFetch(payload,this.cback);         
  },
  onNavigate: function(){
     this.useridReceived=arguments[0].userId;
     
  },
  postShow : function(){
  },
  
  cback: function(){
    alert(JSON.stringify(resp));
    var resp=arguments[1].records;
 //   this.setTotalAmount();
    this.setValuesToSegment(resp);
  },
  setTotalAmount: function(){
    
  },
  setValuesToSegment: function(resp){
    this.view.segAccCheckingsAcc.widgetDataMap={ 
          lblTop:"Account_id", 
          lblBottom:"AccountName"};
      this.view.segAccCheckingsAcc.setData([]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
       this.view.segAccCheckingsAcc.setData(resp);
      this.view.forceLayout();
     
  },
  HamburgerFunc : function(){
    if(this.view.hamburgerMenu.isVisible===false)
      {
        this.view.hamburgerMenu.isVisible=true;
      }
    this.view.hamburgerMenu.menuItems =[
      {
      "lblMenuItem": "Dashboard",
      "imgMenuItem": "pageondot.png"
      },
      {
      "lblMenuItem": "Mobile Deposits",
      "imgMenuItem": "pageondot.png"
      },
      {
      "lblMenuItem": "Apply for loan",
      "imgMenuItem": "pageondot.png"
      },
      {
      "lblMenuItem": "Infinity Hope",
      "imgMenuItem": "pageondot.png"
      },
      {
      "lblMenuItem": "Messages",
      "imgMenuItem": "pageondot.png"
      },
      {
      "lblMenuItem": "Settings",
      "imgMenuItem": "pageondot.png"
      },
      {
      "lblMenuItem": "Locate Us",
      "imgMenuItem": "pageondot.png"
      },
      {
      "lblMenuItem": "Support",
      "imgMenuItem": "pageondot.png"
      }
  ];
  this.view.hamburgerMenu.headerText = "Developers@Temenos.com";
  this.view.hamburgerMenu.footerText = "© Temenos, 2019";
  //this.view.hamburgerMenu.profileImage = "visualizerusername_icon_1_1.png";

/* Defining events for the component */
  this.view.hamburgerMenu.onMenuItemClick = function(menuItemObject)
  {
      var itemName = JSON.stringify(menuItemObject.menuItemText);
      //alert("Menu Item Clicked: "+itemName);
      if(itemName == '"Dashboard"')
        {
          //r x = new kony.mvc.Navigation('frmDashbaord');
		  //navigate();
        }
      else if(itemName == '"Infinity Hope"')
      {
        var y = new kony.mvc.Navigation('frmSelectOrg');
        y.navigate();
      }
  };
    },
  
 });