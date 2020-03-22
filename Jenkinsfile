pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        echo 'hello'
        sh 'sudo ansible-playbook ./ansible/ec2-laucher.yml'
      }
    }

  }
}