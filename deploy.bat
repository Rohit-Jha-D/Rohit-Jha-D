@echo off
title Deploying Rohit Jha D Special Profile README to GitHub...
echo =======================================================================
echo           ROHIT JHA D - 1-CLICK GITHUB PROFILE DEPLOYMENT
echo =======================================================================
echo.

cd /d "%~dp0"

echo 1. Configuring Git identity...
git config user.email "rjha13b@gmail.com"
git config user.name "Rohit Jha D"

echo 2. Initializing Git repository...
if not exist ".git" (
    git init
)
git branch -M main

echo 3. Adding files to git...
git add .

echo 4. Creating commit...
git commit -m "feat: setup senior UI/UX profile readme, animated SVG banner, and web portfolio"

echo 5. Configuring remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Rohit-Jha-D/Rohit-Jha-D.git

echo 6. Pushing to GitHub (main branch)...
git push -u origin main --force

echo.
echo =======================================================================
echo SUCCESS! Your GitHub profile README is now live at:
echo https://github.com/Rohit-Jha-D
echo.
echo Enable GitHub Pages in your repository settings to launch your live site:
echo https://rohit-jha-d.github.io/
echo =======================================================================
echo.
pause
