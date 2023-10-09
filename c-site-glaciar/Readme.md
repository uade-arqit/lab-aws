# Site Glaciar

Es un sitio con HTML/css

## Lab 01: Se sube en S3 + Policies

   - Se sube en S3 manualmente, 
   - Se configura una Policy para excluir publicamente el dir de config

## Lab 01: Se sube con CodeDeploy

   - Pudo Funcionar la Demo, son muchos pasos por la consola.
     La base es:

      # CodeDeploy Agent

      sudo yum update -y 
      sudo yum install -y wget ruby 

      cd /home/ec2-user
      wget https://aws-codedeploy-eu-central-1.s3.amazonaws.com/latest/install
      chmod +x ./install

      sudo service codedeploy-agent status

      # My App Zip

      aws deploy create-application --application-name d-site-glaciar
      aws deploy push               --application-name d-site-glaciar \
               s3://<glaciar-bucket>/c-site-glaciar-lab-02.zip \
            --ignore-hidden-files



      aws deploy push --application-name glaciar-app \
               --s3-location s3://glaciar2/site-glaciar-lab-02.zip \
               --ignore-hidden-files



# CloudFront Variantes

   https://d3btwfsgyrkdyo.cloudfront.net/
   https://d3btwfsgyrkdyo.cloudfront.net/glaciar
   https://d3btwfsgyrkdyo.cloudfront.net/glaciar/index.html
   
   
   http://d3btwfsgyrkdyo.cloudfront.net/
   http://d3btwfsgyrkdyo.cloudfront.net/glaciar
   http://d3btwfsgyrkdyo.cloudfront.net/glaciar/index.html



# Resourses

   https://www.youtube.com/watch?v=cMJ7cPk3tlc
   How to Setup Custom Domain with AWS S3 Bucket using Route 53 and Google Domains

   https://www.youtube.com/watch?v=8P9JvEURHO4
   How do I resolve the CloudFront error "No Access-Control-Allow-Origin header?

   How to Transfer Domain from One AWS account to another AWS account
   https://levelup.gitconnected.com/how-to-transfer-domain-from-one-aws-account-to-another-aws-account-e055e5bd68d3

# Transfer Domain to Another Account

   Step by Step in file
   d:\code\_My Backup\Notas AWS Glaciar.org Trasladar de dominios.md
