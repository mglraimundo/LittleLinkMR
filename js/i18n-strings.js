/**
 * Internationalization (i18n) Strings
 * Centralized translation strings for JavaScript components
 */

window.I18N_STRINGS = {
	pt: {
		// Form validation
		nameRequired: 'O nome é obrigatório',
		emailRequired: 'O email é obrigatório',
		emailInvalid: 'Por favor introduza um endereço de email válido',
		messageRequired: 'A mensagem é obrigatória',
		// Form submission
		successMessage: 'Mensagem enviada com sucesso! Obrigado por entrar em contacto.',
		errorMessage: 'Falha ao enviar mensagem. Por favor tente novamente.',
		networkError: 'Erro de rede. Por favor verifique a sua ligação e tente novamente.'
	},
	en: {
		// Form validation
		nameRequired: 'Name is required',
		emailRequired: 'Email is required',
		emailInvalid: 'Please enter a valid email address',
		messageRequired: 'Message is required',
		// Form submission
		successMessage: 'Message sent successfully! Thank you for getting in touch.',
		errorMessage: 'Failed to send message. Please try again.',
		networkError: 'Network error. Please check your connection and try again.'
	}
};

/**
 * Get translated string by key
 * @param {string} key - The translation key
 * @returns {string} - The translated string or the key if not found
 */
window.t = function(key) {
	const lang = document.documentElement.lang || 'pt';
	return window.I18N_STRINGS[lang]?.[key] || window.I18N_STRINGS['pt']?.[key] || key;
};
