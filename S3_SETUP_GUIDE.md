# Amazon S3 setup (optional asset/backup bucket)

This static app does not require S3 to function when hosted on EC2. S3 can be included as a separate project service for storing architecture diagrams, screenshots, or versioned deployment archives.

1. Open Amazon S3 and create a bucket with a globally unique name.
2. Keep **Block Public Access** enabled for a project backup bucket.
3. Upload project artifacts (for example, `ARCHITECTURE.svg` and a ZIP backup).
4. Enable bucket versioning if you want recovery from accidental overwrites.
5. Use IAM policies/roles to grant only required bucket access.
6. Do not place secrets, SSH keys, or sensitive personal data in the bucket.

If you choose S3 static website hosting instead, it is a different hosting architecture. Configure it intentionally and understand that website hosting may require public-read access or another delivery setup. Do not disable protections without understanding the exposure.
