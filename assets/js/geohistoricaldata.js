$(window).resize(function() {
  sizeLayerControl();
});

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  //map.fitBounds(boroughs.getBounds());
  //TODO get correct bounds
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#login-btn").click(function() {
  $("#loginModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 1080) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

//Convenient function

function layerWMS(service_url, _layers, _opts){
	opts = Object.assign(_opts,{layers:_layers});
	return new L.TileLayer.WMS(service_url,opts);
}

function layerWMTS(service_url, _layer, _opts){
	opts = Object.assign(_opts,{layer:_layer});
	return new L.TileLayer.WMTS(service_url,opts);
}

//providers
var geoportail={
	wmts:{
		url:"https://wxs.ign.fr/0kj8upx63msobitrl3oxgvff/wmts?SERVICE=WMTS&VERSION=1.0.0",
		opts_default:{
			style: "normal",
			attribution: "Map data &copy; <a href='http://www.ign.fr'>IGN</a>'",
			transparent: true,
			tilematrixSet: "PM",
			width : "256",
			height : "256",
			format: "image/jpeg"
		}
	}
};

var ghd={
	wms:{
		url:'http://geohistoricaldata.org/geoserver/wms',
		opts_default:{
			style:'raster',
			attribution: "Map data &copy; <a href='http://geohistoricaldata.org/'>http://geohistoricaldata.org/</a>'",
			transparent:true,
			format:'image/png',
			maxZoom:21,
			tileSize:512
		}
	}
};



var level_france={
	//RASTERS 
	//from IGN
	ign_cassini:layerWMTS(geoportail.wmts.url,'GEOGRAPHICALGRIDSYSTEMS.CASSINI',geoportail.wmts.opts_default),
	ign_em10:layerWMTS(geoportail.wmts.url,'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR10',geoportail.wmts.opts_default),
	ign_em40:layerWMTS(geoportail.wmts.url,'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40',geoportail.wmts.opts_default),
	ign_ignmap:layerWMTS(geoportail.wmts.url,'GEOGRAPHICALGRIDSYSTEMS.MAPS',geoportail.wmts.opts_default),
	cassini_52bnf:layerWMS(ghd.wms.url,'cassini-rasters:cassini_bnf_52 ',ghd.wms.opts_default),

	//VECTORS
	//from GeoHistoricalData
	cassini_assemblage:layerWMS(ghd.wms.url,'cassini-vectors:france_cassini_table_assemblage',ghd.wms.opts_default),
	cassini_routes:layerWMS(ghd.wms.url,'cassini-vectors:france_cassini',ghd.wms.opts_default),
	cassini_surfaces:layerWMS(ghd.wms.url,'cassini-vectors:france_cassini_taches_urbaines',ghd.wms.opts_default),
	cassini_hydro_lines:layerWMS(ghd.wms.url,'cassini-vectors:france_cassini_hydro',ghd.wms.opts_default),
	cassini_hydro_surfaces:layerWMS(ghd.wms.url,'cassini-vectors:france_cassini_surfaces_hydro',ghd.wms.opts_default),
	cassini_toponyms:layerWMS(ghd.wms.url,'cassini-vectors:france_cassini_toponyms',ghd.wms.opts_default),
	cassini_chefslieux:layerWMS(ghd.wms.url,'cassini-vectors:france_cassini_chefs_lieux_valides',ghd.wms.opts_default),
	cassini_forets:layerWMS(ghd.wms.url,'cassini-vectors:france_cassini_forets',ghd.wms.opts_default)
};

var level_paris={
	//RASTERS 
	//from GeoHistoricalData
	delagrive_1728: layerWMS(ghd.wms.url,'paris-rasters:delagrive_1728',ghd.wms.opts_default),
	delagrive_1740:layerWMS(ghd.wms.url,'paris-rasters:delagrive_1740',ghd.wms.opts_default),
	lattre_1785:layerWMS(ghd.wms.url,'paris-rasters:lattre_1785',ghd.wms.opts_default),
	verniquet_1789:layerWMS(ghd.wms.url,'paris-rasters:verniquet_1789',ghd.wms.opts_default),
	picquet_1809:layerWMS(ghd.wms.url,'paris-rasters:picquet_1809',ghd.wms.opts_default),
	jacoubet_1836:layerWMS(ghd.wms.url,'paris-rasters:jacoubet_1836',ghd.wms.opts_default),
	andriveau_1849:layerWMS(ghd.wms.url,'paris-rasters:andriveau_1849',ghd.wms.opts_default),
	municipal_1888:layerWMS(ghd.wms.url,'paris-rasters:poubelle_1888',ghd.wms.opts_default),

	//VECTORS
	//from GeoHistoricalData
	rues_verniquet:layerWMS(ghd.wms.url,'paris-vectors:1790_verniquet',ghd.wms.opts_default),
	rues_vasserot:layerWMS(ghd.wms.url,'paris-vectors:1836_jacoubet_vasserot',ghd.wms.opts_default),
	rues_jacoubet:layerWMS(ghd.wms.url,'paris-vectors:1836_jacoubet',ghd.wms.opts_default),
	rues_poubelle:layerWMS(ghd.wms.url,'paris-vectors:1888_poubelle',ghd.wms.opts_default)
};

//console.log(level_paris.delagrive_1728);

var map = L.map('map', {
    //center: [48.858,2.34],
    center: [45.7624,3.3058],
    zoom: 12,
    layers: [level_france.ign_cassini],
    fullscreenControl: true,
    fullscreenControlOptions: { // optional
        title:"Show me the fullscreen !"
    },
    attributionControl: false
});
map.options.maxZoom=21;
/* Attribution control */
function updateAttribution(e) {
  $.each(map._layers, function(index, layer) {
    if (layer.getAttribution) {
      $("#attribution").html((layer.getAttribution()));
    }
  });
}
map.on("layeradd", updateAttribution);
map.on("layerremove", updateAttribution);

var attributionControl = L.control({
  position: "bottomright"
});
attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  div.innerHTML = "<a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
  return div;
};
map.addControl(attributionControl);

var baseLayers = {};
var groupedOverlays = {};

function updateLayers(level) {
    if (level === "france") {
	baseLayers = {
	    "Cassini Map 18th c.": level_france.ign_cassini,
            "Cassini sheet n.52 (BnF)": level_france.cassini_52bnf
	};
	groupedOverlays = {
	    "Structure": {
		"Sheets" : level_france.cassini_assemblage
	    },
	    "Hydrography": {
   		"Linear" : level_france.cassini_hydro_lines,
   		"Areal" : level_france.cassini_hydro_surfaces
	    },
	    "Roads and land use": {
   		"Cities and domains" : level_france.cassini_surfaces,
		"Forests" : level_france.cassini_forets,
   		"Roads": level_france.cassini_routes
	    },
	    "Points of interest": {
		"Toponyms": level_france.cassini_toponyms,
		"Parishes and Abbeys": level_france.cassini_chefslieux
	    }
	};
    } else if (level === "paris") {
	baseLayers = {
	    "Delagrive's Map, 1728" : level_paris.delagrive_1728,
	    "Delagrive's Map, 1740" : level_paris.delagrive_1740,
	    "Lattré's Map, 1785": level_paris.lattre_1785,
	    "Verniquet's Atlas, 1789" : level_paris.verniquet_1789,
	    "Picquet's Map, 1809": level_paris.picquet_1809,
	    "Etat-Major Map 10K, 1840" : level_france.ign_em10,
	    "Jacoubet's Atlas, 1836" : level_paris.jacoubet_1836,
	    "Andriveau-Goujon's Map, 1849":level_paris.andriveau_1849,
	    "Municipal atlas y. 1888, 1888": level_paris.municipal_1888

	}
	groupedOverlays = {
	    "Streets": {
		"Streets from Verniquet (1789)":level_paris.rues_verniquet,
		"Streets from Vasserot (1808-1836)":level_paris.rues_vasserot,
		"Streets from Jacoubet (1836)":level_paris.rues_jacoubet,
		"Streets from Atlas Municipal (1888)":level_paris.rues_poubelle
	    },
	    "Leveling": {
		//"Leveling of Paris, Girard (1805)" : points_nivellement_delesse_paris_points,
		//"Courbes de niveau du sud-est de Paris, Delesse (1880)" : points_nivellement_delesse_se_contours,
		//"Leveling of south-west Paris,Delesse (1880)" : points_nivellement_delesse_se_points,
	    }
	};
	//map.setView({lat:2.34,lng:48.85},8);
    } 
    //TODO
    /*
    else {
	baseLayers = {
	    "Cloitre Saint Benoit 1855" : cloitreSaintBenoit,
	    "Clos Bruneau 1855" : closBruneau,
	    "Collège de France 1855" : collegeDeFrance,
	    "Macons 1855" : macons,
	    "Maubert 1855" : maubert,
	    "Noyers 1855" : noyers,
	    "Saint Jean de Latran 1855" : saintJean,
	    "Sorbonne 1855" : sorbonne,
	    "Cadastre Vasserot" : cadastreVasserot,
	    "Expropriation 1858" : expropriation1858,
	    "Ilot 1858" : ilot1858,
	    "Seine" : seine
	}
	groupedOverlays = {
	};
    }*/
};

var options = {
//    exclusiveGroups: ["France", "Paris and its Area"],
    collapsed: isCollapsed
};

updateLayers("france");
var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, options).addTo(map);

function updateControlAndLayers(level) {
    for (i in layerControl._layers) {
	var layer = layerControl._layers[i].layer;
	layerControl.removeLayer(layer);
	if (map.hasLayer(layer)) {
	    map.removeLayer(layer);
	}
    }
    updateLayers(level);
    var first = true;
    for (i in baseLayers) {
	layerControl._addLayer(baseLayers[i], i);
	if (first) {
	    map.addLayer(baseLayers[i]);
	    first = false;
	}
    }
    for (i in groupedOverlays) {
	for (var j in groupedOverlays[i]) {
            layerControl._addLayer(groupedOverlays[i][j], j, i, true);
	    map.addLayer(groupedOverlays[i][j]);
      }
    }
    layerControl._update();
}

$("#france-btn").click(function() {
    updateControlAndLayers("france");
    return false;
});

$("#paris-btn").click(function() {
    updateControlAndLayers("paris");
    return false;
});

$("#latran-btn").click(function() {
    updateControlAndLayers("latran");
    return false;
});

var osmGeocoder = new L.Control.OSMGeocoder();

L.control.scale().addTo(map);
map.addControl(osmGeocoder);

// detect fullscreen toggling
map.on('enterFullscreen', function(){if(window.console) window.console.log('enterFullscreen');});
map.on('exitFullscreen', function(){if(window.console) window.console.log('exitFullscreen');});

//function opacity
function updateOpacity(value) {ign_cassini.setOpacity(value);}

//function checkbox
function LayerState(CheckboxName, layer){
    var objCheckbox = document.getElementById(CheckboxName);
    if (objCheckbox.checked) {map.addLayer(layer);}
    else {map.removeLayer(layer);}
}

// Leaflet patch to make layer control scrollable on touch browsers
var container = $(".leaflet-control-layers")[0];
if (!L.Browser.touch) {
  L.DomEvent
  .disableClickPropagation(container)
  .disableScrollPropagation(container);
} else {
  L.DomEvent.disableClickPropagation(container);
}

function submitLoginForm()
{
   document.forms["login-form"].submit();
}

map.locate({setView: true, maxZoom: 15});

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
