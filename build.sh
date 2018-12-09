#!/bin/bash
echo 'building : ./sites/css/status.css' >> ./build.txt
sass ./scss/status.scss ./sites/css/status.css  >> ./build.txt

echo 'building : ./sites/css/style.css' >> ./build.txt
sass ./scss/style.scss ./sites/css/style.css  >> ./build.txt