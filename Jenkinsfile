pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        echo 'hello'
        withCredentials([[ $class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'Aws-Capstone', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                sh "echo this is ${env.AWS_ACCESS_KEY_ID}"
                sh "echo this is ${env.AWS_SECRET_ACCESS_KEY}"
                sh "ansible-playbook ./ansible/ec2-laucher.yml"
            }
        }
      }

    }
  }