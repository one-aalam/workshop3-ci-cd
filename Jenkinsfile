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
                sh 'npm run test:coverage'
            }
        }
        stage('Static Analysis') {
            steps {
                echo 'Sonaralyzing..'
                sh 'npm run test:standard'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}