@echo off
chcp 65001
cd /d "%~dp0"

:menu
echo:
echo Утилиты длѝ приложениѝ
echo =================
echo 0. Выход
echo 1. Создать приложение
echo 2. Создать приложение (NPM)
echo 3. Запустить приложение
echo 4. Запустить приложение (NPM)
echo 5. Собрать приложение
echo 6. Собрать приложение (NPM)
echo:

set /p input= Выберите действие:
if "%input%"=="0" goto exits
if "%input%"=="1" goto createApp
if "%input%"=="2" goto createAppNPM
if "%input%"=="3" goto startApp
if "%input%"=="4" goto startAppNPM
if "%input%"=="5" goto buildApp
if "%input%"=="6" goto buildAppNPM 
goto menu

:createApp
set /p inp= Введите название:
bun create vite %inp%
pause
goto menu

:createAppNPM
set /p inpNPM= Введите название:
npm create-react-app %inpNPM%
pause
goto menu

:startApp
bun run dev
pause
goto menu

:startAppNPM
npm run dev
pause
goto menu

:buildApp
bun run build
pause
goto menu

:buildAppNPM
npm run build
pause
goto menu

:exist
chcp 866
exit