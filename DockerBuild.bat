@ECHO OFF
ECHO Starting docker commands 
ECHO Building image
cmd /c npm run build
ECHO Getting branch name
for /f %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
ECHO Branch %branch%
ECHO Building docker
docker image build -t mentorgraphics/timetracker:%branch% .
ECHO Building docker done