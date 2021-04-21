var wms_layers = [];

var format_Powiat_Olsztyn_0 = new ol.format.GeoJSON();
var features_Powiat_Olsztyn_0 = format_Powiat_Olsztyn_0.readFeatures(json_Powiat_Olsztyn_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Powiat_Olsztyn_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Powiat_Olsztyn_0.addFeatures(features_Powiat_Olsztyn_0);
var lyr_Powiat_Olsztyn_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Powiat_Olsztyn_0, 
                style: style_Powiat_Olsztyn_0,
                interactive: true,
                title: '<img src="styles/legend/Powiat_Olsztyn_0.png" /> Powiat_Olsztyn'
            });
var format_Roads_Olsztyn_1 = new ol.format.GeoJSON();
var features_Roads_Olsztyn_1 = format_Roads_Olsztyn_1.readFeatures(json_Roads_Olsztyn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_Olsztyn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_Olsztyn_1.addFeatures(features_Roads_Olsztyn_1);
var lyr_Roads_Olsztyn_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_Olsztyn_1, 
                style: style_Roads_Olsztyn_1,
                interactive: true,
                title: '<img src="styles/legend/Roads_Olsztyn_1.png" /> Roads_Olsztyn'
            });
var format_RailWay_Olsztyn_2 = new ol.format.GeoJSON();
var features_RailWay_Olsztyn_2 = format_RailWay_Olsztyn_2.readFeatures(json_RailWay_Olsztyn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailWay_Olsztyn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailWay_Olsztyn_2.addFeatures(features_RailWay_Olsztyn_2);
var lyr_RailWay_Olsztyn_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RailWay_Olsztyn_2, 
                style: style_RailWay_Olsztyn_2,
                interactive: true,
                title: '<img src="styles/legend/RailWay_Olsztyn_2.png" /> RailWay_Olsztyn'
            });
var format_Bus_stop_Olsztyn_3 = new ol.format.GeoJSON();
var features_Bus_stop_Olsztyn_3 = format_Bus_stop_Olsztyn_3.readFeatures(json_Bus_stop_Olsztyn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_stop_Olsztyn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bus_stop_Olsztyn_3.addFeatures(features_Bus_stop_Olsztyn_3);
var lyr_Bus_stop_Olsztyn_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bus_stop_Olsztyn_3, 
                style: style_Bus_stop_Olsztyn_3,
                interactive: true,
                title: '<img src="styles/legend/Bus_stop_Olsztyn_3.png" /> Bus_stop_Olsztyn'
            });
var format_Buildings_Olsztyn_4 = new ol.format.GeoJSON();
var features_Buildings_Olsztyn_4 = format_Buildings_Olsztyn_4.readFeatures(json_Buildings_Olsztyn_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_Olsztyn_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_Olsztyn_4.addFeatures(features_Buildings_Olsztyn_4);
var lyr_Buildings_Olsztyn_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_Olsztyn_4, 
                style: style_Buildings_Olsztyn_4,
                interactive: true,
                title: '<img src="styles/legend/Buildings_Olsztyn_4.png" /> Buildings_Olsztyn'
            });

lyr_Powiat_Olsztyn_0.setVisible(true);lyr_Roads_Olsztyn_1.setVisible(true);lyr_RailWay_Olsztyn_2.setVisible(true);lyr_Bus_stop_Olsztyn_3.setVisible(true);lyr_Buildings_Olsztyn_4.setVisible(true);
var layersList = [lyr_Powiat_Olsztyn_0,lyr_Roads_Olsztyn_1,lyr_RailWay_Olsztyn_2,lyr_Bus_stop_Olsztyn_3,lyr_Buildings_Olsztyn_4];
lyr_Powiat_Olsztyn_0.set('fieldAliases', {'id': 'id', });
lyr_Roads_Olsztyn_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_RailWay_Olsztyn_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Bus_stop_Olsztyn_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Buildings_Olsztyn_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Powiat_Olsztyn_0.set('fieldImages', {'id': 'TextEdit', });
lyr_Roads_Olsztyn_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_RailWay_Olsztyn_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Bus_stop_Olsztyn_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Buildings_Olsztyn_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Powiat_Olsztyn_0.set('fieldLabels', {'id': 'no label', });
lyr_Roads_Olsztyn_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_RailWay_Olsztyn_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Bus_stop_Olsztyn_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Buildings_Olsztyn_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Buildings_Olsztyn_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});