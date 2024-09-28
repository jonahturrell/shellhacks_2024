deluser $1

echo ""

# Log
date="$(date ; echo)"
echo "$date - Deleted user $1" >> log.txt
