# Set up variables
username=dinoMailuserControl
script=serverscript.js

# Set up the mail user control
useradd -m $username
cp -r ./dinoMailUserControl/* /home/$username
echo "$username ALL=(ALL) NOPASSWD: /usagescripts/createuser.sh, /usagescripts/destroyuser.sh" >> /etc/sudoers

# Install Express
apt install nodejs npm -y
cd /home/$username
npm install --prefix /home/$username express imap-simple mailparser

# Add server script to systemctl

