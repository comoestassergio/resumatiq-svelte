<script lang="ts">
	import Header from '../components/Header.svelte';
	import Modal from '../components/Modal.svelte';

	import './styles.css';
</script>

<div class="app">
	<Header />
	<Modal />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		
		height: 100vh;
	}
</style>
