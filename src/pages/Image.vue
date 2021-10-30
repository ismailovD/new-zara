<template>
    <div>
        <h1 class="title"> {{title}}</h1>

        <div class="container mb-4"> 
             <div class="row justify-content-center">
                 <div class="col-5 ">
                     <label class="photo__card">
                         <img class="photo__img" src="../assets/photo-icon.png" alt="icon">
                         <input type="file" class="photo__inp">
                         <p class="photo__text">Upload item picture</p>
                     </label>
                 </div>
             </div>
        </div>
 
        <div class="buttons">
            <router-link to="/items" class="btns">Back</router-link>
            <router-link to="/more" class="btns">Continue</router-link>
        </div>
    </div>
</template>

<script>
 
export default {
    data() {
        return {
            title: 'Upload a product image with defect highlighting' 
        } 
    }
}
</script>


<style scoped>
    .title {  
        color: #473e9e;
        font-size: 48px  ;
        text-align: center; 
        width: 50%;
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .buttons {
        display: flex;
        justify-content: center;
    }

    
    .btns {
        min-width: 170px;
        border: 2px solid #918bc5;
        text-decoration: none;
        text-transform: uppercase;
        color: #918bc5;
        text-align: center;
        border-radius: 5px;
        line-height: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-weight: 600;
    }
    .btns:first-child {
        margin-right: 30px;
    }

    .btns:hover {
        background: #ee2654;
        border:  2px solid #ee2654;
        color: #fff;
    } 

    .photo__card {
        padding-top: 45px;
        padding-bottom: 65px;
        border: 1px dashed #473e9e;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
    }

    .photo__img {
        width: 40%;
    }

    .photo__inp{
        display: none;
    }

    .photo__text {
        color: #473e9e;
        cursor: pointer;
    }
     
</style>