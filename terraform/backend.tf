terraform {
  backend "s3" {
    bucket = "cloud-portfolio-storage" # Replace with your bucket name. Must be created manually on AWS.
    key    = "cloud-resume-challenge/terraform.tfstate"
    region = "us-east-1" # Replace with your AWS region
  }
}