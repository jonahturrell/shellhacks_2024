#!/bin/bash

date="$(date ; echo)"

# Make sure a username has been input
if [ -n "$1" ]; then 
  username="$1"
else
  echo "$date - destroyuser.sh run without input" >> log.txt
  exit 1
fi

userdel -r $1

# Log
echo "$date - Deleted user $1" >> log.txt

