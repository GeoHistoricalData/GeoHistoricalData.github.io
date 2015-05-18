var geohistoricaldata_url = "http://geohistoricaldata.org/geoserver/cassini/wms?&TILED=true";
var formatString = 'image/png';
var assemblage = 'cassini:france_cassini_table_assemblage';
var routes = 'cassini:france_cassini';
var surfaces = 'cassini:france_cassini_taches_urbaines';
var hydro_l = 'cassini:france_cassini_hydro';
var hydro_s = 'cassini:france_cassini_surfaces_hydro';
var layerVerniquet = 'cassini:verniquet';

var cassini_grille = L.tileLayer.wms(geohistoricaldata_url, {
    layers: assemblage,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_routes = L.tileLayer.wms(geohistoricaldata_url, {
    layers: routes,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_surfaces = L.tileLayer.wms(geohistoricaldata_url, {
    layers: surfaces,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_hydro_l = L.tileLayer.wms(geohistoricaldata_url, {
    layers: hydro_l,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var cassini_hydro_s = L.tileLayer.wms(geohistoricaldata_url, {
    layers: hydro_s,
    format: formatString,
    transparent: true,
    attribution: "<a href='http://www.geohistoricaldata.org'>GeoHistoricalData</a>"
});

var verniquet = L.tileLayer.wms(geohistoricaldata_url, {
    layers: layerVerniquet,
    format: formatString,
    transparent: false,
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

var url = "http://gpp3-wxs.ign.fr/" + ignKey + "/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities";

var ign_cassini = new L.TileLayer.WMTS(url ,
                                       {
                                           layer: layerIGNCassini,
                                           style: "normal",
                                           tilematrixSet: "PM",
                                           format: "image/jpeg",
                                           attribution: "<a href='https://github.com/mylen/leaflet.TileLayer.WMTS'>GitHub</a>&copy; <a href='http://www.ign.fr'>IGN</a>"
                                       }
                                      );

var ign_cartes = new L.TileLayer.WMTS( url ,
                                       {
                                           layer: layerIGN,
                                           style: "normal",
                                           tilematrixSet: "PM",
                                           format: "image/jpeg",
                                           attribution: "<a href='https://github.com/mylen/leaflet.TileLayer.WMTS'>GitHub</a>&copy; <a href='http://www.ign.fr'>IGN</a>"
                                       }
                                     );		

var etat_major10 = new L.TileLayer.WMTS( url ,
                                         {
                                             layer: layerIGNEtatMajor10,
                                             style: "normal",
                                             tilematrixSet: "PM",
                                             format: "image/jpeg",
                                             attribution: "<a href='https://github.com/mylen/leaflet.TileLayer.WMTS'>GitHub</a>&copy; <a href='http://www.ign.fr'>IGN</a>"
                                         }
                                       );

var etat_major40 = new L.TileLayer.WMTS( url ,
                                         {
                                             layer: layerIGNEtatMajor40,
                                             style: "normal",
                                             tilematrixSet: "PM",
                                             format: "image/jpeg",
                                             attribution: "<a href='https://github.com/mylen/leaflet.TileLayer.WMTS'>GitHub</a>&copy; <a href='http://www.ign.fr'>IGN</a>"
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
    maxZoom: 18
});

var baseLayers = {
    "Carte de Cassini IGN": ign_cassini,
    "Carte d'Etat-Major 40" : etat_major40,
    "Carte d'Etat-Major 10" : etat_major10,
    "Atlas de Verniquet" : verniquet,
    "Plan Delagrive" : delagrive,
    "OpenStreetMap": grayscale,
    "Cartes IGN":ign_cartes
};

var overlays = {
    "Tableau d'assemblage" : cassini_grille,
    "Hydrographie linéaire" : cassini_hydro_l,
    "Hydrographie surfacique" : cassini_hydro_s,			
    "Tâches urbaines" : cassini_surfaces,
    "Routes": cassini_routes,			
    //"Plan Delagrive": delagrive,
    //"Atlas de Verniquet" : verniquet
};

var osmGeocoder = new L.Control.OSMGeocoder();

L.control.layers(baseLayers, overlays).addTo(map);
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
