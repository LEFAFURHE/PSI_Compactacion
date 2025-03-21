ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32618").setExtent([386770.179674, 969843.467489, 387867.286025, 970366.050514]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Fca_Las_Gaviotas_1 = new ol.format.GeoJSON();
var features_Fca_Las_Gaviotas_1 = format_Fca_Las_Gaviotas_1.readFeatures(json_Fca_Las_Gaviotas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Fca_Las_Gaviotas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fca_Las_Gaviotas_1.addFeatures(features_Fca_Las_Gaviotas_1);
var lyr_Fca_Las_Gaviotas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fca_Las_Gaviotas_1, 
                style: style_Fca_Las_Gaviotas_1,
                popuplayertitle: 'Fca_Las_Gaviotas',
                interactive: true,
                title: '<img src="styles/legend/Fca_Las_Gaviotas_1.png" /> Fca_Las_Gaviotas'
            });
var format_Curvas_Gaviotas_2 = new ol.format.GeoJSON();
var features_Curvas_Gaviotas_2 = format_Curvas_Gaviotas_2.readFeatures(json_Curvas_Gaviotas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Curvas_Gaviotas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_Gaviotas_2.addFeatures(features_Curvas_Gaviotas_2);
var lyr_Curvas_Gaviotas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_Gaviotas_2, 
                style: style_Curvas_Gaviotas_2,
                popuplayertitle: 'Curvas_Gaviotas',
                interactive: true,
    title: 'Curvas_Gaviotas<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_0.png" /> 30,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_1.png" /> 31,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_2.png" /> 32,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_3.png" /> 33,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_4.png" /> 34,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_5.png" /> 35,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_6.png" /> 36,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_7.png" /> 37,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_8.png" /> 38,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_2_9.png" /> 39,000000000000000<br />' });
var format_Profundidad_3 = new ol.format.GeoJSON();
var features_Profundidad_3 = format_Profundidad_3.readFeatures(json_Profundidad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Profundidad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profundidad_3.addFeatures(features_Profundidad_3);
var lyr_Profundidad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profundidad_3, 
                style: style_Profundidad_3,
                popuplayertitle: 'Profundidad',
                interactive: true,
    title: 'Profundidad<br />\
    <img src="styles/legend/Profundidad_3_0.png" /> 1<br />\
    <img src="styles/legend/Profundidad_3_1.png" /> 1,5<br />\
    <img src="styles/legend/Profundidad_3_2.png" /> 10<br />\
    <img src="styles/legend/Profundidad_3_3.png" /> 11<br />\
    <img src="styles/legend/Profundidad_3_4.png" /> 13<br />\
    <img src="styles/legend/Profundidad_3_5.png" /> 15<br />\
    <img src="styles/legend/Profundidad_3_6.png" /> 16<br />\
    <img src="styles/legend/Profundidad_3_7.png" /> 17<br />\
    <img src="styles/legend/Profundidad_3_8.png" /> 20<br />\
    <img src="styles/legend/Profundidad_3_9.png" /> 25<br />\
    <img src="styles/legend/Profundidad_3_10.png" /> 3<br />\
    <img src="styles/legend/Profundidad_3_11.png" /> 45<br />\
    <img src="styles/legend/Profundidad_3_12.png" /> 5<br />\
    <img src="styles/legend/Profundidad_3_13.png" /> 50<br />\
    <img src="styles/legend/Profundidad_3_14.png" /> 6<br />\
    <img src="styles/legend/Profundidad_3_15.png" /> 7<br />\
    <img src="styles/legend/Profundidad_3_16.png" /> 7,5<br />\
    <img src="styles/legend/Profundidad_3_17.png" /> 8<br />\
    <img src="styles/legend/Profundidad_3_18.png" /> 9<br />' });
var format_Puntos_Comp_4 = new ol.format.GeoJSON();
var features_Puntos_Comp_4 = format_Puntos_Comp_4.readFeatures(json_Puntos_Comp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Puntos_Comp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Comp_4.addFeatures(features_Puntos_Comp_4);
var lyr_Puntos_Comp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_Comp_4, 
                style: style_Puntos_Comp_4,
                popuplayertitle: 'Puntos_Comp',
                interactive: true,
    title: 'Puntos_Comp<br />\
    <img src="styles/legend/Puntos_Comp_4_0.png" /> 50<br />\
    <img src="styles/legend/Puntos_Comp_4_1.png" /> 200<br />\
    <img src="styles/legend/Puntos_Comp_4_2.png" /> 300<br />\
    <img src="styles/legend/Puntos_Comp_4_3.png" /> 320<br />\
    <img src="styles/legend/Puntos_Comp_4_4.png" /> 340<br />\
    <img src="styles/legend/Puntos_Comp_4_5.png" /> 360<br />\
    <img src="styles/legend/Puntos_Comp_4_6.png" /> 380<br />\
    <img src="styles/legend/Puntos_Comp_4_7.png" /> 400<br />\
    <img src="styles/legend/Puntos_Comp_4_8.png" /> 420<br />\
    <img src="styles/legend/Puntos_Comp_4_9.png" /> 460<br />\
    <img src="styles/legend/Puntos_Comp_4_10.png" /> 480<br />\
    <img src="styles/legend/Puntos_Comp_4_11.png" /> 500<br />\
    <img src="styles/legend/Puntos_Comp_4_12.png" /> 520<br />\
    <img src="styles/legend/Puntos_Comp_4_13.png" /> 540<br />\
    <img src="styles/legend/Puntos_Comp_4_14.png" /> 550<br />\
    <img src="styles/legend/Puntos_Comp_4_15.png" /> 580<br />\
    <img src="styles/legend/Puntos_Comp_4_16.png" /> 640<br />\
    <img src="styles/legend/Puntos_Comp_4_17.png" /> 700<br />\
    <img src="styles/legend/Puntos_Comp_4_18.png" /> 720<br />\
    <img src="styles/legend/Puntos_Comp_4_19.png" /> 740<br />\
    <img src="styles/legend/Puntos_Comp_4_20.png" /> 840<br />\
    <img src="styles/legend/Puntos_Comp_4_21.png" /> 880<br />\
    <img src="styles/legend/Puntos_Comp_4_22.png" /> 1000<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Fca_Las_Gaviotas_1.setVisible(true);lyr_Curvas_Gaviotas_2.setVisible(true);lyr_Profundidad_3.setVisible(true);lyr_Puntos_Comp_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Fca_Las_Gaviotas_1,lyr_Curvas_Gaviotas_2,lyr_Profundidad_3,lyr_Puntos_Comp_4];
lyr_Fca_Las_Gaviotas_1.set('fieldAliases', {'Área': 'Ha ', 'Potrero': 'NÚMERO', 'Pasto': 'Pasto', 'Malezas': 'Malezas', 'Carga_UGG': 'Carga_UGG', 'Foto': 'Foto', });
lyr_Curvas_Gaviotas_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Profundidad_3.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'name': 'name', 'cmt': 'cmt', 'PSI': 'PSI', });
lyr_Puntos_Comp_4.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'name': 'name', 'cmt': 'cmt', 'PSI': 'PSI', });
lyr_Fca_Las_Gaviotas_1.set('fieldImages', {'Área': 'TextEdit', 'Potrero': 'TextEdit', 'Pasto': 'TextEdit', 'Malezas': 'TextEdit', 'Carga_UGG': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Curvas_Gaviotas_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Profundidad_3.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'PSI': 'TextEdit', });
lyr_Puntos_Comp_4.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'PSI': 'Range', });
lyr_Fca_Las_Gaviotas_1.set('fieldLabels', {'Área': 'inline label - always visible', 'Potrero': 'inline label - always visible', 'Pasto': 'hidden field', 'Malezas': 'hidden field', 'Carga_UGG': 'hidden field', 'Foto': 'inline label - always visible', });
lyr_Curvas_Gaviotas_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - always visible', });
lyr_Profundidad_3.set('fieldLabels', {'ele': 'inline label - always visible', 'time': 'hidden field', 'name': 'hidden field', 'cmt': 'inline label - always visible', 'PSI': 'hidden field', });
lyr_Puntos_Comp_4.set('fieldLabels', {'ele': 'inline label - always visible', 'time': 'hidden field', 'name': 'hidden field', 'cmt': 'hidden field', 'PSI': 'inline label - always visible', });
lyr_Puntos_Comp_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});