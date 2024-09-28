deluser $1

# Log
date="$(date ; echo)"
echo "Deleted user $1 at $date" >> log.txt
