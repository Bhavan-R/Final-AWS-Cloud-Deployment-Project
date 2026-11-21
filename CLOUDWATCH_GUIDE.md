# CloudWatch monitoring guide

1. Open CloudWatch in the same AWS Region as your EC2 instance.
2. Review EC2 metrics such as CPU utilization, network traffic, and status checks.
3. Create a dashboard if you want a single view of the project instance.
4. Configure an alarm for a metric such as CPU utilization; select a threshold and notification action if SNS is configured.
5. For operating-system and Nginx logs, install and configure the CloudWatch Agent and grant the EC2 role the required least-privilege permissions. Basic EC2 metrics alone do not automatically include every guest OS log.

Take screenshots of actual metrics/alarm configuration for your report. Do not use sample screenshots as proof of deployment.
