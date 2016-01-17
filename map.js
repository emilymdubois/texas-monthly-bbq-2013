L.mapbox.accessToken = 'pk.eyJ1IjoiZW1pbHltZHVib2lzIiwiYSI6ImNpajBmZ2p5azAwODN1YWx6ZjJ2MjFxYmQifQ.FbCG71iC6_bjFcDqolAo0Q';

var map = L.mapbox.map('map', 'emilymdubois.okd0dh8p')
    .setView([31.38, -99], 6);
    map.scrollWheelZoom.disable();

var bbqJoints = {
  'type': 'FeatureCollection',
  'features': [
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.7312749,30.2701364]}, 'properties': { 'title': 'Franklin Barbecue', 'description': '900 E. 11th, 512-653-1187. Open Tue–Sun 11 till meat runs out. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.7838309,32.7836497]}, 'properties': { 'title': 'Pecan Lodge', '\'description': '920 S. Harwood, 214-748-8900. Open Thur–Sun 11 till meat runs out.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.0097064,30.4133814]}, 'properties': { 'title': 'Snow\'s BBQ', 'description': '516 Main, 979-542-8189 (weekdays), 979-773-4640 (Saturdays). Open Sat only, 8 till meat runs out.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.411096,30.5688698]}, 'properties': { 'title': 'Louie Mueller Barbecue', 'description': '206 W. 2nd, 512-352-6206. Open Mon–Fri 11–6, Sat 10–6.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-98.1234846,26.180866]}, 'properties': { 'title': 'The Original Willie\'s Bar-B-Q', 'description': '320 S. Alamo Rd., 956-702-1370. Open Mon–Sat 11–9, Sun 11–5.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-101.8736591,35.1906849]}, 'properties': { 'title': 'Tyler\'s Barbeque', 'description': '2014 Paramount, 806-331-2271. Open Tue–Sat 11–8.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.7144695,30.2590175]}, 'properties': { 'title': 'John Mueller Meat Co', 'description': '2500 E. 6th, entrance on Pedernales. Open Tue–Sun 10:30 till meat runs out (usually early afternoon).'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.7351428,30.2611617]}, 'properties': { 'title': 'La Barbecue', 'description': '1502 S. 1st, 512-605-9696. Open Wed–Sun 11 till meat runs out. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.7480654,30.2648886]}, 'properties': { 'title': 'Lamberts Downtown Barbecue', 'description': '401 W. 2nd, 512-494-1500. Lunch: Mon–Fri 11–2:30;, dinner: Sun–Wed 5:30–10, Thur–Sat 5:30–10:30; brunch Sat & Sun 11–2. Full bar.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.7214149,30.334547]}, 'properties': { 'title': 'Stiles Switch BBQ & Brew', 'description': '6610 N. Lamar Blvd., 512-380-9199. Open Sun & Tue–Thur 11–9, Fri & Sat 11–10. Beer & wine.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.4615066,31.0575689]}, 'properties': { 'title': 'Miller\'s Smokehouse', 'description': '208 N. Penelope, 254-939-5500. Open Tue–Thur 10:30–6:30, Fri & Sat 10:30–9. Beer and margaritas.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.3696658,30.6794758]}, 'properties': { 'title': 'Fargo\'s Pit BBQ', 'description': '720 N. Texas Ave., 979-778-3662. Open Tue–Sat 11–7.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-95.6849902,29.8817346]}, 'properties': { 'title': 'Brooks\' Place', 'description': '18020 FM 529, 832-893-1682. Open Wed–Sat 11–7, Sun 11–5.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.8284176,32.7493677]}, 'properties': { 'title': 'Lockhart Smokehouse', 'description': '400 W. Davis, 214-944-5521. Open daily 11 till meat runs out. Bar.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.3311958,29.5853226]}, 'properties': { 'title': 'Austin\'s BBQ and Catering', 'description': '507 E. Main, 979-234-5250. Open Wed 9–4, Thur–Sat 9–6, Sun 9–4.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.2383306,28.696253]}, 'properties': { 'title': 'McMillan\'s Bar-B-Q', 'description': '9913 U.S. 59 N. 361-645-2336. Open Sun–Thur 10–6, Fri & Sat 10–7:30.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.3638934,32.6544208]}, 'properties': { 'title': 'Cousin\'s Bar-B-Q', 'description': '6262 McCart Ave., 817-346-2511. Open Mon–Sat 11–9. Beer & wine.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.2940665,32.6307226]}, 'properties': { 'title': 'Longoria\'s BBQ', 'description': '100 Christopher Dr., 817-568-9494. Open Mon–Fri 10:30–6, Sat 10:30–4.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-98.8700805,30.2485992]}, 'properties': { 'title': 'Cranky Frank\'s Barbeque Company', 'description': '1679 U.S. 87 S., 830-997-2353. Open Tue–Sun 11–3 or till meat runs out). Closed first Sun of the month.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-94.8284153,29.2902149]}, 'properties': { 'title': 'Leon\'s World\'s Finest In & Out Bar-B-Que', 'description': '5427 Broadway, 409-744-0070. Open Mon–Thur 9:30–7:30, Fri & Sat 9:30–8:30, Sun 11–7:30.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.6277961,32.9105591]}, 'properties': { 'title': 'Meshack\'s Bar-B-Que', 'description': '240 E. Avenue B, 214-227-4748. Open Tue 10:30–5, Wed–Sat 10:30–7.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.9374621,30.1831962]}, 'properties': { 'title': 'City Meat Market', 'description': '101 W. Austin (U.S. 290), 979-542-2740. Open Mon–Fri 7:30–-5:30, Sat 7:30–4.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.074163,32.941881]}, 'properties': { 'title': 'Bartley\'s Bar-B-Q', 'description': '413 E. Northwest Hwy., 817-481-3212. Open Tue–Thur 10:30–8, Fri & Sat 10:30–9.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-94.7842265,32.1614979]}, 'properties': { 'title': 'Bob\'s Bar-B-Que', 'description': '1205 Pope, 903-657-8301. Open Tue–Sat 10–7.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-95.429067,29.8203803]}, 'properties': { 'title': 'Gatlin\'s BBQ & Gatlin\'s BBQ & Catering', 'description': '1221 W. 19th, 713-869-4227. Open Tue–Sat 11–7 or till meat runs out.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-95.5454708,29.8476835]}, 'properties': { 'title': 'Virgie\'s Bar-B-Que', 'description': '5535 N. Gessner, 713-466-6525. Open Tue 11–2, Wed–Fri 11–6:30, Sat 11–5:30.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-94.0008578,30.9350928]}, 'properties': { 'title': 'Billy\'s Old Fashion BBQ', 'description': '1601 N. Main, 409-384-8384. Open Mon–Sat 11–6ish. Cash and check only.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-94.3453334,32.7575091]}, 'properties': { 'title': 'Joseph\'s Riverport Barbecue', 'description': '201 N. Polk, 903-665-2341. Open Tue–Sat 11–7, Sun 11–2.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-99.1435932,30.053176]}, 'properties': { 'title': 'Buzzie\'s Bar-B-Q', 'description': '213 Schreiner, 830-257-4540. Open Tue–Sat 11–8, Sun 11–3. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-94.986067,30.707867]}, 'properties': { 'title': 'Hitch-N-Post BBQ', 'description': '1880 FM 350 S., 936-967-0161. Open Tue–Wed 10:30–3, Thur–Sat 10:30–6:30.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-98.6821885,30.7592421]}, 'properties': { 'title': 'Cooper\'s Old Time Pit Bar-B-Que', 'description': '604 W. Young (Texas Hwy. 29), 325-247-5713. Open Sun–Thur 10:30 –8, Fri & Sat 10:30–9.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.672921,29.885886]}, 'properties': { 'title': 'Black\'s Barbecue', 'description': '215 N. Main, 512-398-2712. Open Sun–Thur 10–8, Fri & Sat 10–8:30. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.6718437,29.8899016]}, 'properties': { 'title': 'Kreuz Market', 'description': '619 N. Colorado (U.S. 183), 512-398-2361. Open Mon–Sat 10:30–8. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-98.7682807,29.6815048]}, 'properties': { 'title': 'City Market', 'description': '633 E. Davis, 830-875-9019. Open Mon–Sat 7–6. Cash only. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.8964839,31.292441]}, 'properties': { 'title': 'Whup\'s Boomerang Bar-B-Que', 'description': '1203 Bennett, 254-883-5770. Open Thur–Sat 10–8. Cash and checks only.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.6155998,33.2111947]}, 'properties': { 'title': 'Hutchins BBQ', 'description': '1301 N. Tennessee, 972-548-2629. Open Sun–Thur 11–9, Fri & Sat 11–9:30.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.5128365,31.6347556]}, 'properties': { 'title': 'Kirby\'s Barbeque', 'description': '4592 Texas Hwy. 14 N., 254-562-5076. Open Wed–Fri 10–6, Sat 10–3.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-98.0754624,32.9196906]}, 'properties': { 'title': 'Hashknife on the Chisholm', 'description': '8131 N. U.S. 281, 940-325-5150. Open Wed & Thur 11–8, Fri & Sat 11–9. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-99.1129775,28.8975802]}, 'properties': { 'title': 'Cowpoke\'s', 'description': '1855 W. Comal, 830-334-8000. Open Sun–Thur 8:30–8:30, Fri & Sat 8:30–9. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-103.489167,31.4152923]}, 'properties': { 'title': 'Pody\'s BBQ', 'description': '1330 S. Cedar, 432-448-4635. Open Tue–Sat 11–9.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.0615423,28.0246062]}, 'properties': { 'title': 'Hatfield\'s BBQ & Blackjacks Beer Garden', 'description': '209 E. Cornwall, 361-729-2337. Open Tue–Sat 11–midnight, Sun noon–midnight. Beer.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-98.4791802,29.4414508]}, 'properties': { 'title': 'The Granary \'Cue and Brew', 'description': '602 Avenue A, 210-228-0124. Open Tue–Sat 11–2 or till meat runs out. Beer & wine.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-98.498219,29.556462]}, 'properties': { 'title': 'Two Bros. BBQ Market', 'description': '12656 West Ave., 210-496-0222. Open Mon–Sat 10:30–8:30, Sun 11–7. Beer & wine.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.9471827,29.8634566]}, 'properties': { 'title': 'Hays Co. Bar-B-Que and Catering', 'description': '2601 Hunter Rd., 512-392-6000. Open Mon–Sat 11–8.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-97.1633117,30.0108597]}, 'properties': { 'title': 'Zimmerhanzel\'s BBQ', 'description': '307 Royston, 512-237-4244. Open Mon–Fri 8:30–5, Sat 8:30 till meat runs out. Cash or check only.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-98.1585341,30.4615916]}, 'properties': { 'title': 'Opie\'s Barbecue', 'description': '9504 E. Texas Hwy. 71, 830-693-8660. Open Mon & Tues 11–4, Wed & Thur 11–7, Fri & Sat 11–8, Sun 11–7.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-95.4199336,30.0806888]}, 'properties': { 'title': 'Corkscrew BBQ', 'description': '24930 Budde Rd., 832-592-1184. Open Tues–Sat 11 till meat runs out.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-95.2940262,32.3440738]}, 'properties': { 'title': 'Stanley\'s Famous Pit Barbecue', 'description': '525 S. Beckham Ave., 903-593-0311. Breakfast Mon–Fri 7–10; lunch and dinner Mon–Sat 11–9. Full bar.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-96.9963255,28.7941659]}, 'properties': { 'title': 'Mumphord\'s Place BBQ', 'description': '1202 E. Juan Linn, 361-485-1112. Open Tue–Thur 11–7, Fri 11–8, Sat 11–6.'}},
    {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [-100.3975242,32.4478033]}, 'properties': { 'title': 'Big Boy\'s Bar-B-Que', 'description': '2117 Lamar, 325-235-2700. Open Wed–Sat 11–8. Beer & wine.'}}
  ]
};

for (var i = 0; i < bbqJoints.features.length; i++) {
  bbqJoints.features[i].properties['marker-color'] = '#f86767';
  bbqJoints.features[i].properties['marker-symbol'] = 'slaughterhouse';
};

var bbqJointsLayer = L.mapbox.featureLayer(bbqJoints)
    .addTo(map);

var geocoderControl = L.mapbox.geocoderControl('mapbox.places', { autocomplete: true });
geocoderControl.addTo(map);

geocoderControl.on('select', function(res) {

  map.eachLayer(function (layer) {
    console.log(layer);
  });

  var marker = res.feature;
  marker.properties['marker-symbol'] = 'star';
  marker.properties['marker-color'] = '#3bb2d0';
  calculate(marker);

});

function calculate(marker) {

    var nearest = turf.nearest(marker, bbqJoints);
    nearest.properties['marker-color'] = '#fbb03b';

    var nearestFeatures = {
        'type': 'featureCollection',
        'features': [marker, nearest]
    };
    
    var nearestLayer = L.mapbox.featureLayer(nearestFeatures).addTo(map);
    console.log(nearestLayer);
    map.fitBounds(nearestLayer.getBounds());

};
