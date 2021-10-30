<template>
    <div>
        <h1 class="title"> {{title}}</h1>

        <div class="container mb-5"> 
             <div class="row">
                 <div class="col-3" >
                     <label class="photo__card card__load">
                         <img class="photo__img photo__load" src="../assets/wear.png" alt="icon">  
                     </label>
                 </div>
                 <div class="col-3">
                     <label class="photo__card loading__card"> 
                         <p class="text__load">Uploading your files</p>
                         <div class="line__progress">
                             <span class="load__progress"></span>
                         </div>
                     </label>
                 </div>
                 <div class="col-3">
                     <label class="photo__card">
                         <img class="photo__img" src="../assets/photo-icon.png" alt="icon">
                         <input type="file" class="photo__inp"> 
                     </label>
                 </div>
                 <div class="col-3">
                     <label class="photo__card add__more"> 
                         <span class="photo__plus">+</span>
                         <p class="photo__text">Add more</p>
                     </label>
                 </div>
             </div>
        </div>
 
        <div class="buttons">
            <router-link to="/image" class="btns">Back</router-link>
            <router-link to="/" class="btns">Continue</router-link>
        </div>
    </div>
</template>

<script>
 
export default {
    data() {
        return {
            title: 'Upload a product image with defect highlighting',
            images: ['wear.png']
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
        margin-bottom: 70px;
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
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 100%;
        cursor: pointer;
    }

    .photo__img {
        width: 30%;
    }

    .card__load {
        padding: 0;
        border: none;
        cursor: default;
    }
    .photo__load {
        width: 100%;
    }
    .photo__inp{
        display: none;
    }
    .loading__card {
        cursor: wait;
    }
    .photo__text {
        color: #473e9e;
        cursor: pointer;
    }
    
    .text__load {
        color: #473e9e;
        font-weight: 600;
    }

    .line__progress{
        background: #edecff;
        height: 5px;
        width: 50%;
        position: relative;
        border-radius: 3px;
    }
    .load__progress{
        background: #473e9e;
        height: 5px; 
        position: absolute;
        top: 0;
        left: 0;
        width: 40%;
        border-radius: 3px;
    }

    .add__more{
         border:2px solid #918bc5;
         background: #f2f1ff;
    }

    .add__more .photo__text{
        color: #918bc5;
        font-size: 22px;
    }

    .photo__plus { 
        font-size: 38px;
        color: #918bc5;
    }
</style>