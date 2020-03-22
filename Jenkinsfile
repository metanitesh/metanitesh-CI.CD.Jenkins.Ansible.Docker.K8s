pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        echo 'hello'
        sh 'ansible-playbook ./ansible/ec2-laucher.yml'
      }
    }

  }
}