<template>
  <div>
    <img class="images" src="./assets/header.png" alt="header"> 
    <main class="main"> 
      <div class="container">  
        <router-view></router-view>
      </div>
      
    </main>
    <img class="images" src="./assets/footer.png" alt="footer"> 
    
  </div>
  
</template>

<script>
export default {};
</script>

<style scoped>

.images {
      width: 100%;
  }

  .main {
    background: #f2f1ff;
    padding-top: 100px;
    padding-bottom: 120px;
  }
  .title {  
        color: #473e9e;
        font-size: 48px !important;
  }
</style>
