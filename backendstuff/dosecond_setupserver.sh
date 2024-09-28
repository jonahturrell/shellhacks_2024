# Install Express
apt install express -y

# Set up the mail user control
useradd -m dinoMailUserControl
cp -r ./dinoMailUserControl/* /home/dinoMailUserControl
echo "dinoMailUserControl ALL=(ALL) NOPASSWD: /usagescripts/createuser.sh, /usagescripts/destroyuser.sh" >> /etc/sudoers

# Add server to systemctl
