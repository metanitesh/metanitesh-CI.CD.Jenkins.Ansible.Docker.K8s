pipeline {
  environment {
    registry = "metanitesh/simple-api"
    registryCredential = 'dockerId'
    dockerImage = ''
  }
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
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }

    stage('Push') {
      steps {
        script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
        // sh 'docker push metanitesh/simple-api'
      }
    }

    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }

  }
}