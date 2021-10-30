<template>
    <div>
        <h1 class="title"> {{title}}</h1>

        <div class="container mb-4">
            <div class="row"> 
                <div class="col-6 mb-4"  >
                    <div class="card" @click="choose1 = !choose1" :class="{active : choose1}">
                        <span v-show="choose1" class="card__check"><img src="../assets/check.png" alt=""></span>
                        <div class="card__pic">
                        <img src="../assets/1.png" alt="1">
                        </div>
                        <div class="card__info">
                            <h2 class="card__title">Classic fit plaid oxford shirt</h2>
                            <div class="card__sale">
                                <p class="card__new-price">$200,00</p>
                                <p class="card__old-price">$250,00</p>
                            </div>
                            <span class="card__id">
                                id5676
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4"  >
                    <div class="card" @click="choose2 = !choose2" :class="{active : choose2}">
                        <span v-show="choose2" class="card__check"><img src="../assets/check.png" alt=""></span>
                        <div class="card__pic">
                        <img src="../assets/2.png" alt="2">
                        </div>
                        <div class="card__info">
                            <h2 class="card__title">Classic fit plaid oxford shirt</h2>
                            <div class="card__sale">
                                <p class="card__new-price">$200,00</p>
                                <p class="card__old-price">$250,00</p>
                            </div>
                            <span class="card__id">
                                id5676
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4"  >
                    <div class="card" @click="choose3 = !choose3" :class="{active : choose3}">
                        <span v-show="choose3" class="card__check"><img src="../assets/check.png" alt=""></span>
                        <div class="card__pic">
                        <img src="../assets/3.png" alt="3">
                        </div>
                        <div class="card__info">
                            <h2 class="card__title">Classic fit plaid oxford shirt</h2>
                            <div class="card__sale">
                                <p class="card__new-price">$200,00</p>
                                <p class="card__old-price">$250,00</p>
                            </div>
                            <span class="card__id">
                                id5676
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4"  >
                    <div class="card" @click="choose4 = !choose4" :class="{active : choose4}">
                        <span v-show="choose4" class="card__check"><img src="../assets/check.png" alt=""></span>
                        <div class="card__pic">
                        <img src="../assets/3.png" alt="3">
                        </div>
                        <div class="card__info">
                            <h2 class="card__title">Classic fit plaid oxford shirt</h2>
                            <div class="card__sale">
                                <p class="card__new-price">$200,00</p>
                                <p class="card__old-price">$250,00</p>
                            </div>
                            <span class="card__id">
                                id5676
                            </span>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
 
        <div class="buttons">
            <router-link to="/" class="btns">Back</router-link>
            <router-link to="/image" class="btns">Continue</router-link>
        </div>
    </div>
</template>

<script>
 
export default {
    data() {
        return {
            title: 'Select items you want to return',
            choose1: false, 
            choose2: false, 
            choose3: false, 
            choose4: false, 
        } 
    }
}
</script>


<style scoped>
    .title {  
        color: #473e9e;
        font-size: 48px  ;
        text-align: center;
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
    .card {
        display: flex;
        flex-direction: row;
        align-items: center; 
        border-radius: 4px;
        height: 100%;
        padding: 30px;
        color: #473e9e;
        position: relative;
        border:  3px solid #fff;
        background: #fff;
        cursor: pointer;
    }

    .card.active {
        border:  3px solid #473e9e;
    }
    .card__check {
        width: 35px;
        height: 35px;
        border-radius: 5px;
        background: #473e9e;  
        position: absolute;
        top: -3px;
        left: -3px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .card__pic {
        width: 150px;
        margin-right: 30px; 
        height: 150px;
    }

    .card__pic img {
        width: 100%; 
        height: 100%;
        object-fit: contain;
        pointer-events: none;
    }

    .card__title {
        font-weight: 400;
        font-size: 25px;
        margin-bottom: 25px;
    }
    .card__new-price {
        font-weight: 700;
        margin-bottom: 5px;
        line-height: 20px;
        font-size: 20px;
    }
    .card__old-price {  
        line-height: 20px;
        font-size: 16px;
        text-decoration: line-through;
        opacity: 0.8;
    }
    .card__sale {
        margin-bottom: 25px;
    }
    .card__id {
        padding:5px 10px;
        background: #f2f1ff;
        border-radius: 2px;
        text-transform: uppercase;
    }
</style>