@echo off
where mvn >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  mvn %*
) else (
  echo Maven is not installed and no Maven Wrapper JAR is included in this starter archive.
  echo Install Maven or add the standard Maven Wrapper files, then retry.
  exit /b 1
)
