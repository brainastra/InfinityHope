define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "accountFetchInfinityHope", "objectService" : "InfinityHopeObjServices"};
	
	var setterFunctions = {
		input : function(val, state){
			context["field"]  = "input";
			context["metadata"] = (objectMetadata ? objectMetadata["input"] : null);
			state['input'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function accountFetchInfinityHope(defaultValues){
		var privateState = {};
			context["field"]  = "input";
			context["metadata"] = (objectMetadata ? objectMetadata["input"] : null);
			privateState.input = defaultValues?(defaultValues["input"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["input"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"input" : {
					get : function(){
						context["field"]  = "input";
			        	context["metadata"] = (objectMetadata ? objectMetadata["input"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.input, context);},
					set : function(val){
						setterFunctions['input'].call(this,val,privateState);
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
									privateState.input = value?(value["input"]?value["input"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(accountFetchInfinityHope);
	
	//Create new class level validator object
	BaseModel.Validator.call(accountFetchInfinityHope);
	
	var registerValidatorBackup = accountFetchInfinityHope.registerValidator;
	
	accountFetchInfinityHope.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( accountFetchInfinityHope.isValid(this, propName, val) ){
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
	
	accountFetchInfinityHope.relations = relations;
	
	accountFetchInfinityHope.prototype.isValid = function(){
		return accountFetchInfinityHope.isValid(this);
	};
	
	accountFetchInfinityHope.prototype.objModelName = "accountFetchInfinityHope";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	accountFetchInfinityHope.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("InfinityHopeObjServices", "accountFetchInfinityHope", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	accountFetchInfinityHope.clone = function(objectToClone) {
		var clonedObj = new accountFetchInfinityHope();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return accountFetchInfinityHope;
});