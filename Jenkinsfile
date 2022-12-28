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
          sh ''' sed -i 's/\"//g' backend/sample.env
          sed -i 's/\'//g' backend/sample.env
          cp -av backend/sample.env backend/.env '''
        }
      }
      stage("Build") {
        steps {
           sh  ''' make build '''
        }
      }


    }
}
