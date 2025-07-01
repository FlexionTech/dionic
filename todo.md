# Dynamic Email from environment variable.
email address that is used within the script.js, should come from an environment variable. we can configure this in Netlify. these need to be added to a .env file, and .env needs to be added to a new .gitignore file.
if one not found, default to Anjali email address for now.

## test in staging
setting up environment variable in Netlify. 

## Deploy production.
we need to take all the code from staging branch, and merge this into main, while keeping the staging branch. 