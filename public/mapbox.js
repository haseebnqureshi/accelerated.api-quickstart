
jQuery(function($) {
	mapboxgl.accessToken = 'pk.eyJ1IjoiaGFzZWVibnF1cmVzaGkiLCJhIjoiY2lxbXc4OXRwMDB2bGZ5bm56YmlmZG9lbiJ9.BBYjTIeAfm3ZpNorWGy9Zw';

	var map = new mapboxgl.Map({
	    container: 'map',
	    style: 'mapbox://styles/haseebnqureshi/ciqmwdox9000ebam9sw85s9hk',
	    center: [-79.4512, 43.6568],
	    zoom: 13
	});

	map.addControl(new mapboxgl.Geocoder());

});
