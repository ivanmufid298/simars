<template>
  <div>
    <Header />
    <div class="container-fluid page">
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">PENDAFTARAN</h5>
             <div class="card-text">
                <form class="mt-5">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="nik" class="label">NIK</label>
                      <input type="number" class="form-control mb-2" id="nik" placeholder="Masukkan nomer NIK">
                      <small class="text">*NIK harus 16 digit</small> <br>

                      <label for="norek" class="label mt-4">No. Rekam Medis</label>
                      <input type="text" class="form-control mb-2" id="norek" placeholder="PS.123456789">

                      <label for="name" class="label mt-4">Nama Lengkap</label>
                      <input type="text" class="form-control mb-2" id="name" placeholder="Alterra">

                      <label for="no" class="label mt-4">No. HP</label>
                      <input type="number" class="form-control mb-2" id="no" placeholder="082213273168">

                      <label for="sex" class="label mt-4">Jenis Kelamin</label>
                        <select id="sex" class="form-control">
                          <option selected>-- PILIH JENIS KELAMIN --</option>
                          <option>Laki-laki</option>
                          <option>Perempuan</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="poli" class="label">Poli</label>
                        <select id="poli" class="form-control">
                          <option selected>-- PILIH POLI --</option>
                          <option>-- POLI UMUM --</option>
                          <option>-- POLI GIGI --</option>
                          <option>-- POLI ANAK --</option>
                          <option>-- POLI MATA --</option>
                          <option>-- POLI THT --</option>
                          <option>-- JANTUNG --</option>
                        </select>

                        <label for="dokter" class="label mt-4">Dokter</label>
                        <select id="dokter" class="form-control">
                          <option selected>-- Pilih Dokter --</option>
                          <option>dr.Keshya Valerie Sky (UMUM)</option>
                          <option>dr.rizky Sp.A(K) (JANTUNG)</option>
                          <option>dr.Amroni Sp.THT</option>
                          <option>dr.Valen Sp.A (ANAK)</option>
                          <option>dr.Baki Sp.M (MATA)</option>
                          <option>dr.Trisna Sp.KG (GIGI)</option>
                        </select>

                        <label for="dokter" class="label mt-4">Dokter</label>
                        <input type="text" class="form-control mb-2" id="name" placeholder="Alterra">
                        <span class="input-group-append">
                          <span class="input-group-text bg-white">
                            <i class="fa fa-calendar"></i>
                          </span>
                        </span>
                    </div>
                  </div>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page{
  max-width: 1500px;
}
.card{
  margin: auto;
  width: 1500px;
}
.card-body{
  padding: 50px;
}
.card-title{
  font-size: 2em;
  font-weight: bold;
}
/* .card-text{
  padding: 25px;
} */
.form-control{
  width: 90%;
  margin: auto;
}
.label{
  font-weight: bold;
  font-size: 1.3em;
  padding-left: 33px;
}
.text{
  padding-left: 33px;
  font-weight: 500;
  font-size: 1em;
}
</style>
