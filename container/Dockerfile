ARG ZOWE_BASE_IMAGE=latest-ubuntu

FROM zowe-docker-release.jfrog.io/ompzowe/base-node:${ZOWE_BASE_IMAGE} AS builder

##################################
# labels
LABEL name="users-git-shaw" \
      maintainer="kajank@ca.ibm.com" \
      vendor="Zowe" \
      version="0.0.0" \
      release="0" \
      summary="A sample node js api api" \
      description="It is used to demonstrate the steps to extend API/ML with your own rest api."

##################################
# switch context
USER zowe
WORKDIR /component

##################################
# copy files
COPY --chown=zowe:zowe component .
COPY --chown=zowe:zowe component/LICENSE /licenses

##################################
# build component
RUN npm install --only=prod

# start command
EXPOSE 443
ENTRYPOINT [ "bin/start.sh" ]