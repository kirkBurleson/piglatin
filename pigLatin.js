function getPigLatin (word) {
	var i;

	if (!word)
		return undefined;

	if (typeof word !== 'string')
		return undefined;

	word = word.toLowerCase();

	// find first instance of a vowel
	for (i = 0; i < word.length; i++) {

		if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'y') {

			// word begins with vowel add 'yay' to end
			if (i === 0) {

				// except if it begins with 'y'
				if (word[i] === 'y')
					continue;

				else
					return word + 'yay';
			}

			else { // found start of word
				return word.substring(i) + word.substring(0, i) + 'ay';
			}
		}
	}

	return undefined;
}

console.log(getPigLatin("coffee"));

