Using this main.tf file you can setup an EC2 Server for running the safenet app  Along with VPC and subnet via Terraform  :sunglasses: !!!! 
In this Tutorial i have  added how  we can setup an EC2 Server for running the Safenet app in  an EC2 envioronment using  terraform.

**Note :** Before Perfoming this Steps ensure that you have created an AWS Account also Configured an IAM user with programmatic access and Created a Key Pair in aws keypair service


Step 1 : Install Terraform (If it is not Installed)

          curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -

          sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

          sudo apt install terraform

Step 2 : After Installling terraform run the below command to deploy the main.tf file for starting  the infra setup 
         Run the commands from the main.tf file location
         
         Note : Before  deploying make sure you have added the IAM Access Key and Secret key inside the main.tf file 
         Also make sure created the pemkey for the instance via AWS console and should be added  in the keypair section inside main.tf file
         
         
          
        
           terraform init
           
           terraform plan
           
           terraform apply

Step 3: SSH into your instance created your the command  <br>
              ssh -i your_created_pemkeyfile.pem ubuntu@ip </br>
Step 4 :   From the User directory run the below commands to start the contianer
              
              sudo git clone https://github.com/Zac10ck/App_safenet2.git <br>
              
              cd App_safenet2 <br>
              
              sudo docker build -t safenet-app .  <br>
              
              sudo docker run -d -p 3000:3000 safenet-app
