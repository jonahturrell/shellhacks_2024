username="$(tr -dc A-Za-z0-9 </dev/urandom | head -c 13 ; echo)" # Get a random 13-character string

useradd -m -G mail $username
