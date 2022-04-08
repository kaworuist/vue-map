<template>
  <div class="map-container">
    <div id="map-container"></div>
    <MapTools @marker="addMarker" @polygon="addPolygon" @wmap="wmap" @smap="smap"></MapTools>
  </div>
</template>

<script>
import MapTools from "./MapTools.vue";
import "leaflet/dist/leaflet.css"
import $L from "leaflet";
export default {
  name: "mapView",
  components: {MapTools},
  data() {
    return {
      map: null,
      NormalUrl: "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      Satellite: {
            Map: '//webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            Annotion: '//webst02.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
      },
    };
  },
  async mounted() {
    let normal = await $L.tileLayer(this.NormalUrl, {maxZoom: 18, minZoom: 5});
    let satellite1 = await $L.tileLayer(this.Satellite.Map, {maxZoom: 18, minZoom: 5});
    let satellite2 = await $L.tileLayer(this.Satellite.Annotion, {maxZoom: 18, minZoom: 5});
    let satellite = $L.layerGroup([satellite1, satellite2])
    this.map = $L.map("map-container", {
      layers: [normal]
    })
    this.baseMaps = {
      normal,
      satellite
    }
    $L.control.layers(this.baseMaps).addTo(this.map)
    this.map.setView([31.4909547345, 120.3123694224], 12);
  },
  methods: {
    zoomIn() {
      this.map.zoomIn();
    },
    zoomOut() {
      console.log(this.map)
      this.map.zoomOut();
    },
    addMarker() {
      console.log(this.map)
    },
    addPolyline() {},
    addPolygon() {},
    wmap() {
    },
    smap() {}
  }
};
</script>
<style scoped>
.map-container {
  position: absolute;
  left: 20%;
  top: 0;
  width: 80%;
  height: 100%;
}
#map-container {
  width: 100%;
  height: 100%;
}
</style>
