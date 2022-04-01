## start locally
node src/index.js --service users-git-shaw --port 8080 --key sslcert/server.key --cert sslcert/server.cert -v

cd ~/zowe/extenders/users-git-shaw
## start on z/os uss 
KEYSTORE_DIRECTORY=~/zowe/keystore
KEYSTORE_ALIAS=localhost
KEYSTORE_PREFIX="${KEYSTORE_DIRECTORY}/${KEYSTORE_ALIAS}/${KEYSTORE_ALIAS}.keystore"
KEYSTORE_KEY=${KEYSTORE_PREFIX}.key
KEYSTORE_CERTIFICATE=${KEYSTORE_PREFIX}.cer-ebcdic
node src/index.js --service users-git-shaw --port 443 --key ${KEYSTORE_KEY} --cert ${KEYSTORE_CERTIFICATE} -v

# register with API ML layer
cd ~/zowe/extenders/users-git-shaw
iconv -f IBM-1047 -t IBM-850 users-git-shaw.yml > ~/zowe/instance/workspace/api-mediation/api-defs/users-git-shaw.yml