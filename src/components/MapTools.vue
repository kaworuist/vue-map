<template>
  <div class="map-tools">
    <ul>
      <li @click="$emit('marker')">Maker</li>
      <li @click="$emit('wmap')">Wmap</li>
      <li @click="$emit('smap')">Smap</li>
      <li @click="$emit('polygon')">Polygon</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mapTools",
};
</script>
<style lang="less" scoped>
.map-tools {
  position: absolute;
  right: 15px;
  bottom: 30px;
  z-index: 999;

  height: 36px;
  box-shadow: 0px 0px 50px 2px rgba(0, 0, 0, 0.35);
  background-color: #fff;
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 0 15px;
      height: 36px;
      font-size: 13px;
      line-height: 36px;
      cursor: pointer;
    }

    li:hover {
      background-color: rgb(212, 224, 246);
    }
  }
}
</style>