import "leaflet/dist/leaflet.css"
import $L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = $L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
$L.Marker.prototype.options.icon = DefaultIcon;
const createMap = (divId, options) => {
    let map = $L.map(divId, options);
    return map;
};
const createTileLayer = (url, options) => {
    let tileLayer = $L.tileLayer(url, options);
    return tileLayer;
};
const createIcon = options => {
  return $L.icon(options);
};
const controlLayer = (baselayer, map) => {
  console.log(baselayer)
  $L.control.layers(baselayer).addTo(map)
}
  /**
   * 通过 [x, y] 坐标添加 Maker
   *
   * @param {Object} map
   * @param {Object} latLng
   * @param {Object} options
   * 
   */
  const createMakerByXY = (map, coordinate, options = {}) => {
    let marker = $L.marker($L.latLng(coordinate[0], coordinate[1]), options);
    marker.addTo(map);
    console.log(coordinate)
    return marker;
  };
// export default { createMap, createTileLayer, createIcon, createMakerByXY, controlLayer, };
export default $L;