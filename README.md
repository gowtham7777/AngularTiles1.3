To check-out the code use https://github.com/gowtham7777/GspTilesInAngular2.git from eclipse/Intellij

* Should have NODEJS installed in your machine.

* under the folder where project is downloaded, run '''npm install''' to download the dependencies.

* Run  **node server.js** under the project to start nodeJS.

* Run **gulp** under the project to generating css files & minification.

* Open browser **localhost:8000/src/index.html** should open the application.


--docker setup in windows 

Docker installation, Building and running Angular App. 

Used Windows 7 Professional. These instructions vary based on OS. 
For Windows 7: download Docker Toolbox which comes with 
Docker client(to run docker engine, creating images and containers)
Docker Machine(to create docker hosts on local mac/windows)
Docker Compose(running multi-container Docker applications)
VirtualBox
Kinematic (Docker GUI)


After installation, run docker-quick-start.  
 
If you see the above ssh command error: installation is not successful, after some research I changed the windows 7 virtualization property in BIOS. This may vary by OS.
Press F1 on system boot, 
Under Security->System Security-> Virtualization-technology  disabled>enabled
Save & Exit 
run docker-quick-start  again. Able to see the machine with IP address. 
 
Create a angular or Java application with DockerFile in root folder. Docker file specifies the order of execution of command to assemble an image. 
  
Building the Docker Image: app is name of the image. It executes the steps(1/7) in dockerfile. 
   

safdsafsafsafsafdsfsfdsa
asfdsafsaffdsa


after successful build you can see the image in kinematic. 

Creating container and running  the app in browser  and useful command to see containers images logs. 
 
Run the app in web browser . replace localhost with docker-machine ip 
 

Running multiple applications like tms-api-gateway, auth-server eureka requires compose. 

