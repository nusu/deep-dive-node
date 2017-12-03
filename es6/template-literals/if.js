const song = {
	name: 'Dying to Live',
	artist: 'Tupac',
	featuring: 'Biggie'
};

const markup = `${song.name} - ${song.artist} ${song.featuring ? `Featuring ${song.featuring}`: ''}`;

console.log(markup);