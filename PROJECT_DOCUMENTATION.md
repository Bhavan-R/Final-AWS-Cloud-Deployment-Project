# CloudTask – Final AWS Cloud Deployment Project

## 1. Abstract
CloudTask is a lightweight task management web application designed to demonstrate the deployment of a real web application on cloud infrastructure. It provides a browser interface for capturing tasks, assigning priorities, tracking completion, and filtering the task list. The project combines a simple front-end application with AWS hosting, storage, access management, and monitoring concepts.

## 2. Problem Statement
Students often need a simple way to organize work while learning cloud deployment. This project provides a small but practical application that can be deployed publicly and used to demonstrate cloud infrastructure fundamentals.

## 3. Objectives
- Build a functional web application.
- Deploy the application on AWS.
- Use at least three AWS services in the overall project.
- Configure basic access controls.
- Design an architecture diagram.
- Document and demonstrate the deployment.

## 4. Application Features
- Add a task with a priority label.
- Mark tasks as pending or completed.
- Filter tasks by status.
- Delete tasks.
- Display total, completed, and pending counts.
- Save task data in browser local storage.

## 5. Technology Stack
| Technology | Purpose |
|---|---|
| HTML | Application structure |
| CSS | Responsive visual design |
| JavaScript | Task interaction and state |
| Amazon EC2 | Host application using Nginx |
| Amazon S3 | Optional project artifact storage/backup |
| AWS IAM | Identity and permission control |
| Amazon CloudWatch | Infrastructure metrics and monitoring |

## 6. AWS Service Roles
**EC2:** Runs Nginx and serves the application files over HTTP.  
**S3:** Stores project assets or deployment backups as an optional storage component.  
**IAM:** Provides controlled identities and permissions. An EC2 role should be used if the instance requires AWS access.  
**CloudWatch:** Provides monitoring for instance metrics; additional agent configuration may be required for OS logs.

## 7. Architecture
A visitor opens the website in a browser and connects over HTTP to the EC2 instance. Nginx serves the static HTML, CSS, and JavaScript files. IAM controls authorized AWS actions for administrators and any role assigned to EC2. S3 is used separately for project artifacts or backups. CloudWatch monitors the EC2 infrastructure.

## 8. Deployment Summary
The application files are placed on an Ubuntu EC2 instance. Nginx is installed and configured to serve the files from `/var/www/cloudtask`. The security group permits HTTP access for visitors and restricts SSH access to the administrator's IP address.

## 9. Data and Limitations
The current application stores task data in browser local storage. This means tasks are local to the browser/device and are not synchronized across users or devices. The current version does not have a server-side API or database. S3 is not wired into the application as a live data backend.

## 10. Security Considerations
- Restrict SSH to the administrator's IP.
- Avoid publishing credentials or private keys.
- Use an IAM role and least-privilege policies for AWS access.
- Keep system packages updated.
- Consider HTTPS and a domain name for a production deployment.
- Review billing and remove unused cloud resources.

## 11. Testing Plan
| Test | Expected result |
|---|---|
| Add task | Task appears in list |
| Complete task | Task is shown as completed and counters update |
| Filter pending | Only pending tasks appear |
| Filter completed | Only completed tasks appear |
| Delete task | Task disappears |
| Reload page | Browser-local tasks remain |
| Open public EC2 URL | Web app is served by Nginx |

## 12. Conclusion
CloudTask provides a hands-on example of deploying a small web application and connecting that deployment to cloud infrastructure concepts. It demonstrates web hosting, security configuration, storage planning, monitoring, documentation, and a repeatable deployment process. The project should be considered complete only after the AWS resources are configured and the live deployment is verified.
