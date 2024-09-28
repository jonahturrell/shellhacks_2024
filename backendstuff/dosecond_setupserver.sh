apt install express -y

useradd -m dinoMailUserControl

cp -r ./dinoMailUserControl/* /home/dinoMailUserControl
echo "dinoMailUserControl ALL=(ALL) NOPASSWD: /usagescripts/createuser.sh, /usagescripts/destroyuser.sh" >> /etc/sudoers


