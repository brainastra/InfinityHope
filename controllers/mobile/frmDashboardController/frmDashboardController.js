define({ 

 //Type your controller code here 
  preShow : function(){
    this.HamburgerFunc();
        var payload={"input":"1000000001"};
        var enteredUserName = 1000000001;
        var InfinityHopeObjServicesModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("accountFetchInfinityHope");
        //var criteria = kony.mvc.Expression.eq("$filter", "input eq " + 1000000001 );
    
       InfinityHopeObjServicesModel.accountFetch(payload,this.cback);
    

  },
  cback: function(){
    kony.print("zyx"+JSON.stringify(arguments));
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