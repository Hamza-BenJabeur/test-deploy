# Deploy simple  Nodejs react  and MySQL application with Ansible , Docker Compose and Azure


## Access to the instance form the public ip address 
Change the user with the username created in the instance and the public ip address by the instance's public ip address
```bash
ssh {user}@{publicIpAdress}
```
## Prepare the environment
- Ther operating system is  Ubuntu 20.04.
- Install ansible on the instance
```bash
sudo apt-get install ansible 
``` 
- Configure the host file of ansible
```bash
sudo nano /etc/ansible/hosts
```
- Add the ip adress of the instance in the host file.
```yaml
[host]
@ip-public
```
- Generate public key 
```bash
ssh-keygen
```
- Configure ansible so it can reach the machine using ssh
```bash
ssh-copy-id root@public-ip-address
```
- Test the configuration 
```bash
ansible all -m ping
```
- Create the playbook
```yaml
---
- hosts: test

  tasks:
  - name: install docker-compose
    apt: name=docker-compose state=latest
  - name: "Deploy"
    command: "sudo docker-compose -f /home/hamza/test-deploy/docker-compose.yml up -d"

```
## Clone the repo into the instance and fill the blanks
- Clone the repository :
```bash
git clone https://github.com/Hamza-BenJabeur/test-deploy.git
```
- Fill the blanks with public Ip-address of the instance:

```bash
cd test-deploy/API/
nano server.js
```
![alt text](https://github.com/Hamza-BenJabeur/test-deploy/blob/master/server-picture-FILL_ME.PNG?raw=true)

```bash
cd ..
cd frontend/src/api
nano index.js
```
![alt text](https://github.com/Hamza-BenJabeur/test-deploy/blob/master/picture-api-front_end.PNG?raw=true)






## Run the System
We can easily run the whole with only a single command:
```bash
ansible-playbook playbook.yaml
```

## Test the application
Access to the web application hosted in the cloud with the public ip address

## Real Demo

![Demo](https://user-images.githubusercontent.com/66827492/139347361-7064d2f6-db4b-4dab-8701-9c13922de449.gif)
