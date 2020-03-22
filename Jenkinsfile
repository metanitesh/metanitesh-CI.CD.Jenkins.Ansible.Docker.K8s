pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        echo 'hello'
        sh 'ansible-playbook ec2-laucher.yml'
      }
    }

  }
}