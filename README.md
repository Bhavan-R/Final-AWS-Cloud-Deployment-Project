# CloudTask – AWS Final Cloud Deployment Project

CloudTask is a responsive student task tracker built with HTML, CSS, and JavaScript. It supports adding tasks, priority labels, marking tasks complete, filtering, deleting, and browser-local persistence.

## Important deployment note
The current app stores tasks in the visitor's browser (`localStorage`). It does **not** yet use a server-side database or AWS S3 as a data backend. AWS services are used in the deployment/hosting and infrastructure portion of the project, as described in the documentation. Do not claim server-side persistence unless you implement it.

## Features
- Add tasks with priority
- Mark tasks pending/completed
- Filter task list
- Delete tasks
- Task counts
- Responsive layout
- Local browser storage

## Run locally
Open `index.html` in a modern browser. No build step is required.

## AWS deployment project
Suggested stack:
- Amazon EC2: host the site with Nginx
- Amazon S3: optional storage for project assets or deployment backup
- AWS IAM: use an EC2 instance role with least-privilege access if EC2 needs AWS access
- Amazon CloudWatch: monitor EC2 metrics and optionally collect logs

See the included deployment and security guides.

## Files
- `index.html`, `style.css`, `script.js`: application
- `PROJECT_DOCUMENTATION.md`: project report
- `AWS_DEPLOYMENT_GUIDE.md`: EC2 deployment steps
- `S3_SETUP_GUIDE.md`: optional S3 setup
- `IAM_SECURITY_GUIDE.md`: security notes
- `CLOUDWATCH_GUIDE.md`: monitoring notes
- `ARCHITECTURE.svg`: architecture illustration
- `DEMO_VIDEO_GUIDE.md`: suggested recording outline
- `LINKEDIN_POST.md`: post draft

## Security checklist
- Restrict SSH (port 22) to your own public IP, not `0.0.0.0/0`.
- Allow HTTP (port 80) to the public if hosting a public site.
- Do not upload private keys, passwords, AWS credentials, account IDs, or personal data to GitHub.
- Use an EC2 instance role instead of static access keys when a server needs AWS access.
- Stop or terminate resources when no longer needed to avoid unexpected charges.
