const config = {
	urls: {
		globeTexture: '../assets/textures/earth_dark.jpg',
  		pointTexture: '../assets/imgs/disc.png'
	},
	sizes: {
		globe: 200,
		globeDotSize: 2
	},
	scale: {
		points: 0.025,
		markers: 0.025,
		globeScale: 1
	},
	rotation: {
	    globe: 0.001
	},
	colors: {
	    globeDotColor: 'rgb(255, 204, 0)',
	    globeMarkerColor: 'rgb(143, 216, 216)',
	    globeMarkerGlow: 'rgb(255, 255, 255)',
	    globeLines: 'rgb(255, 255, 255)',
	    globeLinesDots: 'rgb(255, 255, 255)'
  	},
  	display: {
  		markers: true,
  		points: true,
  		map: true,
  		lines: true
  	},
  	dots: {
  		total: 30
  	}
}

const elements = {
	globe: null,
	atmosphere: null,
	globePoints: null,
	lineDots: [],
	markers: [],
	lines: []
}

const textures = {
	markerLabels: []
}

const groups = {
	map: null,
	main: null,
	globe: null,
	lines: null,
	points: null,
	markers: null,
	atmosphere: null,
	lineDots: null
}

const countries = {
	interval: 20000,
	selected: null,
	index: 0
}
