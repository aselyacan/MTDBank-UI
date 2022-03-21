pipeline{

    agent any
    stages{
        stage("run frontend with reactJS"){
           steps{
             echo 'executing yarn'
             nodejs('Node-17.7.2'){
             sh 'yarn install' 
         }
      }
     
    }
  
  }
  
 
}
