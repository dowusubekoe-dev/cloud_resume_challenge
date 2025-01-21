variable "aws_region" {
  type    = string
  default = "us-east-1" # Replace with your AWS region
}
variable "project_name" {
  type    = string
  default = "resume-challenge"
}
variable "website_domain_name" {
  type        = string
  description = "cloud-resume-challenge-yes.s3.us-east-1.amazonaws.com"
}
# Variable for CloudFront Distribution ID
variable "cloudfront_distribution_id" {
  type        = string
  description = "The ID of the CloudFront distribution."
}

# Variable for CloudFront Domain Name
variable "cloudfront_domain_name" {
  type        = string
  description = "The domain name of the CloudFront distribution."
}