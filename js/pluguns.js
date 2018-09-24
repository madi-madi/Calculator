
const app = new Vue({
	el:'#app',
	data:{
		numbers:[
		{num:1,keycode:97},
		{num:2,keycode:98},
		{num:3,keycode:99},
		{num:4,keycode:100},
		{num:5,keycode:101},
		{num:6,keycode:102},
		{num:7,keycode:103},
		{num:8,keycode:104},
		{num:9,keycode:105},
		{num:0,keycode:96},
		{num:'.',keycode:110},

		],
		operation:[
		{op:'+',keycode:107},
		{op:'-',keycode:109},
		{op:'*',keycode:106},
		{op:'/',keycode:111},
		{op:'(',keycode:57},
		{op:')',keycode:48},
		],
		mainOperation:[
		{op:'off',keycode:8},
		{op:'%',keycode:53},
		{op:'X',keycode:8},

		],
		operaters:0,
		typeOps:null,
	},
	methods:{
		getCurrentNum(numb){
			if (this.operaters === 0) {
				this.operaters = '';
			this.operaters +=numb ;
			}else if(this.operaters.length !==  20){
			this.operaters +=numb ;

			let resetData = "";

			}
		},
		getOperation(opsType){
			if (this.operaters !== 0) {

			this.operaters +=opsType ;
			}
		},

		getBVal(){
			this.operaters = eval(this.operaters);
		},

		deleteAll(){
			app.operaters=0;
		},
		deleteLastNum(){
			console.info('Delete'+ this.operaters);
			if (this.operaters != null && this.operaters != 0) {

			let newOperaters = app.operaters.slice(0, -1);

			if (newOperaters !== '') {

			app.operaters = newOperaters;

			}else{
			app.operaters = 0;
			}



			}


		},

	},
	  mounted() {

    window.addEventListener('keyup', function(event) {

 
    	let eventkey = event.keyCode;
    	switch(eventkey){
    		case 13 :
	        app.getBVal();
    		break;
    		case 8 : 
    		app.deleteLastNum();
    		break;
    		case 46:
    		app.deleteAll();
    		break;
    		case 53 :
    		app.getOperation('%')
    		break;
    	}

    if (app.$data.numbers.find( fruit => fruit.keycode === eventkey)) {    	
      app.getCurrentNum(event.key);
    }else if (app.$data.operation.find( fruit => fruit.keycode === eventkey)) {

      app.getOperation(event.key);
    }
    	
    });
  },

});