<template>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body class="bodyCls">
        
        <div class="card setup">
            <h1 class="display-5">Update user {{itemId}}</h1>
            <form  class="pt-2" @submit.prevent="postData" >
                <div class="">
                    <label for="firstName" class="label">first name:</label>
                    <input type="text" placeholder="enter your first name"  class="form-control" v-model="fetchedData.fname">
                </div>
                <div class="">
                    <label for="lastname" class="label">last name:</label>
                    <input type="text" placeholder="enter your last name" class="form-control" v-model="fetchedData.lname">
                </div>
                <div class="">
                    <label for="lastname" class="label">email: </label>
                    <input type="email" placeholder="enter your email"  class="form-control" v-model="fetchedData.email">
                </div>
                <div class="">
                    <label for="lastname" class="label">password:</label>
                    <input type="password" placeholder="create new password" class="form-control" v-model="fetchedData.password">
                </div>
                <div class="pt-4 submit">
                    <!-- <input type="submit" value="submit" class="btn btn-primary btns"> -->
                    <button type="submit" @click="updateUserData">Submit</button>
                </div>
            </form>
        </div>
        <router-link to="/" class="btn btn-secondary">back</router-link>
    
    </body>
    </html>
    </template>
    
    <script>
        import axios from 'axios';
    
        export default{
            data(){
                return {
                    fetchedData:{
                        fname:'',
                        lname:'',
                        email:'',
                        password:'',
                    },
                };
            },

            computed:{
                itemId(){
                    return this.$route.params.id;
                },
            },

            mounted(){
                this.fetchData();
            },
            methods:{
                fetchData(){
                    axios.get(`http://127.0.0.1:8000/api/update/${this.itemId}`)
                    .then(response=>{
                        this.fetchedData=response.data.data;
                    })
                    .catch(error=>{
                        console.error('error fetching data:', error);
                    });
                },
                updateUserData(){
                    axios.post(`http://127.0.0.1:8000/api/updateUser/${this.itemId}`,this.fetchedData)
                    .then(response=>{
                        console.log('data saved successfully',response.data)
                    })
                    .catch(error=>{
                        console.error('error sending data', error)
                    });
                },
            },

            

        };
    </script>
    
    <style scoped>
    .card.setup{
        width: 300px;
        padding: 25px;
        display: flex;
        align-items: center;
    }
    .label{
        font-weight: bold;
    }
    .submit{
        justify-content: flex-end;
        display: flex;
    }
    .bodyCls{
       justify-content: center;
    }
    
    </style> 
    
    