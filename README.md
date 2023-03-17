# Cloud Resume Front End
The front end part of the cloud resume challenge consist of the following AWS services, cloud front, route 53, certificate manager and S3 bucket. 

Route 53 which is a DNS service, routes requests to cloud front which then serves the website content from S3 bucket.

This repo holds the files for the resume site, that is, the html, css and js files. The repo also has a github action for pushing the files to S3 bucket thus creating a CI/CD pipeline 