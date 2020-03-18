pipeline {
  agent any
  stages {
    stage('Install packages') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build container') {
      steps {
        sh 'docker build -t metanitesh/simple-api .'
      }
    }

  }
}