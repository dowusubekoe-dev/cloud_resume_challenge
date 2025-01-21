terraform {
  backend "s3" {
    bucket = "cloud-resume-challenge-yes" # Replace with your bucket name. Must be created manually on AWS.
    key    = "cloud-resume-challenge/terraform.tfstate"
    region = "us-east-1" # Replace with your AWS region
  }
}