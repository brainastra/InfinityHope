define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for btnAgree **/
    AS_Button_gecbe714cf25482f8856060083bda5cb: function AS_Button_gecbe714cf25482f8856060083bda5cb(eventobject, x, y) {
        var self = this;
        return self.acceptHopeInvitation.call(this);
    },
    /** onTouchEnd defined for btnDecline **/
    AS_Button_e1ffffbdda254f6d94500d0992031ca7: function AS_Button_e1ffffbdda254f6d94500d0992031ca7(eventobject, x, y) {
        var self = this;
        return self.declineHopeInvitation.call(this);
    },
    /** onTouchEnd defined for Button0h3afd3050c8b46 **/
    AS_Button_fe25cc68ed8c4af888e7f3ab389ee25e: function AS_Button_fe25cc68ed8c4af888e7f3ab389ee25e(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSelectOrg");
        ntf.navigate();
    },
    /** onNavigate defined for frmDashboard **/
    onNavigate: function AS_Form_de1ac8a06ed84894a4c5279e8f7180a4(eventobject) {
        var self = this;
        return self.onNavigate.call(this, null);
    },
    /** postShow defined for frmDashboard **/
    AS_Form_cab2b132d41942a0abb5731e2680965f: function AS_Form_cab2b132d41942a0abb5731e2680965f(eventobject) {
        var self = this;
        return self.preshow.call(this, null);
    },
    /** preShow defined for frmDashboard **/
    AS_Form_hbb24703686245b0a7583c87ad5951a0: function AS_Form_hbb24703686245b0a7583c87ad5951a0(eventobject) {
        var self = this;
        return self.preshow.call(this, null);
    }
});