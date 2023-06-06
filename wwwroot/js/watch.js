let watchVue = Vue.createApp({
	data() {
		return {
			a1: 'a1',
			a2: 'a2',
			a3: ''
		}
	},
	methods: {
		
	},
	watch: {
		// 변수 a1을 감시하는 watch 설정
		a1: function(newValue, oldValue) {
			console.log(`a1의 새로운 값: ${newValue}, 이전 값: ${oldValue}`);
			this.a2 = `a1 : ${newValue}`;
		},
		a2: function(newValue, oldValue) {
			console.log(`a2의 새로운 값: ${newValue}, 이전 값: ${oldValue}`);
			
			this.a3 = `a2 : ${newValue}`;
		},
		a3: function (newValue, oldValue) {
			console.log(`a3의 새로운 값: ${newValue}, 이전 값: ${oldValue}`);
		}
	}
}).mount('#watchTest');