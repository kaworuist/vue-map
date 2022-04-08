<template>
    <div id="resourceList">
        <ul id="deviceList">
            <li v-for="dev in devices" :key="dev.device_sn">{{dev.device_sn}}</li>
        </ul>
        <ul id="memberList">
            <li v-for="member in members" :key="member.id">{{member.name}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "resources",
        data() {
            return {
                devices: [
                    {type: 'hel', device_sn: 1},
                    {type: 'hel', device_sn: 2},
                    {type: 'hel', device_sn: 3},
                    {type: 'hel', device_sn: 4}
                ],
                members: [
                    {name: 'john', id: 1},
                    {name: 'jack', id: 2},
                    {name: 'bob', id: 3},
                    {name: 'amy', id: 4},
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
#resourceList {
    height: 100%;
    width: 20%;
    background-color: goldenrod;
}
</style>