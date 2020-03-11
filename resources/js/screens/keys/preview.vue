<script type="text/ecmascript-6">
    import axios from 'axios';

    export default {
        data() {
            return {
                entry: null,
            };
        }
    }
</script>

<template>
    <preview-screen title="Keys Details" resource="key" :id="$route.params.key" entry-point="true">
        <template slot="table-parameters" slot-scope="slotProps">
        <tr>
            <td class="table-fit font-weight-bold">Key</td>
            <td>
                {{slotProps.entry.key}}
            </td>
        </tr>

        <tr>
            <td class="table-fit font-weight-bold">Type</td>
            <td>
                {{slotProps.entry.type}}
            </td>
        </tr>

        <tr>
            <td class="table-fit font-weight-bold">Expires</td>
            <td>
                {{slotProps.entry.expire}}
            </td>
        </tr>

        </template>

        <div slot="after-attributes-card" slot-scope="slotProps">
            <div class="card mt-5">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link active" href="javascript:void(0);" >Value</a>
                    </li>
                </ul>
                <div class="code-bg p-4 mb-0 text-white">
                    <vue-json-pretty :data="slotProps.entry.value"></vue-json-pretty>
                </div>
            </div>
        </div>
    </preview-screen>
</template>
