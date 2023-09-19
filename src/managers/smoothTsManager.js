const checkLocalStorage = () => {
	if (localStorage.getItem('smoothTs') === null) return true;
	return Boolean(Number(localStorage.getItem('smoothTs')));
}

export const smoothTsManager = localConfig => {
	return {
		checkLocalStorage: () => checkLocalStorage(),

		setStore: (propsValue = null) => {
			let value = propsValue ? propsValue : checkLocalStorage()
			localConfig.setSmoothTs(value)
			localStorage.setItem('smoothTs', value)
		},

		getStyle: () => {
			const value = checkLocalStorage()
			if (value) {
				return `
					.block {
						animation: enterBlock 1.2s cubic-bezier(0, 1, 0, 1), enterOpacity 0.2s ease-in-out;
					}
					.course-block {
					    animation: enterBlock 1s cubic-bezier(0, 1, 0, 1);
					}
				    `
			} else {
				return `
					.block {
						animation: none;
					}
					.course-block {
					    animation: none;
					}
				    `
			}
		},
	}
}
