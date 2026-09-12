pipeline {
    agent any
    stages {
        stage('build a docker image') {
            steps {
                sh 'docker build -t myapp .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8080:80 myapp'
            }
        }
    }
}
