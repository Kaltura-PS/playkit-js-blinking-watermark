#!/bin/bash

filename="index.html"
local_url="<script src=\".\/playkit-js-blinking-watermark.js\"><\/script>"
prod_url="<script src=\"https:\/\/raw.githack.com\/Kaltura-PS\/playkit-js-blinking-watermark\/main\/dist\/playkit-js-blinking-watermark.js\"><\/script>"

search="$local_url"
replace="$prod_url"

if [ "$1" = "dev" ]; then
  search="$prod_url"
  replace="$local_url"
fi

cd 'demo' || exit
perl -i -pe"s/$search/$replace/" $filename
