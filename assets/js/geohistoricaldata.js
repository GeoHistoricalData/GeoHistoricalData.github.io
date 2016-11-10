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

var geohistoricaldata_url = "http://geohistoricaldata.org/geoserver/cassini/wms?&TILED=true";
var geohistoricaldata_paris_url = "http://geohistoricaldata.org/geoserver/paris/wms?&TILED=true";
var geohistoricaldata_latran_url = "http://geohistoricaldata.org/geoserver/latran/wms?&TILED=true";
var formatString = 'image/png';
var assemblage = 'cassini:france_cassini_table_assemblage';
var routes = 'cassini:france_cassini';
var surfaces = 'cassini:france_cassini_taches_urbaines';
var hydro_l = 'cassini:france_cassini_hydro';
var hydro_s = 'cassini:france_cassini_surfaces_hydro';
var toponyms = 'cassini:france_cassini_toponyms';
var chefslieux = 'cassini:france_cassini_chefs_lieux_valides';
var layerVerniquet = 'paris:verniquet';
var layerJacoubet = 'paris:jacoubet';
var layerCritiqueCassini1 = 'cassini:cs000001_georef_l93';
var layerRuesJacoubet = 'paris:rues_jacoubet';
var layerRuesVasserot = 'paris:rues_vasserot';
var layerRuesPoubelle = 'paris:rues_poubelle';
var layerRuesVerniquet = 'paris:rues_verniquet';
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

var layerPop1794 = 'cassini:kde_1794_5000';

var cassini_grille = L.tileLayer.wms(geohistoricaldata_url, {
    layers: assemblage,
    format: formatString,
    transparent: true,
    attribution: "<a href='https://www.foretsanciennes.fr'>WWF/INRA</a> and <a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

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
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_chefslieux = L.tileLayer.wms(geohistoricaldata_url, {
    layers: chefslieux,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
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
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var critiquecassini1 = L.tileLayer.wms(geohistoricaldata_url, {
    layers: layerCritiqueCassini1,
    format: formatString,
    transparent: false,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var rues_jacoubet = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerRuesJacoubet,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var rues_vasserot = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerRuesVasserot,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var rues_poubelle = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerRuesPoubelle,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var rues_verniquet = L.tileLayer.wms(geohistoricaldata_paris_url, {
    layers: layerRuesVerniquet,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cloitreSaintBenoit = L.tileLayer.wms(geohistoricaldata_latran_url, {
    layers: layerCloitreSaintBenoit,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
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

//layer delagrive
var delagrive = new L.TileLayer('http://mapwarper.net/layers/tile/257/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 18
});

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
		"Administrative centers": cassini_chefslieux
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
