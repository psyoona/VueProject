Vue.createApp({
	data() {
		return {
			message: 'Hello Vue!',
			string1: '문자열',
			int1: 123,
			float1: 1.11
		}
	}
}).mount('#app');

Vue.createApp({
	data() {
		return {
			message: 'Hello Vue!',
			string1: '문자열',
			int1: 123,
			float1: 1.11
		}
	}
}).mount('#app2');

var test = Vue.createApp({
	data() {
		return {
			message: 'Hello Vue!',
			string1: '문자열',
			int1: 123,
			float1: 1.11,
			boolean1: true,
			array1: [50, 60, 70],
			object1: {
				a1: 'a1 문자열',
				a2: 'a2 문자열'
			}
		}
	},
	methods: {
		userInfo: () => {
			console.log('hihihi');
		}
	}
}).mount('#app3');