pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing NPM dependencies..'
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}