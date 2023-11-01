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
        <h1 class="display-5">Register user</h1>
        <form  class="pt-2" @submit.prevent="postData">
            <div class="">
                <label for="firstName" class="label">first name:</label>
                <input type="text" placeholder="enter your first name"  class="form-control" v-model="formData.fname">
            </div>
            <div class="">
                <label for="lastname" class="label">last name:</label>
                <input type="text" placeholder="enter your last name" class="form-control" v-model="formData.lname">
            </div>
            <div class="">
                <label for="lastname" class="label">email: </label>
                <input type="email" placeholder="enter your email"  class="form-control" v-model="formData.email">
            </div>
            <div class="">
                <label for="lastname" class="label">password:</label>
                <input type="password" placeholder="create new password" class="form-control" v-model="formData.password">
            </div>
            <div class="pt-4 submit">
                <!-- <input type="submit" value="submit" class="btn btn-primary btns"> -->
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</body>
</html>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return {
            formData:{
                fname:'',
                lname:'',
                email:'',
                password:'',
            },
        };
    },
    methods:{
        postData(){
            const apiUrl='http://127.0.0.1:8000/api/register';

            axios.post(apiUrl,this.formData)
            .then(response=>{
                console.log('data send successfully',response.data);
            })
            .catch(error=>{
                console.error('Error sending dta',error);
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
    display: flex;
    justify-content: center;
}

</style> 

