#!/bin/bash

# Check if a username has already been input
if [ -n "$1" ]; then 
  username="$1"
else
  username="$(tr -dc A-Za-z0-9 </dev/urandom | head -c 13 ; echo)" # Get a random 13-character string
fi

useradd -MN -G mail $username
date="$(date ; echo)"

# Check that user was added successfully and log
if [$? -ne 0]; then
  echo "$date - Failed to create user $username" >> log.txt
  exit 1
fi

echo "$username:123" | chpasswd
echo "$date - Created mail user $username" >> log.txt


