let firstVue = Vue.createApp({
	data() {
		return {
			message: 'Hello Vue!',
			string1: '문자열',
			int1: 123,
			float1: 1.11
		}
	}
});

firstVue.mount('#app');

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

var app = Vue.createApp({
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
				a2: 'a2 문자 열'
			}
		}
	},
	components: {
		test1: {
			template: '<h2>Hello world~!@</h2>'
		}
	},
	beforeCreate: () => {
		console.log('생성되기 전');
	},
	created: () => {
		console.log('생성됨');
	},
	beforeMount: () => {
		console.log('Vue 객체가 관리할 태그가 할당되기 전입니다.');
	},
	mounted: () => {
		console.log('Vue 객체가 관리할 태그가 할당되었습니다.');
	},
	beforeUpdate: () => {
		console.log('관리하고 있는 html 요소 내부가 변경되기 전입니다.');
	},
	updated: () => {
		console.log('관리하고 있는 html 요소 내부가 변경되었습니다.');
	},
	beforeUnmount: () => {
		console.log('Unmount 전입니다.');
	},
	unmounted: () => {
		console.log('Unmount 후입니다.');
	}
});


app.component('component1',
	{
		template: `<div>
						<h3>첫번째 컴포넌트 태그</h3>
						<h3>두번째 컴포넌트 태그</h3>
					</div>`
	}
);
let test = app.mount('#app3');