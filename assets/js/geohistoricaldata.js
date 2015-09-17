$(window).resize(function() {
  sizeLayerControl();
});

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  map.fitBounds(boroughs.getBounds());
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
var formatString = 'image/png';
var assemblage = 'cassini:france_cassini_table_assemblage';
var routes = 'cassini:france_cassini';
var surfaces = 'cassini:france_cassini_taches_urbaines';
var hydro_l = 'cassini:france_cassini_hydro';
var hydro_s = 'cassini:france_cassini_surfaces_hydro';
var toponyms = 'cassini:france_cassini_toponyms';
var layerVerniquet = 'paris:verniquet';
var layerJacoubet = 'paris:jacoubet';
var layerCritiqueCassini1 = 'cassini:cs000001_georef_l93';
var layerRuesJacoubet = 'paris:rues_jacoubet';
var layerRuesVasserot = 'paris:rues_vasserot';
var layerRuesPoubelle = 'paris:rues_poubelle';
var layerRuesVerniquet = 'paris:rues_verniquet';

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

var url = "https://gpp3-wxs.ign.fr/" + ignKey + "/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities";

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
    layers: [ign_cassini,cassini_grille,cassini_surfaces,cassini_hydro_l,cassini_hydro_s,cassini_routes],
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
/*
    "Cassini Map (IGN)": ign_cassini,
    "Etat-Major Map 40K" : etat_major40,
    "Etat-Major Map 10K" : etat_major10,
    "Verniquet's Atlas" : verniquet,
    "Jacoubet's Atlas" : jacoubet,
    "Delagrive Map" : delagrive,
    "OpenStreetMap": grayscale,
    "IGN Maps":ign_cartes,
    "Cassini Map (Library of Congress)":critiquecassini1
};
*/

var overlays = {
    "Sheets" : cassini_grille,
    "Linea Hydrography" : cassini_hydro_l,
    "Areal Hydrography" : cassini_hydro_s,			
    "Land Use" : cassini_surfaces,
    "Roads": cassini_routes,
    "Toponyms": cassini_toponyms
    //"Plan Delagrive": delagrive,
    //"Atlas de Verniquet" : verniquet
};

var osmGeocoder = new L.Control.OSMGeocoder();

var groupedOverlays = {
    "France": {
	"Cassini Map (IGN)": ign_cassini,
	"Etat-Major Map 40K" : etat_major40,
	"OpenStreetMap": grayscale,
	"IGN Maps":ign_cartes
    },
    "Paris and its Area": {
	"Etat-Major Map 10K" : etat_major10,
	"Verniquet's Atlas" : verniquet,
	"Jacoubet's Atlas" : jacoubet,
	"Delagrive Map" : delagrive,
	"Cassini Map (Library of Congress)":critiquecassini1,
	"Roads from Jacoubet" : rues_jacoubet,
	"Roads from Vasserot" : rues_vasserot,
	"Roads from Poubelle" : rues_poubelle,
	"Roads from Verniquet" : rues_verniquet
    },
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
	"Toponyms": cassini_toponyms
	}
};

var options = {
    exclusiveGroups: ["France", "Paris and its Area"],
    collapsed: isCollapsed
};

var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, options).addTo(map);

//L.control.layers(baseLayers, overlays).addTo(map);

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
