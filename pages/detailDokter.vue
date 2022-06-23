<template>
  <div class="page">
    <Header />
    <div class="container mb-4">
      <div class="row">
        <div>
          <a class="link" href="adminHome">Home</a> <strong>></strong>
          <a class="link" href="" style="font-weight: bold"><strong>Data Dokter</strong></a>
        </div>
      </div>
    </div>
    <div class="container-fluid page">
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h2>
              <strong>
                Detail Data Dokter
              </strong>
            </h2>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <div class="card content text-center">
                    <img src="~/assets/img/Ava.png" alt="" class="card-img-top">
                    <div class="card-body">
                      <div class="card-title">
                        <h4>Dr. Keshya Valerie Sky</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <form>
                    <fieldset disabled>
                      <div class="form-group">
                        <label class="mt-3" for="disabledTextInput">Nama</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Dr. Keshya Valerie Sky">
                        <label class="mt-3" for="disabledTextInput">Nama</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Dr. Keshya Valerie Sky">
                        <label class="mt-3" for="disabledTextInput">Nama</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Dr. Keshya Valerie Sky">
                        <label class="mt-3" for="disabledTextInput">Nama</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Dr. Keshya Valerie Sky">
                        <label class="mt-3" for="disabledTextInput">Nama</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Dr. Keshya Valerie Sky">
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page{
  background-color: whitesmoke;
  height: 100vh;
}
h2{
  padding-left: 65px;
}
.card-img-top{
  width: 70%;
  margin: auto;
}
.text{
  color: #0957DE;
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
.content{
  margin-left: 50px;
  margin-top: 50px;
  width: 400px;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 3px 3px 3px rgba(124, 124, 124, 0.3);
}
.card-body{
  padding: 50px;
}
.card-title{
  font-size: 2em;
  font-weight: bold;
}
.btn{
  width: 90%;
  background-color: #0957DE;
  border-radius: 7px;
  margin: auto;
  color: white;
  font-size: 1em;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 10px;
}
.btn:hover {
  background-color: white;
  color: #0957DE;
  border-color: #0957DE;
}
.btn1{
  width: 40%;
  background-color: rgb(165, 165, 165);
  float: right;
}
.btn1:hover{
  background-color: white;
  border-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}
</style>
