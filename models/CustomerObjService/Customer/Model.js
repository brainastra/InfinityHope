define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Customer", "objectService" : "CustomerObjService"};
	
	var setterFunctions = {
		AddressValidationStatus : function(val, state){
			context["field"]  = "AddressValidationStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["AddressValidationStatus"] : null);
			state['AddressValidationStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		ApplicantChannel : function(val, state){
			context["field"]  = "ApplicantChannel";
			context["metadata"] = (objectMetadata ? objectMetadata["ApplicantChannel"] : null);
			state['ApplicantChannel'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		areAccountStatementTermsAccepted : function(val, state){
			context["field"]  = "areAccountStatementTermsAccepted";
			context["metadata"] = (objectMetadata ? objectMetadata["areAccountStatementTermsAccepted"] : null);
			state['areAccountStatementTermsAccepted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		areDepositTermsAccepted : function(val, state){
			context["field"]  = "areDepositTermsAccepted";
			context["metadata"] = (objectMetadata ? objectMetadata["areDepositTermsAccepted"] : null);
			state['areDepositTermsAccepted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		areUserAlertsTurnedOn : function(val, state){
			context["field"]  = "areUserAlertsTurnedOn";
			context["metadata"] = (objectMetadata ? objectMetadata["areUserAlertsTurnedOn"] : null);
			state['areUserAlertsTurnedOn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		AtionProfile_id : function(val, state){
			context["field"]  = "AtionProfile_id";
			context["metadata"] = (objectMetadata ? objectMetadata["AtionProfile_id"] : null);
			state['AtionProfile_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Bank_id : function(val, state){
			context["field"]  = "Bank_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Bank_id"] : null);
			state['Bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Classification_id : function(val, state){
			context["field"]  = "Classification_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Classification_id"] : null);
			state['Classification_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		CountryCode : function(val, state){
			context["field"]  = "CountryCode";
			context["metadata"] = (objectMetadata ? objectMetadata["CountryCode"] : null);
			state['CountryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		createdby : function(val, state){
			context["field"]  = "createdby";
			context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
			state['createdby'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		createdts : function(val, state){
			context["field"]  = "createdts";
			context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
			state['createdts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		CreditUnionMemberSince : function(val, state){
			context["field"]  = "CreditUnionMemberSince";
			context["metadata"] = (objectMetadata ? objectMetadata["CreditUnionMemberSince"] : null);
			state['CreditUnionMemberSince'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		CurrentLoginTime : function(val, state){
			context["field"]  = "CurrentLoginTime";
			context["metadata"] = (objectMetadata ? objectMetadata["CurrentLoginTime"] : null);
			state['CurrentLoginTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		CustomerType_id : function(val, state){
			context["field"]  = "CustomerType_id";
			context["metadata"] = (objectMetadata ? objectMetadata["CustomerType_id"] : null);
			state['CustomerType_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Cvv : function(val, state){
			context["field"]  = "Cvv";
			context["metadata"] = (objectMetadata ? objectMetadata["Cvv"] : null);
			state['Cvv'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		DateOfBirth : function(val, state){
			context["field"]  = "DateOfBirth";
			context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
			state['DateOfBirth'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		DocumentsSubmitted : function(val, state){
			context["field"]  = "DocumentsSubmitted";
			context["metadata"] = (objectMetadata ? objectMetadata["DocumentsSubmitted"] : null);
			state['DocumentsSubmitted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		DrivingLicenseNumber : function(val, state){
			context["field"]  = "DrivingLicenseNumber";
			context["metadata"] = (objectMetadata ? objectMetadata["DrivingLicenseNumber"] : null);
			state['DrivingLicenseNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		EligbilityCriteria : function(val, state){
			context["field"]  = "EligbilityCriteria";
			context["metadata"] = (objectMetadata ? objectMetadata["EligbilityCriteria"] : null);
			state['EligbilityCriteria'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		EmployementStatus_id : function(val, state){
			context["field"]  = "EmployementStatus_id";
			context["metadata"] = (objectMetadata ? objectMetadata["EmployementStatus_id"] : null);
			state['EmployementStatus_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		EmploymentInfo : function(val, state){
			context["field"]  = "EmploymentInfo";
			context["metadata"] = (objectMetadata ? objectMetadata["EmploymentInfo"] : null);
			state['EmploymentInfo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		FirstName : function(val, state){
			context["field"]  = "FirstName";
			context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
			state['FirstName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		FullName : function(val, state){
			context["field"]  = "FullName";
			context["metadata"] = (objectMetadata ? objectMetadata["FullName"] : null);
			state['FullName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Gender : function(val, state){
			context["field"]  = "Gender";
			context["metadata"] = (objectMetadata ? objectMetadata["Gender"] : null);
			state['Gender'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		id : function(val, state){
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IDCountry : function(val, state){
			context["field"]  = "IDCountry";
			context["metadata"] = (objectMetadata ? objectMetadata["IDCountry"] : null);
			state['IDCountry'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IDExpiryDate : function(val, state){
			context["field"]  = "IDExpiryDate";
			context["metadata"] = (objectMetadata ? objectMetadata["IDExpiryDate"] : null);
			state['IDExpiryDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IDIssueDate : function(val, state){
			context["field"]  = "IDIssueDate";
			context["metadata"] = (objectMetadata ? objectMetadata["IDIssueDate"] : null);
			state['IDIssueDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IDState : function(val, state){
			context["field"]  = "IDState";
			context["metadata"] = (objectMetadata ? objectMetadata["IDState"] : null);
			state['IDState'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IDType_id : function(val, state){
			context["field"]  = "IDType_id";
			context["metadata"] = (objectMetadata ? objectMetadata["IDType_id"] : null);
			state['IDType_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IDValue : function(val, state){
			context["field"]  = "IDValue";
			context["metadata"] = (objectMetadata ? objectMetadata["IDValue"] : null);
			state['IDValue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IsAssistConsented : function(val, state){
			context["field"]  = "IsAssistConsented";
			context["metadata"] = (objectMetadata ? objectMetadata["IsAssistConsented"] : null);
			state['IsAssistConsented'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isBillPayActivated : function(val, state){
			context["field"]  = "isBillPayActivated";
			context["metadata"] = (objectMetadata ? objectMetadata["isBillPayActivated"] : null);
			state['isBillPayActivated'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isBillPaySupported : function(val, state){
			context["field"]  = "isBillPaySupported";
			context["metadata"] = (objectMetadata ? objectMetadata["isBillPaySupported"] : null);
			state['isBillPaySupported'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IsCoreIdentityScope : function(val, state){
			context["field"]  = "IsCoreIdentityScope";
			context["metadata"] = (objectMetadata ? objectMetadata["IsCoreIdentityScope"] : null);
			state['IsCoreIdentityScope'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isEagreementSigned : function(val, state){
			context["field"]  = "isEagreementSigned";
			context["metadata"] = (objectMetadata ? objectMetadata["isEagreementSigned"] : null);
			state['isEagreementSigned'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IsEmailEnabled : function(val, state){
			context["field"]  = "IsEmailEnabled";
			context["metadata"] = (objectMetadata ? objectMetadata["IsEmailEnabled"] : null);
			state['IsEmailEnabled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isEngageProvisioned : function(val, state){
			context["field"]  = "isEngageProvisioned";
			context["metadata"] = (objectMetadata ? objectMetadata["isEngageProvisioned"] : null);
			state['isEngageProvisioned'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isEnrolled : function(val, state){
			context["field"]  = "isEnrolled";
			context["metadata"] = (objectMetadata ? objectMetadata["isEnrolled"] : null);
			state['isEnrolled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IsEnrolledForOlb : function(val, state){
			context["field"]  = "IsEnrolledForOlb";
			context["metadata"] = (objectMetadata ? objectMetadata["IsEnrolledForOlb"] : null);
			state['IsEnrolledForOlb'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IsOlbAllowed : function(val, state){
			context["field"]  = "IsOlbAllowed";
			context["metadata"] = (objectMetadata ? objectMetadata["IsOlbAllowed"] : null);
			state['IsOlbAllowed'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isP2PActivated : function(val, state){
			context["field"]  = "isP2PActivated";
			context["metadata"] = (objectMetadata ? objectMetadata["isP2PActivated"] : null);
			state['isP2PActivated'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isP2PSupported : function(val, state){
			context["field"]  = "isP2PSupported";
			context["metadata"] = (objectMetadata ? objectMetadata["isP2PSupported"] : null);
			state['isP2PSupported'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IsPhoneEnabled : function(val, state){
			context["field"]  = "IsPhoneEnabled";
			context["metadata"] = (objectMetadata ? objectMetadata["IsPhoneEnabled"] : null);
			state['IsPhoneEnabled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IsPinSet : function(val, state){
			context["field"]  = "IsPinSet";
			context["metadata"] = (objectMetadata ? objectMetadata["IsPinSet"] : null);
			state['IsPinSet'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		IsStaffMember : function(val, state){
			context["field"]  = "IsStaffMember";
			context["metadata"] = (objectMetadata ? objectMetadata["IsStaffMember"] : null);
			state['IsStaffMember'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isSuperAdmin : function(val, state){
			context["field"]  = "isSuperAdmin";
			context["metadata"] = (objectMetadata ? objectMetadata["isSuperAdmin"] : null);
			state['isSuperAdmin'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isUserAccountLocked : function(val, state){
			context["field"]  = "isUserAccountLocked";
			context["metadata"] = (objectMetadata ? objectMetadata["isUserAccountLocked"] : null);
			state['isUserAccountLocked'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isWireTransferActivated : function(val, state){
			context["field"]  = "isWireTransferActivated";
			context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferActivated"] : null);
			state['isWireTransferActivated'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		isWireTransferEligible : function(val, state){
			context["field"]  = "isWireTransferEligible";
			context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferEligible"] : null);
			state['isWireTransferEligible'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Is_BBOA : function(val, state){
			context["field"]  = "Is_BBOA";
			context["metadata"] = (objectMetadata ? objectMetadata["Is_BBOA"] : null);
			state['Is_BBOA'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Is_MemberEligibile : function(val, state){
			context["field"]  = "Is_MemberEligibile";
			context["metadata"] = (objectMetadata ? objectMetadata["Is_MemberEligibile"] : null);
			state['Is_MemberEligibile'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Lastlogintime : function(val, state){
			context["field"]  = "Lastlogintime";
			context["metadata"] = (objectMetadata ? objectMetadata["Lastlogintime"] : null);
			state['Lastlogintime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		lastmodifiedts : function(val, state){
			context["field"]  = "lastmodifiedts";
			context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
			state['lastmodifiedts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		LastName : function(val, state){
			context["field"]  = "LastName";
			context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
			state['LastName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Location_id : function(val, state){
			context["field"]  = "Location_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Location_id"] : null);
			state['Location_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		lockCount : function(val, state){
			context["field"]  = "lockCount";
			context["metadata"] = (objectMetadata ? objectMetadata["lockCount"] : null);
			state['lockCount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		lockedOn : function(val, state){
			context["field"]  = "lockedOn";
			context["metadata"] = (objectMetadata ? objectMetadata["lockedOn"] : null);
			state['lockedOn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		MaritalStatus : function(val, state){
			context["field"]  = "MaritalStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["MaritalStatus"] : null);
			state['MaritalStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		MaritalStatus_id : function(val, state){
			context["field"]  = "MaritalStatus_id";
			context["metadata"] = (objectMetadata ? objectMetadata["MaritalStatus_id"] : null);
			state['MaritalStatus_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		MemberEligibilityData : function(val, state){
			context["field"]  = "MemberEligibilityData";
			context["metadata"] = (objectMetadata ? objectMetadata["MemberEligibilityData"] : null);
			state['MemberEligibilityData'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		MiddleName : function(val, state){
			context["field"]  = "MiddleName";
			context["metadata"] = (objectMetadata ? objectMetadata["MiddleName"] : null);
			state['MiddleName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		modifiedby : function(val, state){
			context["field"]  = "modifiedby";
			context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
			state['modifiedby'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		MothersMaidenName : function(val, state){
			context["field"]  = "MothersMaidenName";
			context["metadata"] = (objectMetadata ? objectMetadata["MothersMaidenName"] : null);
			state['MothersMaidenName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		NoOfDependents : function(val, state){
			context["field"]  = "NoOfDependents";
			context["metadata"] = (objectMetadata ? objectMetadata["NoOfDependents"] : null);
			state['NoOfDependents'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		OlbEnrolmentStatus_id : function(val, state){
			context["field"]  = "OlbEnrolmentStatus_id";
			context["metadata"] = (objectMetadata ? objectMetadata["OlbEnrolmentStatus_id"] : null);
			state['OlbEnrolmentStatus_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Organization_Id : function(val, state){
			context["field"]  = "Organization_Id";
			context["metadata"] = (objectMetadata ? objectMetadata["Organization_Id"] : null);
			state['Organization_Id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Otp : function(val, state){
			context["field"]  = "Otp";
			context["metadata"] = (objectMetadata ? objectMetadata["Otp"] : null);
			state['Otp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		OtpGenaratedts : function(val, state){
			context["field"]  = "OtpGenaratedts";
			context["metadata"] = (objectMetadata ? objectMetadata["OtpGenaratedts"] : null);
			state['OtpGenaratedts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Password : function(val, state){
			context["field"]  = "Password";
			context["metadata"] = (objectMetadata ? objectMetadata["Password"] : null);
			state['Password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Pin : function(val, state){
			context["field"]  = "Pin";
			context["metadata"] = (objectMetadata ? objectMetadata["Pin"] : null);
			state['Pin'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		PreferedOtpMethod : function(val, state){
			context["field"]  = "PreferedOtpMethod";
			context["metadata"] = (objectMetadata ? objectMetadata["PreferedOtpMethod"] : null);
			state['PreferedOtpMethod'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		PreferredContactMethod : function(val, state){
			context["field"]  = "PreferredContactMethod";
			context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactMethod"] : null);
			state['PreferredContactMethod'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		PreferredContactTime : function(val, state){
			context["field"]  = "PreferredContactTime";
			context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
			state['PreferredContactTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Product : function(val, state){
			context["field"]  = "Product";
			context["metadata"] = (objectMetadata ? objectMetadata["Product"] : null);
			state['Product'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Reason : function(val, state){
			context["field"]  = "Reason";
			context["metadata"] = (objectMetadata ? objectMetadata["Reason"] : null);
			state['Reason'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		RegistrationLink : function(val, state){
			context["field"]  = "RegistrationLink";
			context["metadata"] = (objectMetadata ? objectMetadata["RegistrationLink"] : null);
			state['RegistrationLink'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		RegLinkResendCount : function(val, state){
			context["field"]  = "RegLinkResendCount";
			context["metadata"] = (objectMetadata ? objectMetadata["RegLinkResendCount"] : null);
			state['RegLinkResendCount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		RegLinkValidity : function(val, state){
			context["field"]  = "RegLinkValidity";
			context["metadata"] = (objectMetadata ? objectMetadata["RegLinkValidity"] : null);
			state['RegLinkValidity'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Salutation : function(val, state){
			context["field"]  = "Salutation";
			context["metadata"] = (objectMetadata ? objectMetadata["Salutation"] : null);
			state['Salutation'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		SecurityImage_id : function(val, state){
			context["field"]  = "SecurityImage_id";
			context["metadata"] = (objectMetadata ? objectMetadata["SecurityImage_id"] : null);
			state['SecurityImage_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Session_id : function(val, state){
			context["field"]  = "Session_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Session_id"] : null);
			state['Session_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		softdeleteflag : function(val, state){
			context["field"]  = "softdeleteflag";
			context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
			state['softdeleteflag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		SpouseFirstName : function(val, state){
			context["field"]  = "SpouseFirstName";
			context["metadata"] = (objectMetadata ? objectMetadata["SpouseFirstName"] : null);
			state['SpouseFirstName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		SpouseLastName : function(val, state){
			context["field"]  = "SpouseLastName";
			context["metadata"] = (objectMetadata ? objectMetadata["SpouseLastName"] : null);
			state['SpouseLastName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		SpouseName : function(val, state){
			context["field"]  = "SpouseName";
			context["metadata"] = (objectMetadata ? objectMetadata["SpouseName"] : null);
			state['SpouseName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Ssn : function(val, state){
			context["field"]  = "Ssn";
			context["metadata"] = (objectMetadata ? objectMetadata["Ssn"] : null);
			state['Ssn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Status_id : function(val, state){
			context["field"]  = "Status_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
			state['Status_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		synctimestamp : function(val, state){
			context["field"]  = "synctimestamp";
			context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
			state['synctimestamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Token : function(val, state){
			context["field"]  = "Token";
			context["metadata"] = (objectMetadata ? objectMetadata["Token"] : null);
			state['Token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		unsuccessfulLoginAttempts : function(val, state){
			context["field"]  = "unsuccessfulLoginAttempts";
			context["metadata"] = (objectMetadata ? objectMetadata["unsuccessfulLoginAttempts"] : null);
			state['unsuccessfulLoginAttempts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		UserCompany : function(val, state){
			context["field"]  = "UserCompany";
			context["metadata"] = (objectMetadata ? objectMetadata["UserCompany"] : null);
			state['UserCompany'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		UserImage : function(val, state){
			context["field"]  = "UserImage";
			context["metadata"] = (objectMetadata ? objectMetadata["UserImage"] : null);
			state['UserImage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		UserImageURL : function(val, state){
			context["field"]  = "UserImageURL";
			context["metadata"] = (objectMetadata ? objectMetadata["UserImageURL"] : null);
			state['UserImageURL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		UserName : function(val, state){
			context["field"]  = "UserName";
			context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
			state['UserName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		ValidDate : function(val, state){
			context["field"]  = "ValidDate";
			context["metadata"] = (objectMetadata ? objectMetadata["ValidDate"] : null);
			state['ValidDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function Customer(defaultValues){
		var privateState = {};
			context["field"]  = "AddressValidationStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["AddressValidationStatus"] : null);
			privateState.AddressValidationStatus = defaultValues?(defaultValues["AddressValidationStatus"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AddressValidationStatus"], context):null):null;
			context["field"]  = "ApplicantChannel";
			context["metadata"] = (objectMetadata ? objectMetadata["ApplicantChannel"] : null);
			privateState.ApplicantChannel = defaultValues?(defaultValues["ApplicantChannel"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ApplicantChannel"], context):null):null;
			context["field"]  = "areAccountStatementTermsAccepted";
			context["metadata"] = (objectMetadata ? objectMetadata["areAccountStatementTermsAccepted"] : null);
			privateState.areAccountStatementTermsAccepted = defaultValues?(defaultValues["areAccountStatementTermsAccepted"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["areAccountStatementTermsAccepted"], context):null):null;
			context["field"]  = "areDepositTermsAccepted";
			context["metadata"] = (objectMetadata ? objectMetadata["areDepositTermsAccepted"] : null);
			privateState.areDepositTermsAccepted = defaultValues?(defaultValues["areDepositTermsAccepted"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["areDepositTermsAccepted"], context):null):null;
			context["field"]  = "areUserAlertsTurnedOn";
			context["metadata"] = (objectMetadata ? objectMetadata["areUserAlertsTurnedOn"] : null);
			privateState.areUserAlertsTurnedOn = defaultValues?(defaultValues["areUserAlertsTurnedOn"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["areUserAlertsTurnedOn"], context):null):null;
			context["field"]  = "AtionProfile_id";
			context["metadata"] = (objectMetadata ? objectMetadata["AtionProfile_id"] : null);
			privateState.AtionProfile_id = defaultValues?(defaultValues["AtionProfile_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AtionProfile_id"], context):null):null;
			context["field"]  = "Bank_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Bank_id"] : null);
			privateState.Bank_id = defaultValues?(defaultValues["Bank_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Bank_id"], context):null):null;
			context["field"]  = "Classification_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Classification_id"] : null);
			privateState.Classification_id = defaultValues?(defaultValues["Classification_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Classification_id"], context):null):null;
			context["field"]  = "CountryCode";
			context["metadata"] = (objectMetadata ? objectMetadata["CountryCode"] : null);
			privateState.CountryCode = defaultValues?(defaultValues["CountryCode"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CountryCode"], context):null):null;
			context["field"]  = "createdby";
			context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
			privateState.createdby = defaultValues?(defaultValues["createdby"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdby"], context):null):null;
			context["field"]  = "createdts";
			context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
			privateState.createdts = defaultValues?(defaultValues["createdts"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdts"], context):null):null;
			context["field"]  = "CreditUnionMemberSince";
			context["metadata"] = (objectMetadata ? objectMetadata["CreditUnionMemberSince"] : null);
			privateState.CreditUnionMemberSince = defaultValues?(defaultValues["CreditUnionMemberSince"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreditUnionMemberSince"], context):null):null;
			context["field"]  = "CurrentLoginTime";
			context["metadata"] = (objectMetadata ? objectMetadata["CurrentLoginTime"] : null);
			privateState.CurrentLoginTime = defaultValues?(defaultValues["CurrentLoginTime"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CurrentLoginTime"], context):null):null;
			context["field"]  = "CustomerType_id";
			context["metadata"] = (objectMetadata ? objectMetadata["CustomerType_id"] : null);
			privateState.CustomerType_id = defaultValues?(defaultValues["CustomerType_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CustomerType_id"], context):null):null;
			context["field"]  = "Cvv";
			context["metadata"] = (objectMetadata ? objectMetadata["Cvv"] : null);
			privateState.Cvv = defaultValues?(defaultValues["Cvv"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Cvv"], context):null):null;
			context["field"]  = "DateOfBirth";
			context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
			privateState.DateOfBirth = defaultValues?(defaultValues["DateOfBirth"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DateOfBirth"], context):null):null;
			context["field"]  = "DocumentsSubmitted";
			context["metadata"] = (objectMetadata ? objectMetadata["DocumentsSubmitted"] : null);
			privateState.DocumentsSubmitted = defaultValues?(defaultValues["DocumentsSubmitted"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DocumentsSubmitted"], context):null):null;
			context["field"]  = "DrivingLicenseNumber";
			context["metadata"] = (objectMetadata ? objectMetadata["DrivingLicenseNumber"] : null);
			privateState.DrivingLicenseNumber = defaultValues?(defaultValues["DrivingLicenseNumber"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DrivingLicenseNumber"], context):null):null;
			context["field"]  = "EligbilityCriteria";
			context["metadata"] = (objectMetadata ? objectMetadata["EligbilityCriteria"] : null);
			privateState.EligbilityCriteria = defaultValues?(defaultValues["EligbilityCriteria"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["EligbilityCriteria"], context):null):null;
			context["field"]  = "EmployementStatus_id";
			context["metadata"] = (objectMetadata ? objectMetadata["EmployementStatus_id"] : null);
			privateState.EmployementStatus_id = defaultValues?(defaultValues["EmployementStatus_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["EmployementStatus_id"], context):null):null;
			context["field"]  = "EmploymentInfo";
			context["metadata"] = (objectMetadata ? objectMetadata["EmploymentInfo"] : null);
			privateState.EmploymentInfo = defaultValues?(defaultValues["EmploymentInfo"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["EmploymentInfo"], context):null):null;
			context["field"]  = "FirstName";
			context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
			privateState.FirstName = defaultValues?(defaultValues["FirstName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FirstName"], context):null):null;
			context["field"]  = "FullName";
			context["metadata"] = (objectMetadata ? objectMetadata["FullName"] : null);
			privateState.FullName = defaultValues?(defaultValues["FullName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FullName"], context):null):null;
			context["field"]  = "Gender";
			context["metadata"] = (objectMetadata ? objectMetadata["Gender"] : null);
			privateState.Gender = defaultValues?(defaultValues["Gender"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Gender"], context):null):null;
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			privateState.id = defaultValues?(defaultValues["id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context):null):null;
			context["field"]  = "IDCountry";
			context["metadata"] = (objectMetadata ? objectMetadata["IDCountry"] : null);
			privateState.IDCountry = defaultValues?(defaultValues["IDCountry"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IDCountry"], context):null):null;
			context["field"]  = "IDExpiryDate";
			context["metadata"] = (objectMetadata ? objectMetadata["IDExpiryDate"] : null);
			privateState.IDExpiryDate = defaultValues?(defaultValues["IDExpiryDate"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IDExpiryDate"], context):null):null;
			context["field"]  = "IDIssueDate";
			context["metadata"] = (objectMetadata ? objectMetadata["IDIssueDate"] : null);
			privateState.IDIssueDate = defaultValues?(defaultValues["IDIssueDate"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IDIssueDate"], context):null):null;
			context["field"]  = "IDState";
			context["metadata"] = (objectMetadata ? objectMetadata["IDState"] : null);
			privateState.IDState = defaultValues?(defaultValues["IDState"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IDState"], context):null):null;
			context["field"]  = "IDType_id";
			context["metadata"] = (objectMetadata ? objectMetadata["IDType_id"] : null);
			privateState.IDType_id = defaultValues?(defaultValues["IDType_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IDType_id"], context):null):null;
			context["field"]  = "IDValue";
			context["metadata"] = (objectMetadata ? objectMetadata["IDValue"] : null);
			privateState.IDValue = defaultValues?(defaultValues["IDValue"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IDValue"], context):null):null;
			context["field"]  = "IsAssistConsented";
			context["metadata"] = (objectMetadata ? objectMetadata["IsAssistConsented"] : null);
			privateState.IsAssistConsented = defaultValues?(defaultValues["IsAssistConsented"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsAssistConsented"], context):null):null;
			context["field"]  = "isBillPayActivated";
			context["metadata"] = (objectMetadata ? objectMetadata["isBillPayActivated"] : null);
			privateState.isBillPayActivated = defaultValues?(defaultValues["isBillPayActivated"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isBillPayActivated"], context):null):null;
			context["field"]  = "isBillPaySupported";
			context["metadata"] = (objectMetadata ? objectMetadata["isBillPaySupported"] : null);
			privateState.isBillPaySupported = defaultValues?(defaultValues["isBillPaySupported"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isBillPaySupported"], context):null):null;
			context["field"]  = "IsCoreIdentityScope";
			context["metadata"] = (objectMetadata ? objectMetadata["IsCoreIdentityScope"] : null);
			privateState.IsCoreIdentityScope = defaultValues?(defaultValues["IsCoreIdentityScope"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsCoreIdentityScope"], context):null):null;
			context["field"]  = "isEagreementSigned";
			context["metadata"] = (objectMetadata ? objectMetadata["isEagreementSigned"] : null);
			privateState.isEagreementSigned = defaultValues?(defaultValues["isEagreementSigned"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isEagreementSigned"], context):null):null;
			context["field"]  = "IsEmailEnabled";
			context["metadata"] = (objectMetadata ? objectMetadata["IsEmailEnabled"] : null);
			privateState.IsEmailEnabled = defaultValues?(defaultValues["IsEmailEnabled"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsEmailEnabled"], context):null):null;
			context["field"]  = "isEngageProvisioned";
			context["metadata"] = (objectMetadata ? objectMetadata["isEngageProvisioned"] : null);
			privateState.isEngageProvisioned = defaultValues?(defaultValues["isEngageProvisioned"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isEngageProvisioned"], context):null):null;
			context["field"]  = "isEnrolled";
			context["metadata"] = (objectMetadata ? objectMetadata["isEnrolled"] : null);
			privateState.isEnrolled = defaultValues?(defaultValues["isEnrolled"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isEnrolled"], context):null):null;
			context["field"]  = "IsEnrolledForOlb";
			context["metadata"] = (objectMetadata ? objectMetadata["IsEnrolledForOlb"] : null);
			privateState.IsEnrolledForOlb = defaultValues?(defaultValues["IsEnrolledForOlb"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsEnrolledForOlb"], context):null):null;
			context["field"]  = "IsOlbAllowed";
			context["metadata"] = (objectMetadata ? objectMetadata["IsOlbAllowed"] : null);
			privateState.IsOlbAllowed = defaultValues?(defaultValues["IsOlbAllowed"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsOlbAllowed"], context):null):null;
			context["field"]  = "isP2PActivated";
			context["metadata"] = (objectMetadata ? objectMetadata["isP2PActivated"] : null);
			privateState.isP2PActivated = defaultValues?(defaultValues["isP2PActivated"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isP2PActivated"], context):null):null;
			context["field"]  = "isP2PSupported";
			context["metadata"] = (objectMetadata ? objectMetadata["isP2PSupported"] : null);
			privateState.isP2PSupported = defaultValues?(defaultValues["isP2PSupported"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isP2PSupported"], context):null):null;
			context["field"]  = "IsPhoneEnabled";
			context["metadata"] = (objectMetadata ? objectMetadata["IsPhoneEnabled"] : null);
			privateState.IsPhoneEnabled = defaultValues?(defaultValues["IsPhoneEnabled"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsPhoneEnabled"], context):null):null;
			context["field"]  = "IsPinSet";
			context["metadata"] = (objectMetadata ? objectMetadata["IsPinSet"] : null);
			privateState.IsPinSet = defaultValues?(defaultValues["IsPinSet"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsPinSet"], context):null):null;
			context["field"]  = "IsStaffMember";
			context["metadata"] = (objectMetadata ? objectMetadata["IsStaffMember"] : null);
			privateState.IsStaffMember = defaultValues?(defaultValues["IsStaffMember"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsStaffMember"], context):null):null;
			context["field"]  = "isSuperAdmin";
			context["metadata"] = (objectMetadata ? objectMetadata["isSuperAdmin"] : null);
			privateState.isSuperAdmin = defaultValues?(defaultValues["isSuperAdmin"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isSuperAdmin"], context):null):null;
			context["field"]  = "isUserAccountLocked";
			context["metadata"] = (objectMetadata ? objectMetadata["isUserAccountLocked"] : null);
			privateState.isUserAccountLocked = defaultValues?(defaultValues["isUserAccountLocked"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isUserAccountLocked"], context):null):null;
			context["field"]  = "isWireTransferActivated";
			context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferActivated"] : null);
			privateState.isWireTransferActivated = defaultValues?(defaultValues["isWireTransferActivated"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isWireTransferActivated"], context):null):null;
			context["field"]  = "isWireTransferEligible";
			context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferEligible"] : null);
			privateState.isWireTransferEligible = defaultValues?(defaultValues["isWireTransferEligible"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isWireTransferEligible"], context):null):null;
			context["field"]  = "Is_BBOA";
			context["metadata"] = (objectMetadata ? objectMetadata["Is_BBOA"] : null);
			privateState.Is_BBOA = defaultValues?(defaultValues["Is_BBOA"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Is_BBOA"], context):null):null;
			context["field"]  = "Is_MemberEligibile";
			context["metadata"] = (objectMetadata ? objectMetadata["Is_MemberEligibile"] : null);
			privateState.Is_MemberEligibile = defaultValues?(defaultValues["Is_MemberEligibile"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Is_MemberEligibile"], context):null):null;
			context["field"]  = "Lastlogintime";
			context["metadata"] = (objectMetadata ? objectMetadata["Lastlogintime"] : null);
			privateState.Lastlogintime = defaultValues?(defaultValues["Lastlogintime"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Lastlogintime"], context):null):null;
			context["field"]  = "lastmodifiedts";
			context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
			privateState.lastmodifiedts = defaultValues?(defaultValues["lastmodifiedts"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastmodifiedts"], context):null):null;
			context["field"]  = "LastName";
			context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
			privateState.LastName = defaultValues?(defaultValues["LastName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastName"], context):null):null;
			context["field"]  = "Location_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Location_id"] : null);
			privateState.Location_id = defaultValues?(defaultValues["Location_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Location_id"], context):null):null;
			context["field"]  = "lockCount";
			context["metadata"] = (objectMetadata ? objectMetadata["lockCount"] : null);
			privateState.lockCount = defaultValues?(defaultValues["lockCount"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lockCount"], context):null):null;
			context["field"]  = "lockedOn";
			context["metadata"] = (objectMetadata ? objectMetadata["lockedOn"] : null);
			privateState.lockedOn = defaultValues?(defaultValues["lockedOn"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lockedOn"], context):null):null;
			context["field"]  = "MaritalStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["MaritalStatus"] : null);
			privateState.MaritalStatus = defaultValues?(defaultValues["MaritalStatus"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MaritalStatus"], context):null):null;
			context["field"]  = "MaritalStatus_id";
			context["metadata"] = (objectMetadata ? objectMetadata["MaritalStatus_id"] : null);
			privateState.MaritalStatus_id = defaultValues?(defaultValues["MaritalStatus_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MaritalStatus_id"], context):null):null;
			context["field"]  = "MemberEligibilityData";
			context["metadata"] = (objectMetadata ? objectMetadata["MemberEligibilityData"] : null);
			privateState.MemberEligibilityData = defaultValues?(defaultValues["MemberEligibilityData"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MemberEligibilityData"], context):null):null;
			context["field"]  = "MiddleName";
			context["metadata"] = (objectMetadata ? objectMetadata["MiddleName"] : null);
			privateState.MiddleName = defaultValues?(defaultValues["MiddleName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MiddleName"], context):null):null;
			context["field"]  = "modifiedby";
			context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
			privateState.modifiedby = defaultValues?(defaultValues["modifiedby"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["modifiedby"], context):null):null;
			context["field"]  = "MothersMaidenName";
			context["metadata"] = (objectMetadata ? objectMetadata["MothersMaidenName"] : null);
			privateState.MothersMaidenName = defaultValues?(defaultValues["MothersMaidenName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MothersMaidenName"], context):null):null;
			context["field"]  = "NoOfDependents";
			context["metadata"] = (objectMetadata ? objectMetadata["NoOfDependents"] : null);
			privateState.NoOfDependents = defaultValues?(defaultValues["NoOfDependents"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NoOfDependents"], context):null):null;
			context["field"]  = "OlbEnrolmentStatus_id";
			context["metadata"] = (objectMetadata ? objectMetadata["OlbEnrolmentStatus_id"] : null);
			privateState.OlbEnrolmentStatus_id = defaultValues?(defaultValues["OlbEnrolmentStatus_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OlbEnrolmentStatus_id"], context):null):null;
			context["field"]  = "Organization_Id";
			context["metadata"] = (objectMetadata ? objectMetadata["Organization_Id"] : null);
			privateState.Organization_Id = defaultValues?(defaultValues["Organization_Id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Organization_Id"], context):null):null;
			context["field"]  = "Otp";
			context["metadata"] = (objectMetadata ? objectMetadata["Otp"] : null);
			privateState.Otp = defaultValues?(defaultValues["Otp"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Otp"], context):null):null;
			context["field"]  = "OtpGenaratedts";
			context["metadata"] = (objectMetadata ? objectMetadata["OtpGenaratedts"] : null);
			privateState.OtpGenaratedts = defaultValues?(defaultValues["OtpGenaratedts"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OtpGenaratedts"], context):null):null;
			context["field"]  = "Password";
			context["metadata"] = (objectMetadata ? objectMetadata["Password"] : null);
			privateState.Password = defaultValues?(defaultValues["Password"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Password"], context):null):null;
			context["field"]  = "Pin";
			context["metadata"] = (objectMetadata ? objectMetadata["Pin"] : null);
			privateState.Pin = defaultValues?(defaultValues["Pin"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Pin"], context):null):null;
			context["field"]  = "PreferedOtpMethod";
			context["metadata"] = (objectMetadata ? objectMetadata["PreferedOtpMethod"] : null);
			privateState.PreferedOtpMethod = defaultValues?(defaultValues["PreferedOtpMethod"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PreferedOtpMethod"], context):null):null;
			context["field"]  = "PreferredContactMethod";
			context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactMethod"] : null);
			privateState.PreferredContactMethod = defaultValues?(defaultValues["PreferredContactMethod"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PreferredContactMethod"], context):null):null;
			context["field"]  = "PreferredContactTime";
			context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
			privateState.PreferredContactTime = defaultValues?(defaultValues["PreferredContactTime"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PreferredContactTime"], context):null):null;
			context["field"]  = "Product";
			context["metadata"] = (objectMetadata ? objectMetadata["Product"] : null);
			privateState.Product = defaultValues?(defaultValues["Product"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Product"], context):null):null;
			context["field"]  = "Reason";
			context["metadata"] = (objectMetadata ? objectMetadata["Reason"] : null);
			privateState.Reason = defaultValues?(defaultValues["Reason"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Reason"], context):null):null;
			context["field"]  = "RegistrationLink";
			context["metadata"] = (objectMetadata ? objectMetadata["RegistrationLink"] : null);
			privateState.RegistrationLink = defaultValues?(defaultValues["RegistrationLink"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RegistrationLink"], context):null):null;
			context["field"]  = "RegLinkResendCount";
			context["metadata"] = (objectMetadata ? objectMetadata["RegLinkResendCount"] : null);
			privateState.RegLinkResendCount = defaultValues?(defaultValues["RegLinkResendCount"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RegLinkResendCount"], context):null):null;
			context["field"]  = "RegLinkValidity";
			context["metadata"] = (objectMetadata ? objectMetadata["RegLinkValidity"] : null);
			privateState.RegLinkValidity = defaultValues?(defaultValues["RegLinkValidity"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RegLinkValidity"], context):null):null;
			context["field"]  = "Salutation";
			context["metadata"] = (objectMetadata ? objectMetadata["Salutation"] : null);
			privateState.Salutation = defaultValues?(defaultValues["Salutation"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Salutation"], context):null):null;
			context["field"]  = "SecurityImage_id";
			context["metadata"] = (objectMetadata ? objectMetadata["SecurityImage_id"] : null);
			privateState.SecurityImage_id = defaultValues?(defaultValues["SecurityImage_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SecurityImage_id"], context):null):null;
			context["field"]  = "Session_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Session_id"] : null);
			privateState.Session_id = defaultValues?(defaultValues["Session_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Session_id"], context):null):null;
			context["field"]  = "softdeleteflag";
			context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["softdeleteflag"], context):null):null;
			context["field"]  = "SpouseFirstName";
			context["metadata"] = (objectMetadata ? objectMetadata["SpouseFirstName"] : null);
			privateState.SpouseFirstName = defaultValues?(defaultValues["SpouseFirstName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SpouseFirstName"], context):null):null;
			context["field"]  = "SpouseLastName";
			context["metadata"] = (objectMetadata ? objectMetadata["SpouseLastName"] : null);
			privateState.SpouseLastName = defaultValues?(defaultValues["SpouseLastName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SpouseLastName"], context):null):null;
			context["field"]  = "SpouseName";
			context["metadata"] = (objectMetadata ? objectMetadata["SpouseName"] : null);
			privateState.SpouseName = defaultValues?(defaultValues["SpouseName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SpouseName"], context):null):null;
			context["field"]  = "Ssn";
			context["metadata"] = (objectMetadata ? objectMetadata["Ssn"] : null);
			privateState.Ssn = defaultValues?(defaultValues["Ssn"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Ssn"], context):null):null;
			context["field"]  = "Status_id";
			context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
			privateState.Status_id = defaultValues?(defaultValues["Status_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Status_id"], context):null):null;
			context["field"]  = "synctimestamp";
			context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
			privateState.synctimestamp = defaultValues?(defaultValues["synctimestamp"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["synctimestamp"], context):null):null;
			context["field"]  = "Token";
			context["metadata"] = (objectMetadata ? objectMetadata["Token"] : null);
			privateState.Token = defaultValues?(defaultValues["Token"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Token"], context):null):null;
			context["field"]  = "unsuccessfulLoginAttempts";
			context["metadata"] = (objectMetadata ? objectMetadata["unsuccessfulLoginAttempts"] : null);
			privateState.unsuccessfulLoginAttempts = defaultValues?(defaultValues["unsuccessfulLoginAttempts"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["unsuccessfulLoginAttempts"], context):null):null;
			context["field"]  = "UserCompany";
			context["metadata"] = (objectMetadata ? objectMetadata["UserCompany"] : null);
			privateState.UserCompany = defaultValues?(defaultValues["UserCompany"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserCompany"], context):null):null;
			context["field"]  = "UserImage";
			context["metadata"] = (objectMetadata ? objectMetadata["UserImage"] : null);
			privateState.UserImage = defaultValues?(defaultValues["UserImage"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserImage"], context):null):null;
			context["field"]  = "UserImageURL";
			context["metadata"] = (objectMetadata ? objectMetadata["UserImageURL"] : null);
			privateState.UserImageURL = defaultValues?(defaultValues["UserImageURL"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserImageURL"], context):null):null;
			context["field"]  = "UserName";
			context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
			privateState.UserName = defaultValues?(defaultValues["UserName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserName"], context):null):null;
			context["field"]  = "ValidDate";
			context["metadata"] = (objectMetadata ? objectMetadata["ValidDate"] : null);
			privateState.ValidDate = defaultValues?(defaultValues["ValidDate"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ValidDate"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"AddressValidationStatus" : {
					get : function(){
						context["field"]  = "AddressValidationStatus";
			        	context["metadata"] = (objectMetadata ? objectMetadata["AddressValidationStatus"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AddressValidationStatus, context);},
					set : function(val){
						setterFunctions['AddressValidationStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ApplicantChannel" : {
					get : function(){
						context["field"]  = "ApplicantChannel";
			        	context["metadata"] = (objectMetadata ? objectMetadata["ApplicantChannel"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ApplicantChannel, context);},
					set : function(val){
						setterFunctions['ApplicantChannel'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"areAccountStatementTermsAccepted" : {
					get : function(){
						context["field"]  = "areAccountStatementTermsAccepted";
			        	context["metadata"] = (objectMetadata ? objectMetadata["areAccountStatementTermsAccepted"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.areAccountStatementTermsAccepted, context);},
					set : function(val){
						setterFunctions['areAccountStatementTermsAccepted'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"areDepositTermsAccepted" : {
					get : function(){
						context["field"]  = "areDepositTermsAccepted";
			        	context["metadata"] = (objectMetadata ? objectMetadata["areDepositTermsAccepted"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.areDepositTermsAccepted, context);},
					set : function(val){
						setterFunctions['areDepositTermsAccepted'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"areUserAlertsTurnedOn" : {
					get : function(){
						context["field"]  = "areUserAlertsTurnedOn";
			        	context["metadata"] = (objectMetadata ? objectMetadata["areUserAlertsTurnedOn"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.areUserAlertsTurnedOn, context);},
					set : function(val){
						setterFunctions['areUserAlertsTurnedOn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AtionProfile_id" : {
					get : function(){
						context["field"]  = "AtionProfile_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["AtionProfile_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AtionProfile_id, context);},
					set : function(val){
						setterFunctions['AtionProfile_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Bank_id" : {
					get : function(){
						context["field"]  = "Bank_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Bank_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Bank_id, context);},
					set : function(val){
						setterFunctions['Bank_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Classification_id" : {
					get : function(){
						context["field"]  = "Classification_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Classification_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Classification_id, context);},
					set : function(val){
						setterFunctions['Classification_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CountryCode" : {
					get : function(){
						context["field"]  = "CountryCode";
			        	context["metadata"] = (objectMetadata ? objectMetadata["CountryCode"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CountryCode, context);},
					set : function(val){
						setterFunctions['CountryCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdby" : {
					get : function(){
						context["field"]  = "createdby";
			        	context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdby, context);},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdts" : {
					get : function(){
						context["field"]  = "createdts";
			        	context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdts, context);},
					set : function(val){
						setterFunctions['createdts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CreditUnionMemberSince" : {
					get : function(){
						context["field"]  = "CreditUnionMemberSince";
			        	context["metadata"] = (objectMetadata ? objectMetadata["CreditUnionMemberSince"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreditUnionMemberSince, context);},
					set : function(val){
						setterFunctions['CreditUnionMemberSince'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CurrentLoginTime" : {
					get : function(){
						context["field"]  = "CurrentLoginTime";
			        	context["metadata"] = (objectMetadata ? objectMetadata["CurrentLoginTime"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CurrentLoginTime, context);},
					set : function(val){
						setterFunctions['CurrentLoginTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CustomerType_id" : {
					get : function(){
						context["field"]  = "CustomerType_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["CustomerType_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CustomerType_id, context);},
					set : function(val){
						setterFunctions['CustomerType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Cvv" : {
					get : function(){
						context["field"]  = "Cvv";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Cvv"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Cvv, context);},
					set : function(val){
						setterFunctions['Cvv'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DateOfBirth" : {
					get : function(){
						context["field"]  = "DateOfBirth";
			        	context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DateOfBirth, context);},
					set : function(val){
						setterFunctions['DateOfBirth'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DocumentsSubmitted" : {
					get : function(){
						context["field"]  = "DocumentsSubmitted";
			        	context["metadata"] = (objectMetadata ? objectMetadata["DocumentsSubmitted"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DocumentsSubmitted, context);},
					set : function(val){
						setterFunctions['DocumentsSubmitted'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DrivingLicenseNumber" : {
					get : function(){
						context["field"]  = "DrivingLicenseNumber";
			        	context["metadata"] = (objectMetadata ? objectMetadata["DrivingLicenseNumber"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DrivingLicenseNumber, context);},
					set : function(val){
						setterFunctions['DrivingLicenseNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EligbilityCriteria" : {
					get : function(){
						context["field"]  = "EligbilityCriteria";
			        	context["metadata"] = (objectMetadata ? objectMetadata["EligbilityCriteria"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.EligbilityCriteria, context);},
					set : function(val){
						setterFunctions['EligbilityCriteria'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EmployementStatus_id" : {
					get : function(){
						context["field"]  = "EmployementStatus_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["EmployementStatus_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.EmployementStatus_id, context);},
					set : function(val){
						setterFunctions['EmployementStatus_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EmploymentInfo" : {
					get : function(){
						context["field"]  = "EmploymentInfo";
			        	context["metadata"] = (objectMetadata ? objectMetadata["EmploymentInfo"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.EmploymentInfo, context);},
					set : function(val){
						setterFunctions['EmploymentInfo'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FirstName" : {
					get : function(){
						context["field"]  = "FirstName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FirstName, context);},
					set : function(val){
						setterFunctions['FirstName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FullName" : {
					get : function(){
						context["field"]  = "FullName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["FullName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FullName, context);},
					set : function(val){
						setterFunctions['FullName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Gender" : {
					get : function(){
						context["field"]  = "Gender";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Gender"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Gender, context);},
					set : function(val){
						setterFunctions['Gender'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){
						context["field"]  = "id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDCountry" : {
					get : function(){
						context["field"]  = "IDCountry";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IDCountry"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IDCountry, context);},
					set : function(val){
						setterFunctions['IDCountry'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDExpiryDate" : {
					get : function(){
						context["field"]  = "IDExpiryDate";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IDExpiryDate"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IDExpiryDate, context);},
					set : function(val){
						setterFunctions['IDExpiryDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDIssueDate" : {
					get : function(){
						context["field"]  = "IDIssueDate";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IDIssueDate"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IDIssueDate, context);},
					set : function(val){
						setterFunctions['IDIssueDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDState" : {
					get : function(){
						context["field"]  = "IDState";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IDState"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IDState, context);},
					set : function(val){
						setterFunctions['IDState'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDType_id" : {
					get : function(){
						context["field"]  = "IDType_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IDType_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IDType_id, context);},
					set : function(val){
						setterFunctions['IDType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDValue" : {
					get : function(){
						context["field"]  = "IDValue";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IDValue"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IDValue, context);},
					set : function(val){
						setterFunctions['IDValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsAssistConsented" : {
					get : function(){
						context["field"]  = "IsAssistConsented";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IsAssistConsented"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsAssistConsented, context);},
					set : function(val){
						setterFunctions['IsAssistConsented'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isBillPayActivated" : {
					get : function(){
						context["field"]  = "isBillPayActivated";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isBillPayActivated"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isBillPayActivated, context);},
					set : function(val){
						setterFunctions['isBillPayActivated'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isBillPaySupported" : {
					get : function(){
						context["field"]  = "isBillPaySupported";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isBillPaySupported"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isBillPaySupported, context);},
					set : function(val){
						setterFunctions['isBillPaySupported'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsCoreIdentityScope" : {
					get : function(){
						context["field"]  = "IsCoreIdentityScope";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IsCoreIdentityScope"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsCoreIdentityScope, context);},
					set : function(val){
						setterFunctions['IsCoreIdentityScope'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isEagreementSigned" : {
					get : function(){
						context["field"]  = "isEagreementSigned";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isEagreementSigned"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isEagreementSigned, context);},
					set : function(val){
						setterFunctions['isEagreementSigned'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsEmailEnabled" : {
					get : function(){
						context["field"]  = "IsEmailEnabled";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IsEmailEnabled"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsEmailEnabled, context);},
					set : function(val){
						setterFunctions['IsEmailEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isEngageProvisioned" : {
					get : function(){
						context["field"]  = "isEngageProvisioned";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isEngageProvisioned"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isEngageProvisioned, context);},
					set : function(val){
						setterFunctions['isEngageProvisioned'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isEnrolled" : {
					get : function(){
						context["field"]  = "isEnrolled";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isEnrolled"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isEnrolled, context);},
					set : function(val){
						setterFunctions['isEnrolled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsEnrolledForOlb" : {
					get : function(){
						context["field"]  = "IsEnrolledForOlb";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IsEnrolledForOlb"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsEnrolledForOlb, context);},
					set : function(val){
						setterFunctions['IsEnrolledForOlb'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsOlbAllowed" : {
					get : function(){
						context["field"]  = "IsOlbAllowed";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IsOlbAllowed"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsOlbAllowed, context);},
					set : function(val){
						setterFunctions['IsOlbAllowed'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isP2PActivated" : {
					get : function(){
						context["field"]  = "isP2PActivated";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isP2PActivated"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isP2PActivated, context);},
					set : function(val){
						setterFunctions['isP2PActivated'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isP2PSupported" : {
					get : function(){
						context["field"]  = "isP2PSupported";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isP2PSupported"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isP2PSupported, context);},
					set : function(val){
						setterFunctions['isP2PSupported'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsPhoneEnabled" : {
					get : function(){
						context["field"]  = "IsPhoneEnabled";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IsPhoneEnabled"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsPhoneEnabled, context);},
					set : function(val){
						setterFunctions['IsPhoneEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsPinSet" : {
					get : function(){
						context["field"]  = "IsPinSet";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IsPinSet"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsPinSet, context);},
					set : function(val){
						setterFunctions['IsPinSet'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsStaffMember" : {
					get : function(){
						context["field"]  = "IsStaffMember";
			        	context["metadata"] = (objectMetadata ? objectMetadata["IsStaffMember"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsStaffMember, context);},
					set : function(val){
						setterFunctions['IsStaffMember'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isSuperAdmin" : {
					get : function(){
						context["field"]  = "isSuperAdmin";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isSuperAdmin"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isSuperAdmin, context);},
					set : function(val){
						setterFunctions['isSuperAdmin'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isUserAccountLocked" : {
					get : function(){
						context["field"]  = "isUserAccountLocked";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isUserAccountLocked"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isUserAccountLocked, context);},
					set : function(val){
						setterFunctions['isUserAccountLocked'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isWireTransferActivated" : {
					get : function(){
						context["field"]  = "isWireTransferActivated";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferActivated"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isWireTransferActivated, context);},
					set : function(val){
						setterFunctions['isWireTransferActivated'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isWireTransferEligible" : {
					get : function(){
						context["field"]  = "isWireTransferEligible";
			        	context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferEligible"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isWireTransferEligible, context);},
					set : function(val){
						setterFunctions['isWireTransferEligible'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Is_BBOA" : {
					get : function(){
						context["field"]  = "Is_BBOA";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Is_BBOA"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Is_BBOA, context);},
					set : function(val){
						setterFunctions['Is_BBOA'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Is_MemberEligibile" : {
					get : function(){
						context["field"]  = "Is_MemberEligibile";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Is_MemberEligibile"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Is_MemberEligibile, context);},
					set : function(val){
						setterFunctions['Is_MemberEligibile'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Lastlogintime" : {
					get : function(){
						context["field"]  = "Lastlogintime";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Lastlogintime"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Lastlogintime, context);},
					set : function(val){
						setterFunctions['Lastlogintime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastmodifiedts" : {
					get : function(){
						context["field"]  = "lastmodifiedts";
			        	context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastmodifiedts, context);},
					set : function(val){
						setterFunctions['lastmodifiedts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"LastName" : {
					get : function(){
						context["field"]  = "LastName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastName, context);},
					set : function(val){
						setterFunctions['LastName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Location_id" : {
					get : function(){
						context["field"]  = "Location_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Location_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Location_id, context);},
					set : function(val){
						setterFunctions['Location_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lockCount" : {
					get : function(){
						context["field"]  = "lockCount";
			        	context["metadata"] = (objectMetadata ? objectMetadata["lockCount"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lockCount, context);},
					set : function(val){
						setterFunctions['lockCount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lockedOn" : {
					get : function(){
						context["field"]  = "lockedOn";
			        	context["metadata"] = (objectMetadata ? objectMetadata["lockedOn"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lockedOn, context);},
					set : function(val){
						setterFunctions['lockedOn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MaritalStatus" : {
					get : function(){
						context["field"]  = "MaritalStatus";
			        	context["metadata"] = (objectMetadata ? objectMetadata["MaritalStatus"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MaritalStatus, context);},
					set : function(val){
						setterFunctions['MaritalStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MaritalStatus_id" : {
					get : function(){
						context["field"]  = "MaritalStatus_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["MaritalStatus_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MaritalStatus_id, context);},
					set : function(val){
						setterFunctions['MaritalStatus_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MemberEligibilityData" : {
					get : function(){
						context["field"]  = "MemberEligibilityData";
			        	context["metadata"] = (objectMetadata ? objectMetadata["MemberEligibilityData"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MemberEligibilityData, context);},
					set : function(val){
						setterFunctions['MemberEligibilityData'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MiddleName" : {
					get : function(){
						context["field"]  = "MiddleName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["MiddleName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MiddleName, context);},
					set : function(val){
						setterFunctions['MiddleName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"modifiedby" : {
					get : function(){
						context["field"]  = "modifiedby";
			        	context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.modifiedby, context);},
					set : function(val){
						setterFunctions['modifiedby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MothersMaidenName" : {
					get : function(){
						context["field"]  = "MothersMaidenName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["MothersMaidenName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MothersMaidenName, context);},
					set : function(val){
						setterFunctions['MothersMaidenName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NoOfDependents" : {
					get : function(){
						context["field"]  = "NoOfDependents";
			        	context["metadata"] = (objectMetadata ? objectMetadata["NoOfDependents"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NoOfDependents, context);},
					set : function(val){
						setterFunctions['NoOfDependents'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"OlbEnrolmentStatus_id" : {
					get : function(){
						context["field"]  = "OlbEnrolmentStatus_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["OlbEnrolmentStatus_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OlbEnrolmentStatus_id, context);},
					set : function(val){
						setterFunctions['OlbEnrolmentStatus_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Organization_Id" : {
					get : function(){
						context["field"]  = "Organization_Id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Organization_Id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Organization_Id, context);},
					set : function(val){
						setterFunctions['Organization_Id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Otp" : {
					get : function(){
						context["field"]  = "Otp";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Otp"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Otp, context);},
					set : function(val){
						setterFunctions['Otp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"OtpGenaratedts" : {
					get : function(){
						context["field"]  = "OtpGenaratedts";
			        	context["metadata"] = (objectMetadata ? objectMetadata["OtpGenaratedts"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OtpGenaratedts, context);},
					set : function(val){
						setterFunctions['OtpGenaratedts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Password" : {
					get : function(){
						context["field"]  = "Password";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Password"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Password, context);},
					set : function(val){
						setterFunctions['Password'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Pin" : {
					get : function(){
						context["field"]  = "Pin";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Pin"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Pin, context);},
					set : function(val){
						setterFunctions['Pin'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"PreferedOtpMethod" : {
					get : function(){
						context["field"]  = "PreferedOtpMethod";
			        	context["metadata"] = (objectMetadata ? objectMetadata["PreferedOtpMethod"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PreferedOtpMethod, context);},
					set : function(val){
						setterFunctions['PreferedOtpMethod'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"PreferredContactMethod" : {
					get : function(){
						context["field"]  = "PreferredContactMethod";
			        	context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactMethod"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PreferredContactMethod, context);},
					set : function(val){
						setterFunctions['PreferredContactMethod'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"PreferredContactTime" : {
					get : function(){
						context["field"]  = "PreferredContactTime";
			        	context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PreferredContactTime, context);},
					set : function(val){
						setterFunctions['PreferredContactTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Product" : {
					get : function(){
						context["field"]  = "Product";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Product"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Product, context);},
					set : function(val){
						setterFunctions['Product'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Reason" : {
					get : function(){
						context["field"]  = "Reason";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Reason"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Reason, context);},
					set : function(val){
						setterFunctions['Reason'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RegistrationLink" : {
					get : function(){
						context["field"]  = "RegistrationLink";
			        	context["metadata"] = (objectMetadata ? objectMetadata["RegistrationLink"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RegistrationLink, context);},
					set : function(val){
						setterFunctions['RegistrationLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RegLinkResendCount" : {
					get : function(){
						context["field"]  = "RegLinkResendCount";
			        	context["metadata"] = (objectMetadata ? objectMetadata["RegLinkResendCount"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RegLinkResendCount, context);},
					set : function(val){
						setterFunctions['RegLinkResendCount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RegLinkValidity" : {
					get : function(){
						context["field"]  = "RegLinkValidity";
			        	context["metadata"] = (objectMetadata ? objectMetadata["RegLinkValidity"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RegLinkValidity, context);},
					set : function(val){
						setterFunctions['RegLinkValidity'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Salutation" : {
					get : function(){
						context["field"]  = "Salutation";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Salutation"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Salutation, context);},
					set : function(val){
						setterFunctions['Salutation'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SecurityImage_id" : {
					get : function(){
						context["field"]  = "SecurityImage_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["SecurityImage_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SecurityImage_id, context);},
					set : function(val){
						setterFunctions['SecurityImage_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Session_id" : {
					get : function(){
						context["field"]  = "Session_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Session_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Session_id, context);},
					set : function(val){
						setterFunctions['Session_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){
						context["field"]  = "softdeleteflag";
			        	context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.softdeleteflag, context);},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SpouseFirstName" : {
					get : function(){
						context["field"]  = "SpouseFirstName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["SpouseFirstName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SpouseFirstName, context);},
					set : function(val){
						setterFunctions['SpouseFirstName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SpouseLastName" : {
					get : function(){
						context["field"]  = "SpouseLastName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["SpouseLastName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SpouseLastName, context);},
					set : function(val){
						setterFunctions['SpouseLastName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SpouseName" : {
					get : function(){
						context["field"]  = "SpouseName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["SpouseName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SpouseName, context);},
					set : function(val){
						setterFunctions['SpouseName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Ssn" : {
					get : function(){
						context["field"]  = "Ssn";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Ssn"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Ssn, context);},
					set : function(val){
						setterFunctions['Ssn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Status_id" : {
					get : function(){
						context["field"]  = "Status_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Status_id, context);},
					set : function(val){
						setterFunctions['Status_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"synctimestamp" : {
					get : function(){
						context["field"]  = "synctimestamp";
			        	context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.synctimestamp, context);},
					set : function(val){
						setterFunctions['synctimestamp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Token" : {
					get : function(){
						context["field"]  = "Token";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Token"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Token, context);},
					set : function(val){
						setterFunctions['Token'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"unsuccessfulLoginAttempts" : {
					get : function(){
						context["field"]  = "unsuccessfulLoginAttempts";
			        	context["metadata"] = (objectMetadata ? objectMetadata["unsuccessfulLoginAttempts"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.unsuccessfulLoginAttempts, context);},
					set : function(val){
						setterFunctions['unsuccessfulLoginAttempts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserCompany" : {
					get : function(){
						context["field"]  = "UserCompany";
			        	context["metadata"] = (objectMetadata ? objectMetadata["UserCompany"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserCompany, context);},
					set : function(val){
						setterFunctions['UserCompany'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserImage" : {
					get : function(){
						context["field"]  = "UserImage";
			        	context["metadata"] = (objectMetadata ? objectMetadata["UserImage"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserImage, context);},
					set : function(val){
						setterFunctions['UserImage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserImageURL" : {
					get : function(){
						context["field"]  = "UserImageURL";
			        	context["metadata"] = (objectMetadata ? objectMetadata["UserImageURL"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserImageURL, context);},
					set : function(val){
						setterFunctions['UserImageURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserName" : {
					get : function(){
						context["field"]  = "UserName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserName, context);},
					set : function(val){
						setterFunctions['UserName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ValidDate" : {
					get : function(){
						context["field"]  = "ValidDate";
			        	context["metadata"] = (objectMetadata ? objectMetadata["ValidDate"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ValidDate, context);},
					set : function(val){
						setterFunctions['ValidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});
			
			//converts model object to json object.
			this.toJsonInternal = function() {
				return Object.assign({}, privateState);
			};

			//overwrites object state with provided json value in argument.
			this.fromJsonInternal = function(value) {
									privateState.AddressValidationStatus = value?(value["AddressValidationStatus"]?value["AddressValidationStatus"]:null):null;
					privateState.ApplicantChannel = value?(value["ApplicantChannel"]?value["ApplicantChannel"]:null):null;
					privateState.areAccountStatementTermsAccepted = value?(value["areAccountStatementTermsAccepted"]?value["areAccountStatementTermsAccepted"]:null):null;
					privateState.areDepositTermsAccepted = value?(value["areDepositTermsAccepted"]?value["areDepositTermsAccepted"]:null):null;
					privateState.areUserAlertsTurnedOn = value?(value["areUserAlertsTurnedOn"]?value["areUserAlertsTurnedOn"]:null):null;
					privateState.AtionProfile_id = value?(value["AtionProfile_id"]?value["AtionProfile_id"]:null):null;
					privateState.Bank_id = value?(value["Bank_id"]?value["Bank_id"]:null):null;
					privateState.Classification_id = value?(value["Classification_id"]?value["Classification_id"]:null):null;
					privateState.CountryCode = value?(value["CountryCode"]?value["CountryCode"]:null):null;
					privateState.createdby = value?(value["createdby"]?value["createdby"]:null):null;
					privateState.createdts = value?(value["createdts"]?value["createdts"]:null):null;
					privateState.CreditUnionMemberSince = value?(value["CreditUnionMemberSince"]?value["CreditUnionMemberSince"]:null):null;
					privateState.CurrentLoginTime = value?(value["CurrentLoginTime"]?value["CurrentLoginTime"]:null):null;
					privateState.CustomerType_id = value?(value["CustomerType_id"]?value["CustomerType_id"]:null):null;
					privateState.Cvv = value?(value["Cvv"]?value["Cvv"]:null):null;
					privateState.DateOfBirth = value?(value["DateOfBirth"]?value["DateOfBirth"]:null):null;
					privateState.DocumentsSubmitted = value?(value["DocumentsSubmitted"]?value["DocumentsSubmitted"]:null):null;
					privateState.DrivingLicenseNumber = value?(value["DrivingLicenseNumber"]?value["DrivingLicenseNumber"]:null):null;
					privateState.EligbilityCriteria = value?(value["EligbilityCriteria"]?value["EligbilityCriteria"]:null):null;
					privateState.EmployementStatus_id = value?(value["EmployementStatus_id"]?value["EmployementStatus_id"]:null):null;
					privateState.EmploymentInfo = value?(value["EmploymentInfo"]?value["EmploymentInfo"]:null):null;
					privateState.FirstName = value?(value["FirstName"]?value["FirstName"]:null):null;
					privateState.FullName = value?(value["FullName"]?value["FullName"]:null):null;
					privateState.Gender = value?(value["Gender"]?value["Gender"]:null):null;
					privateState.id = value?(value["id"]?value["id"]:null):null;
					privateState.IDCountry = value?(value["IDCountry"]?value["IDCountry"]:null):null;
					privateState.IDExpiryDate = value?(value["IDExpiryDate"]?value["IDExpiryDate"]:null):null;
					privateState.IDIssueDate = value?(value["IDIssueDate"]?value["IDIssueDate"]:null):null;
					privateState.IDState = value?(value["IDState"]?value["IDState"]:null):null;
					privateState.IDType_id = value?(value["IDType_id"]?value["IDType_id"]:null):null;
					privateState.IDValue = value?(value["IDValue"]?value["IDValue"]:null):null;
					privateState.IsAssistConsented = value?(value["IsAssistConsented"]?value["IsAssistConsented"]:null):null;
					privateState.isBillPayActivated = value?(value["isBillPayActivated"]?value["isBillPayActivated"]:null):null;
					privateState.isBillPaySupported = value?(value["isBillPaySupported"]?value["isBillPaySupported"]:null):null;
					privateState.IsCoreIdentityScope = value?(value["IsCoreIdentityScope"]?value["IsCoreIdentityScope"]:null):null;
					privateState.isEagreementSigned = value?(value["isEagreementSigned"]?value["isEagreementSigned"]:null):null;
					privateState.IsEmailEnabled = value?(value["IsEmailEnabled"]?value["IsEmailEnabled"]:null):null;
					privateState.isEngageProvisioned = value?(value["isEngageProvisioned"]?value["isEngageProvisioned"]:null):null;
					privateState.isEnrolled = value?(value["isEnrolled"]?value["isEnrolled"]:null):null;
					privateState.IsEnrolledForOlb = value?(value["IsEnrolledForOlb"]?value["IsEnrolledForOlb"]:null):null;
					privateState.IsOlbAllowed = value?(value["IsOlbAllowed"]?value["IsOlbAllowed"]:null):null;
					privateState.isP2PActivated = value?(value["isP2PActivated"]?value["isP2PActivated"]:null):null;
					privateState.isP2PSupported = value?(value["isP2PSupported"]?value["isP2PSupported"]:null):null;
					privateState.IsPhoneEnabled = value?(value["IsPhoneEnabled"]?value["IsPhoneEnabled"]:null):null;
					privateState.IsPinSet = value?(value["IsPinSet"]?value["IsPinSet"]:null):null;
					privateState.IsStaffMember = value?(value["IsStaffMember"]?value["IsStaffMember"]:null):null;
					privateState.isSuperAdmin = value?(value["isSuperAdmin"]?value["isSuperAdmin"]:null):null;
					privateState.isUserAccountLocked = value?(value["isUserAccountLocked"]?value["isUserAccountLocked"]:null):null;
					privateState.isWireTransferActivated = value?(value["isWireTransferActivated"]?value["isWireTransferActivated"]:null):null;
					privateState.isWireTransferEligible = value?(value["isWireTransferEligible"]?value["isWireTransferEligible"]:null):null;
					privateState.Is_BBOA = value?(value["Is_BBOA"]?value["Is_BBOA"]:null):null;
					privateState.Is_MemberEligibile = value?(value["Is_MemberEligibile"]?value["Is_MemberEligibile"]:null):null;
					privateState.Lastlogintime = value?(value["Lastlogintime"]?value["Lastlogintime"]:null):null;
					privateState.lastmodifiedts = value?(value["lastmodifiedts"]?value["lastmodifiedts"]:null):null;
					privateState.LastName = value?(value["LastName"]?value["LastName"]:null):null;
					privateState.Location_id = value?(value["Location_id"]?value["Location_id"]:null):null;
					privateState.lockCount = value?(value["lockCount"]?value["lockCount"]:null):null;
					privateState.lockedOn = value?(value["lockedOn"]?value["lockedOn"]:null):null;
					privateState.MaritalStatus = value?(value["MaritalStatus"]?value["MaritalStatus"]:null):null;
					privateState.MaritalStatus_id = value?(value["MaritalStatus_id"]?value["MaritalStatus_id"]:null):null;
					privateState.MemberEligibilityData = value?(value["MemberEligibilityData"]?value["MemberEligibilityData"]:null):null;
					privateState.MiddleName = value?(value["MiddleName"]?value["MiddleName"]:null):null;
					privateState.modifiedby = value?(value["modifiedby"]?value["modifiedby"]:null):null;
					privateState.MothersMaidenName = value?(value["MothersMaidenName"]?value["MothersMaidenName"]:null):null;
					privateState.NoOfDependents = value?(value["NoOfDependents"]?value["NoOfDependents"]:null):null;
					privateState.OlbEnrolmentStatus_id = value?(value["OlbEnrolmentStatus_id"]?value["OlbEnrolmentStatus_id"]:null):null;
					privateState.Organization_Id = value?(value["Organization_Id"]?value["Organization_Id"]:null):null;
					privateState.Otp = value?(value["Otp"]?value["Otp"]:null):null;
					privateState.OtpGenaratedts = value?(value["OtpGenaratedts"]?value["OtpGenaratedts"]:null):null;
					privateState.Password = value?(value["Password"]?value["Password"]:null):null;
					privateState.Pin = value?(value["Pin"]?value["Pin"]:null):null;
					privateState.PreferedOtpMethod = value?(value["PreferedOtpMethod"]?value["PreferedOtpMethod"]:null):null;
					privateState.PreferredContactMethod = value?(value["PreferredContactMethod"]?value["PreferredContactMethod"]:null):null;
					privateState.PreferredContactTime = value?(value["PreferredContactTime"]?value["PreferredContactTime"]:null):null;
					privateState.Product = value?(value["Product"]?value["Product"]:null):null;
					privateState.Reason = value?(value["Reason"]?value["Reason"]:null):null;
					privateState.RegistrationLink = value?(value["RegistrationLink"]?value["RegistrationLink"]:null):null;
					privateState.RegLinkResendCount = value?(value["RegLinkResendCount"]?value["RegLinkResendCount"]:null):null;
					privateState.RegLinkValidity = value?(value["RegLinkValidity"]?value["RegLinkValidity"]:null):null;
					privateState.Salutation = value?(value["Salutation"]?value["Salutation"]:null):null;
					privateState.SecurityImage_id = value?(value["SecurityImage_id"]?value["SecurityImage_id"]:null):null;
					privateState.Session_id = value?(value["Session_id"]?value["Session_id"]:null):null;
					privateState.softdeleteflag = value?(value["softdeleteflag"]?value["softdeleteflag"]:null):null;
					privateState.SpouseFirstName = value?(value["SpouseFirstName"]?value["SpouseFirstName"]:null):null;
					privateState.SpouseLastName = value?(value["SpouseLastName"]?value["SpouseLastName"]:null):null;
					privateState.SpouseName = value?(value["SpouseName"]?value["SpouseName"]:null):null;
					privateState.Ssn = value?(value["Ssn"]?value["Ssn"]:null):null;
					privateState.Status_id = value?(value["Status_id"]?value["Status_id"]:null):null;
					privateState.synctimestamp = value?(value["synctimestamp"]?value["synctimestamp"]:null):null;
					privateState.Token = value?(value["Token"]?value["Token"]:null):null;
					privateState.unsuccessfulLoginAttempts = value?(value["unsuccessfulLoginAttempts"]?value["unsuccessfulLoginAttempts"]:null):null;
					privateState.UserCompany = value?(value["UserCompany"]?value["UserCompany"]:null):null;
					privateState.UserImage = value?(value["UserImage"]?value["UserImage"]:null):null;
					privateState.UserImageURL = value?(value["UserImageURL"]?value["UserImageURL"]:null):null;
					privateState.UserName = value?(value["UserName"]?value["UserName"]:null):null;
					privateState.ValidDate = value?(value["ValidDate"]?value["ValidDate"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Customer);
	
	//Create new class level validator object
	BaseModel.Validator.call(Customer);
	
	var registerValidatorBackup = Customer.registerValidator;
	
	Customer.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Customer.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	
	var relations = [
	];
	
	Customer.relations = relations;
	
	Customer.prototype.isValid = function(){
		return Customer.isValid(this);
	};
	
	Customer.prototype.objModelName = "Customer";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	Customer.registerProcessors = function(options, successCallback, failureCallback) {
	
		if(!options) {
			options = {};
		}
			
		if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
			preProcessorCallback = options["preProcessor"];
		}
		
		if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])){
			postProcessorCallback = options["postProcessor"];
		}
		
		function metaDataSuccess(res) {
			objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
			successCallback();
		}
		
		function metaDataFailure(err) {
			failureCallback(err);
		}
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("CustomerObjService", "Customer", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	Customer.clone = function(objectToClone) {
		var clonedObj = new Customer();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return Customer;
});