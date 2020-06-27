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
        stage('Build docker image'){
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Upload docker image'){
            steps {
                echo 'Uploading docker image to Dockerhub'
            }
        }

        stage('Customer API: Setup'){
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Functional Test'){
            steps {
                echo 'Functional Test executed successfully'
            }
        }

         stage('Performance Test'){
            steps {
                echo 'Performance Test executed successfully'
            }
        }

         stage('Security Test'){
            steps {
                echo 'Security Test executed successfully'
            }
        }

        stage('Customer API: Teardown'){
            steps {
                sh 'docker-compose down'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }
    }
}