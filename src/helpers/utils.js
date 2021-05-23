export const scrollTo = (element) => {
	isClient &&
		window.scroll({
			behavior: 'smooth',
			left: 0,
			top: element.offsetTop,
		});
};

export const isClient =
	typeof window !== 'undefined' && window.document ? true : false;
