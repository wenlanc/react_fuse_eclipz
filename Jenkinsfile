pipeline {
  agent {
    kubernetes {
      label 'jenkins-slave'
      defaultContainer 'jnlp'
      yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: dind
    image: docker:18.09-dind
    securityContext:
      privileged: true
  - name: docker
    env:
    - name: DOCKER_HOST
      value: 127.0.0.1
    image: docker:18.09
    command:
    - cat
    tty: true
    volumeMounts:
    - mountPath: "/home/jenkins/agent"
      name: "workspace-volume"
      readOnly: false
'''
    }

  }
  stages {
    stage('Git Checkout') {
      parallel {
        stage('Checkout admingui') {
          steps {
            withCredentials(bindings: [gitUsernamePassword(credentialsId: 'github', gitToolName: 'git-tool')]) {
              echo 'Checking out admingui from git'
              sh 'git clone https://github.com/Eclipz-Git/admingui'
            }

          }
        }

        stage('Checkout infra') {
          steps {
            withCredentials(bindings: [gitUsernamePassword(credentialsId: 'github', gitToolName: 'git-tool')]) {
              echo 'Checking out infra from git'
              sh 'git clone https://github.com/Eclipz-Git/eclipz-infra'
            }

          }
        }

      }
    }

    stage('Build frontend') {
      steps {
        container(name: 'docker') {
          echo 'Building frontend'
          sh 'until docker container ls; do sleep 3; done'
          script {
            docker.withRegistry('https://516256549202.dkr.ecr.us-west-2.amazonaws.com/admingui-frontend', 'ecr:us-west-2:aws') {
              app = docker.build("admingui-frontend", "-f ${env.WORKSPACE}/admingui/frontend/Dockerfile ./admingui/frontend")
              app.push("${env.BUILD_NUMBER}")
            }
          }

        }

      }
    }

    stage('Build backend') {
      steps {
        container(name: 'docker') {
          echo 'Building backend'
          sh 'until docker container ls; do sleep 3; done'
          script {
            docker.withRegistry('https://516256549202.dkr.ecr.us-west-2.amazonaws.com/admingui-backend', 'ecr:us-west-2:aws') {
              app = docker.build("admingui-backend", "-f ${env.WORKSPACE}/admingui/backend/Dockerfile ./admingui/backend")
              app.push("${env.BUILD_NUMBER}")
            }
          }

        }

      }
    }

    stage('Update Argocd Manifest') {
      steps {
        echo 'Updating manifest'
        script {
          dir("eclipz-infra") {
            def backend = [
              'apiVersion': 'kustomize.config.k8s.io/v1beta1',
              'kind': 'Kustomization',
              'images': [
                ['name': '516256549202.dkr.ecr.us-west-2.amazonaws.com/admingui-backend',
                'newTag': "${env.BUILD_NUMBER}"
              ],
            ],
            'resources': ["./deployment.yaml", "./service.yaml"]
          ]
          writeYaml file: "./deploy/e2e/k8s/yaml/backend/kustomization.yaml", data: backend, overwrite: true

          def frontend = [
            'apiVersion': 'kustomize.config.k8s.io/v1beta1',
            'kind': 'Kustomization',
            'images': [
              ['name': '516256549202.dkr.ecr.us-west-2.amazonaws.com/admingui-frontend',
              'newTag': "${env.BUILD_NUMBER}"
            ],
          ],
          'resources': ["./deployment.yaml", "./service.yaml"]
        ]
        writeYaml file: "./deploy/e2e/k8s/yaml/frontend/kustomization.yaml", data: frontend, overwrite: true

        withCredentials([gitUsernamePassword(credentialsId: 'github', gitToolName: 'git-tool')]) {
          // commit changes to repository
          sh "git checkout main"
          sh "git config --global user.email echi@eclipzit.com"
          sh "git add ."
          sh "git commit -a -m \'admingui build: ${env.BUILD_NUMBER}'"
          sh "git push"
        }
      }
    }

  }
}

stage('Adding Polling Properties') {
  steps {
    echo 'Adding Pol props'
    script {
      properties([pipelineTriggers([pollSCM('* * * * *')])])
    }

  }
}

}
environment {
registryCredential = 'dockerhub'
imagename = 'eclipz/frontend'
app = ''
}
}
