pipeline
{
  agent any
    stages {
      stage("Checkout") {
        steps {
          git branch: 'deploy', url: 'https://github.com/mistryparas/MERN-ToDoApp.git'
        }
      }
      stage("config env") {
        steps {
          sh ''' cp -av backend/sample.env backend/.env '''
        }
      }
      stage("Build") {
        steps {
           sh  ''' make build '''
        }
      }
      stage("push nginx") {
        steps {
           sh  ''' docker tag nginx:latest mistryparas/nginx:v0.0.${BUILD_NUMBER} 
           docker push mistryparas/nginx:v0.0.${BUILD_NUMBER}
           docker rmi -f nginx:latest mistryparas/nginx:v0.0.${BUILD_NUMBER} '''
        }
      }

    }
}

