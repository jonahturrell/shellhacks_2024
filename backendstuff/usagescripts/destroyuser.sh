deluser $1

echo ""

# Log
date="$(date ; echo)"
echo "Deleted user $1 at $date" >> log.txt
