# Deployment Guide for dominios.pt (cPanel)

This guide explains how to deploy your Vite + React website to dominios.pt using cPanel.

## Prerequisites

- Access to cPanel account for dominios.pt
- Node.js installed locally (for building the project)
- FTP/SFTP credentials or File Manager access in cPanel

## Step-by-Step Deployment Instructions

### 1. Build the Project Locally

First, build your project for production:

```bash
# Install dependencies (if not already installed)
npm install

# Build for production
npm run build
```

This creates a `dist` folder containing all the production-ready files.

### 2. Prepare Environment Variables (if using Supabase)

If your site uses Supabase, you'll need to set environment variables. Create a `.env.production` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

Then rebuild:
```bash
npm run build
```

**Note:** Environment variables must be prefixed with `VITE_` to be accessible in the browser.

### 3. Access cPanel

1. Log in to your cPanel account at dominios.pt
2. Navigate to **File Manager** or use an FTP client (FileZilla, WinSCP, etc.)

### 4. Upload Files to cPanel

#### Option A: Using cPanel File Manager

1. In File Manager, navigate to `public_html` (or your domain's root directory)
   - If deploying to a subdomain, go to `public_html/subdomain_name`
   - If deploying to a subdirectory, go to `public_html/subdirectory_name`

2. Delete or backup any existing files in the target directory

3. Upload the **contents** of the `dist` folder (not the `dist` folder itself):
   - Select all files from your local `dist` folder
   - Upload them to the target directory in cPanel

#### Option B: Using FTP/SFTP Client

1. Connect to your server using FTP/SFTP credentials
2. Navigate to `public_html` (or your domain's root directory)
3. Upload all files from the `dist` folder to the server

### 5. Upload .htaccess File

Since this is a Single Page Application (SPA) with client-side routing, you need a `.htaccess` file to handle URL rewriting. 

A `.htaccess` file has been created in the `public` folder. Make sure it's included when you upload your files, or upload it separately to your `public_html` directory.

The `.htaccess` file ensures that:
- All routes are redirected to `index.html` (required for React Router)
- Proper caching headers are set for static assets
- Gzip compression is enabled (if supported by your server)

### 6. Verify Deployment

1. Visit your domain in a browser
2. Test all routes to ensure they work correctly:
   - `/home`
   - `/sobre`
   - `/servicos`
   - `/galeria`
   - `/precos`
   - `/contacto`
   - `/aula-experimental`

3. Check the browser console for any errors

### 7. Additional cPanel Configuration (if needed)

#### SSL Certificate
- Ensure SSL/HTTPS is enabled for your domain in cPanel
- This is usually found under "SSL/TLS Status" or "Let's Encrypt"

#### Domain/Subdomain Setup
- If deploying to a subdomain, make sure it's configured in cPanel's "Subdomains" section
- Point the document root to the correct directory

## Troubleshooting

### Routes return 404 errors
- Ensure the `.htaccess` file is uploaded and in the root directory
- Check that Apache `mod_rewrite` is enabled on the server
- Verify the `.htaccess` file permissions (644 is standard)

### Assets not loading (CSS/JS files 404)
- Check that all files from the `dist` folder were uploaded
- Verify file paths in the browser's Network tab
- Ensure the `base` option in `vite.config.ts` matches your deployment path (if using a subdirectory)

### Environment variables not working
- Remember: Only variables prefixed with `VITE_` are accessible in the browser
- Rebuild the project after changing environment variables
- Environment variables are embedded at build time, not runtime

### White screen or blank page
- Check browser console for JavaScript errors
- Verify that `index.html` was uploaded correctly
- Check server error logs in cPanel

## Updating the Website

To update your website after making changes:

1. Make your changes locally
2. Run `npm run build` again
3. Upload the new files from the `dist` folder, replacing the old ones
4. Clear your browser cache or do a hard refresh (Ctrl+F5 or Cmd+Shift+R)

## File Structure After Deployment

Your `public_html` (or target directory) should contain:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other asset files]
├── favicon.ico
└── [other files from dist/]
```

## Need Help?

- Check cPanel documentation: https://docs.cpanel.net/
- Vite deployment guide: https://vitejs.dev/guide/static-deploy.html
- React Router deployment: https://reactrouter.com/en/main/start/overview

