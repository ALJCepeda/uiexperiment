#!/bin/bash
getLatest="git pull"
${getLatest}
npmBuild="npm install"
${npmBuild}
build="gulp build"
${build}
#<<COMMENT1
MSBUILD[0]="/c/Program Files (x86)/MSBuild/14.0/Bin/msbuild.exe"
MSBUILD[1]=./AbsenceManagement.sln
MSBUILD[2]=/property:Configuration=Debug
MSBUILD[3]=/target:Clean,Build
projectName="../ProjectName"

cd ${AbsenceManagement}
"${MSBUILD[0]}" "${MSBUILD[1]}" "${MSBUILD[2]}" "${MSBUILD[3]}"
#COMMENT1
