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
           sh  '''
	   docker login -u "mistryparas" -p "XXXXXXXXXX" docker.io 
           docker tag nginx mistryparas/nginx:v0.0.${BUILD_NUMBER} 
           docker push mistryparas/nginx:v0.0.${BUILD_NUMBER}
           docker rmi -f nginx:latest mistryparas/nginx:v0.0.${BUILD_NUMBER} '''
        }
      }
      stage("push database") {
        steps {
           sh  '''
           docker tag database mistryparas/database:v0.0.${BUILD_NUMBER} 
           docker push mistryparas/database:v0.0.${BUILD_NUMBER}
           docker rmi -f database:latest mistryparas/database:v0.0.${BUILD_NUMBER} '''
        }
      }
      stage("push frontend") {
        steps {
           sh  '''
           docker tag frontend mistryparas/frontend:v0.0.${BUILD_NUMBER} 
           docker push mistryparas/frontend:v0.0.${BUILD_NUMBER}
           docker rmi -f frontend:latest mistryparas/frontend:v0.0.${BUILD_NUMBER} '''
        }
      }
      stage("push backend") {
        steps {
           sh  '''
           docker tag backend mistryparas/backend:v0.0.${BUILD_NUMBER} 
           docker push mistryparas/backend:v0.0.${BUILD_NUMBER}
           docker rmi -f backend:latest mistryparas/backend:v0.0.${BUILD_NUMBER} '''
        }
      }

    }
}

