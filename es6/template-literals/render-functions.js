const beer = {
	name: 'Bomonti',
	feature: 'Filtresiz',
	keywords: ['hafif', 'öldürmeyen', 'sakin', 'bira']
};

function renderKeywords(keywords){
	return `${keywords.map(keyword => keyword)}`;
}

const markup = `
name: ${beer.name}
---
feature: ${beer.feature}
---
keywords: ${renderKeywords(beer.keywords)}
`;

console.log(markup);