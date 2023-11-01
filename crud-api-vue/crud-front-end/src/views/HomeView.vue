

<template>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    <div class="">
      <div class="">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">first name</th>
              <th scope="col">last name</th>
              <th scope="col">email</th>
              <th scope="col">password</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td scope="row">{{ item.id }}</td>
              <td scope="row">{{ item.fname }}</td>
              <td scope="row">{{ item.lname }}</td>
              <td scope="row">{{ item.email }}</td>
              <td scope="row">{{ item.password }}</td>
              <td scope="row">
                <RouterLink to="update" class="btn btn-primary">update</RouterLink>  
                <RouterLink to="delete" class="btn btn-danger">delete</RouterLink>  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</body>
</html>
</template>

<script >
  import axios from 'axios';
  
    export default{
      data(){
        return{
          items:[],
        };
      },
      created(){
        this.fetchData();
      },

      methods:{
        fetchData(){
            axios.get('http://127.0.0.1:8000/api/getUsers')
          .then(response=>{
            this.items=response.data.data;
          })
          .catch(error=>{
            console.error(error);
          });
        },
        
      },
    };
</script>
