pipeline{

agen any
  
  stages{
  
    stage("run frontend with reactJS"){
    
    echo 'executing yarn'
      nodejs('NodeJS-17.7.2')
      sh 'yarn install'
    }
  
  }
  
  
   stage("run backend"){
    
    echo 'executing gradle...'
     witGradle(){
     sh './gradlew -v'
     }
    }



}