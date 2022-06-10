<template>
  <div class="page">
    <div class="container text-center">
      <br><br><br>
      <h1 class="title">
        <strong>S I M A R S</strong>
      </h1>
    </div>
    <div class="container">
      <div class="card">
        <h4 class="form-title text-center">
          <strong>
            LOGIN
          </strong>
        </h4>
      <form class="form">
      <div class="form-group">
        <label for="" style="font-weight: bold">ID</label>
        <input type="text" class="form-control" id="id" placeholder="Masukkan ID Kamu">
      </div>
      <div class="form-group">
        <label for="" style="font-weight: bold">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Masukkan Password">
      </div>
      <button type="submit" class="btn btn-primary btn-block mt-4"><strong>Masuk</strong></button>
    </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

}
</script>

<style>
.page{
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("~/assets/img/bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    background-color: #0957DE;
}
.title{
  color: white;
  font-weight: bold;
  font-size: 5vw;
}
.card{
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
  padding: 20px;
  margin-top: 100px;
}
.form-title{
  color: #0957DE;
}
.btn{
  background-color: #0957DE;
  color: white;
}
.form{
  margin-top: 35px;
}
</style>
