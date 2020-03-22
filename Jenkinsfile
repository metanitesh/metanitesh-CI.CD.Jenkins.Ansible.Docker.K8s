pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        echo 'hello'
        sh 'sudo ansible-playbook ec2-laucher.yml'
      }
    }

  }
}