ARG DENO_VERSION=1.17.1
FROM denoland/deno:alpine-${DENO_VERSION}
ARG DENO_ENV=development
ARG BACKEND_ENTRYPOINT=deno

#RUN deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon/denon.ts
#https://github.com/denosaurs/denon/issues/155
RUN deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://raw.githubusercontent.com/nnmrts/denon/patch-4/denon.ts

WORKDIR /api 

# Prefer not to run as root.
#USER deno

ENV DENO_RUN_OPTIONS="--import-map=import_map.json --unstable"
ENV BACKEND_ENTRYPOINT=${BACKEND_ENTRYPOINT}

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY src/utils/deps.ts src/utils/deps.ts
COPY import_map.json .
RUN deno cache --reload ${DENO_RUN_OPTIONS} src/utils/deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the mods app so that it doesn't need to be compiled each startup/entry.
RUN deno cache ${DENO_RUN_OPTIONS} src/mod.ts

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "--unstable", "--import-map=import_map.json", "src/mod.ts"]
# The port that the auth server application listens to.
EXPOSE 8000


#ENTRYPOINT ["/usr/local/bin/denon"]
