#!/bin/bash

date="$(date ; echo)"

# Make sure a username has been input
if [ -n "$1" ]; then 
  username="$1"
else
  echo "$date - destroyuser.sh run without input" >> log.txt
  exit 1
fi

# Check that user exists
if [! id "$username" &>/dev/null]; then
  echo "$date - Tried to destroy nonexistent user $username" >> log.txt
  exit 1
fi

userdel -r $1

# Log
echo "$date - Deleted user $1" >> log.txt

