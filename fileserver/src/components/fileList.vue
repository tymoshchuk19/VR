<template>
  <v-card
    class="mx-auto mt-5 pa-5"
    max-width="800"
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
          <v-row>
            <v-col cols="8">
              <v-list-item-title 
                v-text="item.split('Z').length>1? item.split('Z')[1]: item">\
              </v-list-item-title>
            </v-col>
            <v-col>
              <v-btn rounded color="primary" @click="getFile(item)">
                <v-icon>mdi-cloud-download</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn rounded color="red" @click="removeFile(item)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
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
      removeFile(filename){
        axios.delete('http://localhost:1919/file/' + filename, {
          headers: {
            Authorization: this.$store.state.token 
          }
        })
          .then(() => this.getFiles())
          .catch(error => console.log('FAILURE!!!\n' + error));
      },
      addFile(){
        let data = new FormData();
        data.append('newfile', this.file, this.file.fileName);
        axios.post('http://localhost:1919/file', data, {
          headers: {
            'Content-Type': `multipart/form-data;`,
            Authorization: this.$store.state.token
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
        axios.get('http://localhost:1919/files', {
          headers: {
            Authorization: this.$store.state.token 
          }
        })
          .then( data => this.items = data.data);
      }
    },
    created() {
      this.getFiles();
    }
  }
</script>