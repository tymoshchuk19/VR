<template>
  <v-card
    class="mx-auto mt-5 pa-5"
    max-width="600"
    tile
  >
    <v-file-input 
      outlined 
      dense 
      v-model="file"
      ref="myfile" 
      label="File input" 
    >
    </v-file-input>
    <v-row justify="end" class="mr-5">
      <v-btn color="primary" rounded @click="addFile()"> 
        <v-icon>
          mdi-cloud-upload
        </v-icon>
      </v-btn>
    </v-row>
    <v-list shaped>
      <v-divider></v-divider>
      <v-subheader>FILES LIST</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="getFile(item)">
            <v-list-item-title 
              v-text="item.split('Z').length>1? item.split('Z')[1]: item">\
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import axios from 'axios';
import FormData from 'form-data'
  export default {
    data: () => ({
        items: null,
        file: null
    }),
    methods:{
      getFile(filename){
        var url = 'http://localhost:1919/uploads/' + filename
        window.open(url, '_blank');
      },
      addFile(){
        let data = new FormData();
        data.append('newfile', this.file, this.file.fileName);
        axios.post('http://localhost:1919/file', data, {
          headers: {
            'Content-Type': `multipart/form-data;`,
          }
        })
          .then((response) => {
            console.log(response.data);
            this.getFiles();
          }).catch((error) => {
            console.log('FAILURE!!!\n' + error);
          });
      },
      getFiles(){
        axios.get('http://localhost:1919/files')
            .then( data => this.items = data.data);
      }
    },
    created() {
      this.getFiles();
    }
  }
</script>