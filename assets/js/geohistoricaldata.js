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

//MAPS PROVIDERS CONFIGS
var geoportail={
	url= "https://wxs.ign.fr/4g5kl87ch66khntp6v297m02/wmts?SERVICE=WMTS&VERSION=1.0.0",
	format = 'image/png'
};

var geohistoricaldata={
	cassini_vectors_url= 'http://134.158.33.227/geoserver/cassini-vectors/gwc/service/wmts',
	paris_rasters_url= 'http://134.158.33.227/geoserver/paris-rasters/gwc/service/wmts',
	paris_vectors_url= 'http://134.158.33.227/geoserver/paris-vectors/gwc/service/wmts',
	latran_rasters_url= 'http://134.158.33.227/geoserver/latran-rasters/gwc/service/wmts',
	latran_vectors_url= 'http://134.158.33.227/geoserver/latran-vectors/gwc/service/wmts',
	format = 'image/png'
};

//LEVELS OF DETAIL
var level_france={
rasterlayers:
	{
		//FROM IGN
		ign_cassini: 'GEOGRAPHICALGRIDSYSTEMS.CASSINI',
		ign_em10:'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR10',
		ign_em40:'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40',
		ign_ignmap:'GEOGRAPHICALGRIDSYSTEMS.MAPS'
	},
vectorlayers:
	{
		//FROM GEOHISTORICALDATA
		cassini_assemblage:'cassini:france_cassini_table_assemblage',
		cassini_routes:'cassini:france_cassini',
		cassini_surfaces:'cassini:france_cassini_taches_urbaines',
		cassini_hydro_lines:'cassini:france_cassini_hydro',
		cassini_hydro_surfaces:'cassini:france_cassini_surfaces_hydro',
		cassini_toponyms:'cassini:france_cassini_toponyms',
		cassini_chefslieux:'cassini:france_cassini_chefs_lieux_valides',
		
        }
};
var level_paris={
	rasterlayers:
	{
		//FROM GEOHISTORICALDA
		delagrive_1728:'paris-rasters:1728-delagrive',
		delagrive_1740:'paris-rasters:1740-delagrive',
		lattre_1785:'paris-rasters:1785-lattre',
		verniquet_1789:'paris-rasters:1789-verniquet',
		picquet_1809:'paris-rasters:1809-picquet',
		jacoubet_1836:'paris-rasters:1836-jacoubet',
		andriveau_1849:'paris-rasters:1849-andriveau-goujon',
		municipal_1888:'paris-rasters:1888-atlas_municipal'
	},
	vectorlayers:
	{
		//FROM GEOHISTORICALDA
		streets_verniquet:'paris-vectors:1789-verniquet-streetnetwork',
		streets_jacoubet:'paris-vectors:1836-jacoubet-streetnetwork',
		streets_vasserot:'paris-vectors:1836-vasserot-streetnetwork',
		streets_municipal1888:'paris-vectors:1888-verniquet-streetnetwork',
		leveling_delesse_pts:'paris-vectors:nivellement_delesse_fusion',
		leveling_delesse_se_contours:'paris-vectors:nivellement_delesse1880_courbes',
		leveling_delesse_se_pts:'paris-vectors:nivellement_delesse1880_points'
	}
};

/*
------------------
TODO : REPRENDRE AVEC MAURIZIO
-----------------
var level_latran={
	rasterlayers:
	{
	},
	vectorlayers:
	{
		buildings_cloitre_stbenoit:'',
		buildings_clos_bruno:'',
		buildings_college_de_france:'',
		buildings_cloitre_stbenoit:'',
	}
};

var layerCloitreSaintBenoit = 'latran:Expr_1855_Cloitre_St_Benoit';
var layerClosBruneau = 'latran:Expr_1855_Clos_Bruneau';
var layerCollegeDeFrance = 'latran:Expr_1855_College_de_France';
var layerMacons = 'latran:Expr_1855_Macons';
var layerMaubert = 'latran:Expr_1855_Maubert';
var layerNoyers = 'latran:Expr_1855_Noyers';
var layerStJeanDeLatran = 'latran:Expr_1855_St_Jean_de_Latran';
var layerSorbonne = 'latran:Expr_1855_Sorbonne';
var layerCadastreVasserot = 'latran:Cadastre_Vasserot';
var layerExpropriation = 'latran:Expropriation_1858';
var layerIlot = 'latran:Ilot_1858';
var layerSeine = 'latran:N1_Seine_35';
*/

//MAPS TO BE DISPLAYED
var map_france={
	cassini_grille = L.tileLayer.wms(geohistoricaldata.cassini_vectors_url, {
	    layers: level_france.vectorlayers.cassini_assemblage,
	    format: geohistoricaldata.format,
	    transparent: true,
	    attribution: "<a href='https://www.foretsanciennes.fr'>WWF/INRA</a> and <a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
	}),
	
}


var cassini_routes = L.tileLayer.wms(geohistoricaldata_url, {
    layers: routes,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_surfaces = L.tileLayer.wms(geohistoricaldata_url, {
    layers: surfaces,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_hydro_l = L.tileLayer.wms(geohistoricaldata_url, {
    layers: hydro_l,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_hydro_s = L.tileLayer.wms(geohistoricaldata_url, {
    layers: hydro_s,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_toponyms = L.tileLayer.wms(geohistoricaldata_url, {
    layers: toponyms,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_chefslieux = L.tileLayer.wms(geohistoricaldata_url, {
    layers: chefslieux,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var verniquet = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerVerniquet,
    format: formatString,
    transparent: false,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});	

var jacoubet = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerJacoubet,
    format: formatString,
    transparent: false,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var critiquecassini1 = L.tileLayer.wms(geohistoricaldata_url, {
    layers: layerCritiqueCassini1,
    format: formatString,
    transparent: false,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var rues_jacoubet = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerRuesJacoubet,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var rues_vasserot = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerRuesVasserot,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var rues_poubelle = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerRuesPoubelle,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var rues_verniquet = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerRuesVerniquet,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var points_nivellement_delesse_paris_points = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerNivellementDelesseParisPoints,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var points_nivellement_delesse_se_contours = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerNivellementDelesseSEContours,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var points_nivellement_delesse_se_points = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerNivellementDelesseSEPoints,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cloitreSaintBenoit = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerCloitreSaintBenoit,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var closBruneau = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerClosBruneau,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var collegeDeFrance = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerCollegeDeFrance,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var macons = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerMacons,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var maubert = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerMaubert,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var noyers = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerNoyers,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var saintJean = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerStJeanDeLatran,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var sorbonne = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerSorbonne,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cadastreVasserot = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerCadastreVasserot,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var expropriation1858 = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerExpropriation,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var ilot1858 = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerIlot,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});
var seine = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerSeine,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});


var pop1794 = L.tileLayer.wms(geohistoricaldata_url, {
    layers: layerPop1794,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>';
var mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

var grayscale   = L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr});

//Layer IGN
var ignKey = "4g5kl87ch66khntp6v297m02";
var layerIGNCassini = "GEOGRAPHICALGRIDSYSTEMS.CASSINI";
var layerIGNEtatMajor10 = "GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR10";
var layerIGNEtatMajor40 = "GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40";
var layerIGN = "GEOGRAPHICALGRIDSYSTEMS.MAPS";

var url = "https://wxs.ign.fr/" + ignKey + "/wmts?SERVICE=WMTS&VERSION=1.0.0";

var ign_cassini = new L.TileLayer.WMTS(url ,
                                       {
                                           layer: layerIGNCassini,
                                           style: "normal",
                                           tilematrixSet: "PM",
                                           format: "image/jpeg",
                                           attribution: "Map data &copy; <a href='http://www.ign.fr'>IGN</a>"
                                       }
                                      );

var ign_cartes = new L.TileLayer.WMTS( url ,
                                       {
                                           layer: layerIGN,
                                           style: "normal",
                                           tilematrixSet: "PM",
                                           format: "image/jpeg",
                                           attribution: "Map data &copy; <a href='http://www.ign.fr'>IGN</a>"
                                       }
                                     );		

var etat_major10 = new L.TileLayer.WMTS( url ,
                                         {
                                             layer: layerIGNEtatMajor10,
                                             style: "normal",
                                             tilematrixSet: "PM",
                                             format: "image/jpeg",
                                             attribution: "Map data &copy; <a href='http://www.ign.fr'>IGN</a>"
                                         }
                                       );

var etat_major40 = new L.TileLayer.WMTS( url ,
                                         {
                                             layer: layerIGNEtatMajor40,
                                             style: "normal",
                                             tilematrixSet: "PM",
                                             format: "image/jpeg",
                                             attribution: "Map data &copy; <a href='http://www.ign.fr'>IGN</a>"
                                         }
                                       );		
var delagrive_1728 = new L.TileLayer.WMTS( url ,
                                         {
                                             layer: layerIGNEtatMajor40,
                                             style: "normal",
                                             tilematrixSet: "PM",
                                             format: "image/jpeg",
                                             attribution: "Map data &copy; <a href='http://www.ign.fr'>IGN</a>"
                                         }
                                       );

var map = L.map('map', {
    center: [46.7,-1],
    zoom: 6,
    layers: [ign_cassini,cassini_grille,cassini_surfaces,cassini_hydro_l,cassini_hydro_s,cassini_routes,cassini_chefslieux],
    fullscreenControl: true,
    fullscreenControlOptions: { // optional
        title:"Show me the fullscreen !"
    },
    maxZoom: 18,
    attributionControl: false
});

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
	    "Cassini Map 18th c.": ign_cassini,
	    "Etat-Major Map 40K 19th c." : etat_major40,
	    "Etat-Major Map 10K 19th c." : etat_major10,
	    "OpenStreetMap": grayscale,
	    "IGN Maps":ign_cartes,
	    "Cassini Map (Library of Congress)":critiquecassini1
	};
	groupedOverlays = {
	    "Structure": {
		"Sheets" : cassini_grille
	    },
	    "Hydrography": {
   		"Linear" : cassini_hydro_l,
   		"Areal" : cassini_hydro_s			
	    },
	    "Roads and land use": {
   		"Land use" : cassini_surfaces,
   		"Roads": cassini_routes
	    },
	    "Points of interest": {
		"Toponyms": cassini_toponyms,
		"Parishes and Abbeys": cassini_chefslieux
	    }
	};
    } else if (level === "paris") {
	baseLayers = {
	    "Etat-Major Map 10K" : etat_major10,
	    "Verniquet's Atlas" : verniquet,
	    "Jacoubet's Atlas" : jacoubet,
	    "Delagrive Map" : delagrive
	}
	groupedOverlays = {
	    "Rues": {
		"Roads from Vasserot (1808-1836)" : rues_vasserot,
		"Roads from Jacoubet (1836)" : rues_jacoubet,
		"Roads from Verniquet (1789)" : rues_verniquet,
		"Roads from Atlas Municipal (1888)" : rues_poubelle
	    },
	    "Nivellement": {
		"Nivellement de Paris, Girard (1805)" : points_nivellement_delesse_paris_points,
		"Courbes de niveau du sud-est de Paris, Delesse (1880)" : points_nivellement_delesse_se_contours,
		"Nivellement du sud-est,Delesse (1880)" : points_nivellement_delesse_se_points,
	    }
	};
    } else {
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
    }
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
