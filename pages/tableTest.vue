<template>
<div class="table-responsive-sm">
  <vue-good-table
    :columns="columns"
    :rows="rows" >

    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'action'">
        <button class="btn btn-primary" @click="editRow(props.row.id)">Edit</button>
        <button class="btn btn-danger" @click="deleteRow(props.row.id)">Delete</button>
      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>

  </vue-good-table>

  <span>{{ nama }}</span>
</div>
</template>

<script>
export default {
  name: 'my-component',
data() {
  	return {
      columns: [
        {
          label: "Status",
          field: "status",
        },
        {
          label: 'Antrian',
          field: 'id',
          sortable: true,
        },
        {
          label: 'Nama Lengkap',
          field: 'nama',
          type: 'number',
          sortable: true,
        },
        {
          label: "Jadwal",
          field: "jadwal",
          type: "date",
          dateInputFormat: 'dd-MM-yyyy',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Action',
          field: 'action'
        },
      ],
      rows: [
        { status: "", id: 1, nama: "A", jadwal: '19-07-2022' },
        { status: "", id: 2, nama: "A", jadwal: '19-07-2022' },
        { status: "", id: 3, nama: "A", jadwal: '19-07-2022' },
        { status: "", id: 5, nama: "A", jadwal: '19-07-2022' },
      ],
      nama: ''
    };
  },
  methods: {
  	editRow(id) {
    	this.showAlert(id, 'EDIT')
    },
    deleteRow(id) {
    	this.showAlert(id, 'DELETE')
    },
    showAlert(id, type) {
    	this.nama = `You clicked ${type} on row ID ${id}`
    }
  }
};
</script>
