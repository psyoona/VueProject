let attributeBindTest = Vue.createApp({
	data() {
		return {
			string1: '문자열',
			link: 'http://yoonslab.com/Laboratory/Tetris',
			imgsrc: '../images/logo.png',
			imgWidth: '200'
		}
	},
	methods: {
		setImageWidth: function () {
			this.imgWidth = '400';
			console.log('setImageWidth');
		},
		resetImageWidth: function () {
			this.imgWidth = '200';
			console.log('resetImageWidth');
		}
	}
}).mount('#attributeBindTest');