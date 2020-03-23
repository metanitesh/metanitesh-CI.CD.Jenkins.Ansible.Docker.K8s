# metanitesh-CI.CD.Jenkins.Ansible.Docker.K8s
This project demonstrate a working CI/CD pipeline using Jenkins, Ansible, Docker, K8s on AWS. When you make a commit, pipeline checks for lint, create a docker image, push it to dockerhub, setup aws infrastructure, install k8s, and deploy the app with 2 replica set, and forward the port for public access.

To run this you will need to setup jenkins box, ansible, and cofigure credentials in jenkins ( aws/ ssh)

### Youtube link for walkthrough
https://www.youtube.com/watch?v=JkOg8Q6lYW8&feature=youtu.be

### Screenshot of working pipeline
![screeshot](https://github.com/metanitesh/metanitesh-CI.CD.Jenkins.Ansible.Docker.K8s/blob/master/screenshots/passing-pipeline.png "screeshot")

### Screenshot of failing pipeline
![screeshot](https://github.com/metanitesh/metanitesh-CI.CD.Jenkins.Ansible.Docker.K8s/blob/master/screenshots/failing-lint.png "screeshot")

### Screenshot of deployed app
![screeshot](https://github.com/metanitesh/metanitesh-CI.CD.Jenkins.Ansible.Docker.K8s/blob/master/screenshots/blue-green-deployments.png "screeshot")

### Screenshot of aws infrastructure
![screeshot](https://github.com/metanitesh/metanitesh-CI.CD.Jenkins.Ansible.Docker.K8s/blob/master/screenshots/instances.png "screeshot")
