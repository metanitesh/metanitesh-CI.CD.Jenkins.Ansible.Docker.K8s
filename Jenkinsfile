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

        stage('') {
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

    stage('Build container') {
      steps {
        sh 'echo building '
      }
    }

  }
}