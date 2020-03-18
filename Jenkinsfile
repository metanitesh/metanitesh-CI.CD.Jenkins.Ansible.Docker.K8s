pipeline {
  agent any
  def app
  stages {
    stage('Install packages') {
      parallel {
        stage('Install packages') {
          steps {
            sh 'npm install'
          }
        }

        stage('error') {
          steps {
            echo 'hello'
          }
        }

      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build') {
      app = docker.build("metanitesh/simple-api")
      // steps {
      //   sh 'docker.build(metanitesh/simple-api)'
      // }
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

  }
}