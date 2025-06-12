@echo off
echo Launching Claude via WSL Ubuntu...

:: Check if WSL is installed
wsl --list >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: WSL is not installed. Please install WSL and an Ubuntu distribution.
    pause
    exit /b 1
)

:: Check if Ubuntu is available as a WSL distribution
wsl -d Ubuntu -- bash -c "exit" >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: Ubuntu distribution not found in WSL. Please ensure Ubuntu is installed.
    pause
    exit /b 1
)

:: Try running claude by sourcing ~/.bashrc or using the full path
wsl -d Ubuntu -- bash -c "source ~/.bashrc; command -v claude >/dev/null 2>&1 && claude || { if [ -f /home/andre/.npm-global/bin/claude ]; then /home/andre/.npm-global/bin/claude; else echo 'Error: claude not found in PATH or at /home/andre/.npm-global/bin/claude'; exit 1; fi; }"
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to run claude. Ensure the claude command is executable and accessible.
    pause
    exit /b 1
)

echo Claude executed successfully.
pause