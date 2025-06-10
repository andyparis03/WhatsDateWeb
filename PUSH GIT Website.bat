@echo off
cd /d %~dp0websitecursor

REM Stage all changes
git add .

REM Commit with a timestamped message
setlocal enabledelayedexpansion
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do (
    set DATE=%%d-%%b-%%c
)
for /f "tokens=1-2 delims=: " %%a in ('time /t') do (
    set TIME=%%a-%%b
)
git commit -m "Update: !DATE!_!TIME!"

REM Push to main branch
git push origin main

pause