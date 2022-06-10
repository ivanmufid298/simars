<template>
  <div class="page">
    <Header />
    <h1 class="title text-center">Selamat Datang Admin</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
        <div class="card text-center">
          <div class="card-body">
            <div class="card-title">PENDAFTARAN PASIEN</div>
            <div class="card-img">
            <img src="~assets/img/pana.png" class="img-fluid" alt="">
            <p class="card-text mt-3">Hari ini, DD-MM-YYYY</p>
            <a href="#" class="btn btn-primary btn-block mb-4">+ PENDAFTARAN</a>
          </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <h1>test</h1>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style>
.title{
  font-size: 2.5vw;
  font-weight: bold;
  color: #0957DE;
  text-shadow: 1px 3px 3px rgba(124, 124, 124, 0.7);
}
.page{
    background-color: whitesmoke;
    height: 100vh;
}
.container-fluid{
  max-width: 1800px;
  margin-top: 50px;
}
.card-title{
  font-weight: bold;
  font-size: 1.5vw;
}
.card-text{
  font-weight: bold;
  font-size: 1vw;
}
.btn{
  background-color: #0957DE;
  margin: auto;
  width: 70%;
  height: auto;
  font-size: 1.2vw;
  font-weight: bold;
  padding: 17px;
  box-shadow: 1px 3px 3px rgba(124, 124, 124, 0.7);
}
</style>
