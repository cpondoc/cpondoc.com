# GitHub Actions Workflows

## Deploy to Railway

This workflow automatically deploys the application to Railway when changes are pushed to the `main` branch.

### Setup Instructions

1. **Get your Railway Token:**
   ```bash
   railway login
   railway whoami --token
   ```
   
   This will output your Railway token. Copy it.

2. **Add the token to GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `RAILWAY_TOKEN`
   - Value: Paste the token you copied
   - Click **Add secret**

3. **Verify the service name:**
   - In your Railway project, check the service name
   - Update the workflow file (`.github/workflows/deploy.yml`) if your service name is different from `cpondoc.com`
   - You can find the service name by running: `railway status`

### Workflow Details

The workflow consists of two jobs:

1. **lint-and-build**: Runs linting and builds the application to catch errors early
2. **deploy**: Deploys to Railway only if the lint and build steps pass

### Manual Deployment

You can also trigger the workflow manually:
- Go to **Actions** tab in your GitHub repository
- Select **Deploy to Railway** workflow
- Click **Run workflow**
- Select the branch and click **Run workflow**

### Troubleshooting

**Issue: Workflow fails with "Invalid token"**
- Verify the `RAILWAY_TOKEN` secret is set correctly
- Generate a new token with `railway whoami --token`

**Issue: Service not found**
- Check the service name in Railway matches the one in the workflow
- You can also use the project ID instead: `railway up --project <project-id>`

**Issue: Build fails in GitHub Actions but works locally**
- Check Node.js version matches (workflow uses Node 18)
- Ensure all dependencies are in `package.json`
- Check for environment-specific issues

### Alternative: Using Railway's GitHub Integration

If you want to switch to Railway's native GitHub integration instead:
1. Go to your Railway project
2. Connect your GitHub repository
3. Railway will automatically deploy on push
4. You can delete this workflow file
