pipeline {
  agent any
  
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
      steps {
        sh 'docker.build(metanitesh/simple-api)'
      }
    }

  }
}