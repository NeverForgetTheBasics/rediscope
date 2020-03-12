<script type="text/ecmascript-6">
    import StylesMixin from './../../mixins/entriesStyles';

    export default {
        mixins: [
            StylesMixin,
        ],

        data() {
            return {
                isCheckAll: false,
                isHidden: false,
                keysdata: [],
                keys: [],
                hiddenkeys: '',
            }
        },

        methods: {
            checkAll: function(){
                console.log(this.hiddenkeys)
                this.isCheckAll = !this.isCheckAll;
                this.keys = [];
                if(this.isCheckAll){ // Check all
                    for (var key in this.keysdata) {
                        this.keys.push(this.keysdata[key]);
                    }
                }
            },
            updateCheckall: function(){
                if(this.keys.length == this.keysdata.length){
                    this.isCheckAll = true;
                }else{
                    this.isCheckAll = false;
                }
            },
            deleteKeys: function(){
                var r = confirm("Are you sure you want to delete this record?");
                if (r == true) {
                  var _this = this;
                  axios.delete('/' + Rediscope.path + '/api/keys?keys[]=' + item.key).then(function (response) {
                  _this.getVueItems();
                  _this.hasError = true,
                  _this.hasDeleted = false

                  });
                }
            }
          }
    }
</script>

<template>
    <index-screen title="Keys" resource="scan">
        <tr slot="table-header">
            <th><input type='checkbox' @click='checkAll()' v-model='isCheckAll'></th>
            <th scope="col">Type</th>
            <th scope="col">Key</th>
            <th scope="col">Expires</th>
            <th scope="col">Last Access</th>
            <th scope="col"></th>
        </tr>

        <template slot="row" slot-scope="slotProps">
            <td class="table-fit pr-0">
                <input type='checkbox' v-bind:value='truncate(slotProps.entry.key, 60)' v-model='keys' @change='updateCheckall()'>
            </td>
            <td class="table-fit pr-0">
                <span class="badge font-weight-light" :class="'badge-'+keyTypeClass(slotProps.entry.type)">
                    {{slotProps.entry.type}}
                </span>
            </td>

            <td :title="slotProps.entry.key">{{truncate(slotProps.entry.key, 60)}}</td>

            <td class="table-fit">
                <span v-if="slotProps.entry.ttl">{{slotProps.entry.ttl}}</span>
                <span v-else>-</span>
            </td>

            <td class="table-fit" :data-timeago="slotProps.entry.idletime">{{(slotProps.entry.idletime)}}</td>

            <td class="table-fit">
                <router-link :to="{name:'keys-preview', params:{key: slotProps.entry.key}}" class="control-action">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16">
                        <path d="M16.56 13.66a8 8 0 0 1-11.32 0L.3 8.7a1 1 0 0 1 0-1.42l4.95-4.95a8 8 0 0 1 11.32 0l4.95 4.95a1 1 0 0 1 0 1.42l-4.95 4.95-.01.01zm-9.9-1.42a6 6 0 0 0 8.48 0L19.38 8l-4.24-4.24a6 6 0 0 0-8.48 0L2.4 8l4.25 4.24h.01zM10.9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                    </svg>
                </router-link>
            </td>
        </template>
    </index-screen>
</template>
