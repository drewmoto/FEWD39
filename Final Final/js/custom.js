console.log('Sanity Check: script.js is working!');

// ====================== BEG OF FILM DATA =======================

var films = [
{
    "Title": "Aliens vs. Avatars",
    "Year": "2011",
    "Genre": "Horror, Sci-Fi",
    "Director": "Lewis Schoenbrun",
    "Actors": ["Jason Lockhart, Kim Argetsinger, Cassie Fliegel, Dylan Vox"],
    "Plot": "Six college friends find themselves caught up in a cat and mouse hunt with a race of creatures who possess the ability to transform into anything from which it has consumed DNA.",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BODczMzgzMzQ0OV5BMl5BanBnXkFtZTcwNjkwOTExNw@@._V1_SX300.jpg",
    "imdbRating": "1.5",
    "imdbID": "tt1854506",
},
{
    "Title": "Attack of the Jurassic Shark",
    "Year": "2012",
    "Genre": "Action, Horror, Sci-Fi",
    "Director": "Brett Kelly",
    "Actors": ["Emanuelle Carriere, Christine Emes, Celine Filion, Angela Parent"],
    "Country": "USA",
    "Plot": "When an oil company unwittingly unleashes a prehistoric shark from its icy prison, the Jurassic killer maroons a group of thieves and beautiful young female college students on an abandoned...",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTgwODUzODMzOV5BMl5BanBnXkFtZTcwNjM0NzAzOA@@._V1_SX300.jpg",
    "imdbRating": "1.5",
    "imdbID": "tt2071491",
    },
    {
    "Title": "Birdemic 2: The Resurrection",
    "Year": "2013",
    "Genre": "Action, Comedy, Horror",
    "Director": "James Nguyen",
    "Actors": ["Alan Bagh, Whitney Moore, Thomas Favaloro, Chelsea Turnbo"],
    "Plot": "A platoon of eagles and vultures attack Hollywood, California. Why did the eagles and vultures attack? Who will survive?",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ2NTA0MzIxMV5BMl5BanBnXkFtZTcwNzQxNjUyOQ@@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "1.8",
    "imdbID": "tt1674047",
},
{
    "Title": "Die Hard Dracula",
    "Year": "1998",
    "Genre": "Comedy, Horror",
    "Director": "Peter Horak",
    "Actors": ["Bruce Glover, Denny Sachen, Kerry Dustin, Ernest M. Garcia"],
    "Plot": "A modern-day updating of the Dracula legend that finds Steven, a good-looking American hero devastated by the death of his girlfriend, wandering through Europe and looking for happiness. A ...",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTkwNTQwNDQ4MF5BMl5BanBnXkFtZTcwMDY2NjUyMQ@@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "2.0",
    "imdbID": "tt0162930",
},
{
    "Title": "The Aztec Mummy Against the Humanoid Robot",
    "Year": "1958",
    "Genre": "Adventure, Horror, Sci-Fi",
    "Director": ["Rafael Portillo"],
    "Actors": "Ramón Gay, Rosita Arenas, Crox Alvarado, Luis Aceves Castañeda",
    "Plot": "A mad doctor builds a robot in order to steal a valuable Aztec treasure from a tomb guarded by a centuries old living mummy.",
    "Country": "Mexico",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg2MDcwNDM2OF5BMl5BanBnXkFtZTcwODc0NzEyMQ@@._V1_SX300.jpg",
    "imdbRating": "2.2",
    "imdbID": "tt0050717",
},
{
    "Title": "The Incredibly Strange Creatures Who Stopped Living and Became Mixed-Up Zombies!!?",
    "Year": "1964",
    "Genre": "Horror",
    "Director": "Ray Dennis Steckler",
    "Actors": ["Ray Dennis Steckler, Carolyn Brandt, Brett O'Hara, Atlas King"],
    "Plot": "Jerry falls in love with a stripper he meets at a carnival. Little does he know that she is the sister of a gypsy fortune teller whose predictions he had scoffed at earlier. The gypsy turns him into a zombie and he goes on a killing spree.",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTI2MjM4NDg3MV5BMl5BanBnXkFtZTcwMjM2NzAzMQ@@._V1_SX300.jpg",
    "imdbRating": "2.2",
    "imdbID": "tt0057181",
},
{
    "Title": "A Nymphoid Barbarian in Dinosaur Hell",
    "Year": "1990",
    "Runtime": "82 min",
    "Genre": "Fantasy, Horror, Sci-Fi",
    "Director": "Brett Piper",
    "Actors": ["Paul Guzzi, Linda Corwin, Alex Pirnie, Mark Deshaies"],
    "Plot": "In a post-Armageddon world, a young woman finds herself in a fight for survival against mutant cavemen, dinosaurs and other prehistoric animals.",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTc2ODkzODM1MV5BMl5BanBnXkFtZTcwODMyOTQyMQ@@._V1_SX300.jpg",
    "imdbRating": "2.3",
    "imdbID": "tt0102569",
},
{
    "Title": "The Giant Spider Invasion",
    "Year": "1975",
    "Genre": "Horror, Sci-Fi",
    "Director": "Bill Rebane",
    "Actors": ["Steve Brodie, Barbara Hale, Robert Easton, Leslie Parrish"],
    "Plot": "Giant spiders from another dimension invade Wisconsin.",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY2OTg1ODg5Ml5BMl5BanBnXkFtZTYwNjI4ODY4._V1_SX300.jpg",
    "imdbRating": "2.8",
    "imdbID": "tt0073043",
},
{
    "Title": "Jesse James Meets Frankenstein's Daughter",
    "Year": "1966",
    "Genre": "Horror, Sci-Fi, Western",
    "Director": "William Beaudine",
    "Actors": ["John Lupton, Narda Onyx, Cal Bolder, Estelita Rodriguez"],
    "Plot": "Legendary outlaw of the Old West Jesse James, on the run from Marshal MacPhee, hides out in the castle of Baron Frankenstein's granddaughter Maria, who proceeds to transform Jesse's ...",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ1OTAxNzc1MV5BMl5BanBnXkFtZTcwMDgzODUxMQ@@._V1_SX300.jpg",
    "imdbRating": "2.9",
    "imdbID": "tt0060558",
},
{
    "Title": "The Incredible 2-Headed Transplant",
    "Year": "1971",
    "Genre": "Horror, Sci-Fi",
    "Director": "Anthony M. Lanza",
    "Actors": ["Bruce Dern, Pat Priest, Casey Kasem, Albert Cole"],
    "Plot": "Dr. Roger Girard is a rich scientist conducting experiments on head transplantation. His caretaker has a son, Danny, who, although fully grown, has the mind of child. One day an escaped ...",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTgzOTAyOTY2MV5BMl5BanBnXkFtZTcwNDY0ODYzMQ@@._V1_SX300.jpg",
    "imdbRating": "3.2",
    "imdbID": "tt0067245",
},
{
    "Title": "Killer Tomatoes Strike Back!",
    "Year": "1991",
    "Genre": "Action, Comedy, Horror",
    "Director": "John De Bello",
    "Actors": ["Debi Fares, Rick Rockwell, John Witherspoon, John Astin"],
    "Plot": "Police assistant Boyle has to investigate cases nobody else wants to deal with. His latest case is about rumored cases of evil tomatoes attacking people. Together with "tomatologist" Kennedi Johnson he tries to find the truth.",
    "Language": "English",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg0NzM1NTA1M15BMl5BanBnXkFtZTcwOTIyMzAzMQ@@._V1_SX300.jpg",
    "imdbRating": "3.2",
    "imdbID": "tt0099935",
},
{
    "Title": "Killer Kart",
    "Year": "2012",
    "Genre": "Short, Comedy, Horror",
    "Director": "James Feeney",
    "Actors": ["Christine Alicia Rodriguez, Ray Bouchard, Elly Schaefer, Britt Michael Gordon"],
    "Plot": "The shopping cart. Four wheels, one basket, and tonight, for the closing crew of a small-town grocery store, a blood-splattered aluminum nightmare.",
    "Country": "USA",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTcwOTI4MjYwNF5BMl5BanBnXkFtZTcwMjE1ODU1OA@@._V1_SX300.jpg",
    "imdbRating": "2.3",
    "imdbID": "tt2415470",
}
]

// ====================== END OF FILM DATA =======================


// ------------------------------------------------
		// var map;
    //
		// function initMap() {
		// 	//get coordinates
		// 	var coordinates = new google.maps.LatLng(37.7897072,-122.4049072);
		// 	//get map option
		// 	var mapOptions = {
		// 		center: coordinates,
		// 		zoom: 14
		// 	};
		// 	map = new google.maps.Map (document.getElementById("map-canvas"), mapOptions);
    //
		// 	films.forEach(createMarker);
		// }

	// Events
	// ------------------------------------------------

		var filmList = document.querySelector(".film-list")

	// Functions
	// ------------------------------------------------
	// function createMarker(film) {
	// 	// console.log(film)
	// 	var filmLocation = new google.maps.LatLng(film.location.lat,film.location.lng)
	// 	console.log(filmLocation)
  //
	// 	var marker = new google.maps.Marker({
	// 		position: filmLocation,
	// 		map: map
	// 	});
	// 		createLine(film)
	// }

	function createLine(data) {
		console.log(data)

		var li = document.createElement("li")
		var h3 = document.createElement("h3")
		var h4 = document.createElement("h4")
		var h6 = document.createElement("h6")
		var img = document.createElement("img")

		li.classList.add("well", "well-sm");
		img.setAttribute("src", data.image);

		var filmTitle = data.title + "," + data.year;
		h3.textContent = filmTitle;

		var imdbRating = data.imdbRating;
		h4.textContent = imdbRating;

		li.appendChild(h3);
		li.appendChild(h4);
		li.appendChild(img);

		filmList.appendChild(li);
	}
