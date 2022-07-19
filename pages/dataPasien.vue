<template>
  <div class="page">
    <Header />
    <div class="container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Pasien</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid page">
      <div class="row">
        <div class="card">
          <div class="card-body">
            <div class="card-title mb-5">Data Poli Umum</div>
              <div class="table-responsive-sm">
                <vue-good-table
                  :columns="columns"
                  :rows="rows"
                  :pagination-options="{
                  enabled: true,
                  mode: 'pages'
                  }"
                  :search-options="{
                    enabled: true,
                    placeholder: 'Search Name'
                  }"
                  >

                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'status'">
                      <div class="text-center">
                        <h5 class="status">selesai</h5>
                      </div>
                    </span>
                    <span v-if="props.column.field == 'action'">
                      <div class="text-center">
                        <button class="btn btn-primary" @click="editRow(props.row.id)">Edit</button>
                        <button class="btn btn-danger" @click="deleteRow(props.row.id)">Delete</button>
                      </div>
                    </span>
                    <span v-else>
                      {{props.formattedRow[props.column.field]}}
                    </span>
                  </template>

                </vue-good-table>

                <span>{{ nama }}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
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
          type: "text",
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
        { status: "", id: 1, nama: "B", jadwal: '19-07-2022' },
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

<style>
.page{
  background-color: whitesmoke;
  height: 100vh;
}
.container a {
  text-decoration: none;
  color: grey;
}
.container a:hover{
  color: black;
}
.card{
  margin: auto;
  width: 1500px;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.5);
}
.card-body{
  padding: 50px;
}
.card-title{
  font-size: 2em;
  font-weight: bold;
}
.btn{
  width: 30%;
  border-radius: 7px;
  margin: auto;
  color: white;
  font-size: 1em;
  padding: 10px;
  margin-bottom: 5px;
}
.status{
  background-color: rgb(0, 202, 202);
  color: white;
  padding: 5px;
  border-radius: 10px;
}
</style>
