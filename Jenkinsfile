pipeline{
    agent any
    stages{

        stage("Build"){
            steps{
                sh 'docker build --tag fipolio_frontend .'
            }
        }
        stage("Push"){
            steps{
                sh 'docker tag fipolio_frontend tephens03/fipolio-frontend '
                sh 'docker push tephens03/fipolio-frontend'
            }
        }
        stage("Clean up"){
            steps{
                sh 'docker stop fipolio_frontend || true && docker rm fipolio_frontend || true'
                sh 'docker rm fipolio_frontend || true && docker rm fipolio_frontend || true'
            }
        }

        stage("Run"){
            steps{
                sh 'docker run -d -p 3000:3000 --name fipolio_frontend fipolio_frontend'
            }
        }




            
    }
}