import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'Realtime Todo 🔥',
		subtitle : '⚡ todo list app with firebase store & auth ⚡'
	}
});

export default app;