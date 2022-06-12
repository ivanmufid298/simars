<template>
  <div>
    <Header />
    <div class="container-fluid page">
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">PENDAFTARAN</h5>
             <div class="card-text">
                <form class="mt-4">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4" class="label">Email</label>
                      <input type="number" class="form-control" id="nik">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4" class="label">Password</label>
                      <input type="password" class="form-control" id="password">
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
</style>
