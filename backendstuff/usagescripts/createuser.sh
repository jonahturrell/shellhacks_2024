#!/bin/bash

if [ -n "$1" ]; then
  username="$1"
else
  username="$(tr -dc A-Za-z0-9 </dev/urandom | head -c 13 ; echo)" # Get a random 13-character string


fi
useradd -m -G mail $username

# Log
date="$(date ; echo)"
echo "Created user $username at $date" >> log.txt
