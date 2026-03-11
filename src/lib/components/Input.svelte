<script>
	let {
		id = '',
		type = 'text',
		label = '',
		value,
		customCSS = '',
		placeholder = '',
		name = '',
		error = '',
		disabled = false
	} = $props();
	// Pour debug :
	console.log('Input disabled prop =', disabled);
</script>

<div>
	<label for={id}>{label}</label>
	<input
		{id}
		{type}
		{name}
		bind:value
		required
		{placeholder}
		{disabled}
		class={error ? `error ${customCSS}` : customCSS}
	/>
	{#if error}
		<p class="error-message">⚠️ {error}</p>
	{/if}
</div>

<style>
	label {
		font-weight: bold;
		margin-bottom: 0.3rem;
		display: block;
		padding-left: 2rem;
		/* or text-align: center; */
	}
	input {
		width: 100%;
		padding: 10px 20px;
		border: none;
		border-radius: 25px;
		background: rgba(255, 255, 255, 0.2);
		color: white;
		font-size: 14px;
	}
	input::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
  input.error {
    border: 2px solid #ef4444; /* rouge clair */
    background: rgba(255, 0, 0, 0.1);
  }

  .error-message {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    padding-left: 2rem;
  }
</style>
