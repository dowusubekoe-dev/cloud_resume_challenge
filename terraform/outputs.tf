output "s3_bucket_name" {
  value       = aws_s3_bucket.website_bucket.id
  description = "cloud-portfolio-storage"
}
output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.cdn.domain_name
  description = "CloudFront domain name"
}