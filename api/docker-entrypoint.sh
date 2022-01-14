#!/bin/sh
set -e

echo "The Dockerfile ENTRYPOINT has been executed!"

exec ${BACKEND_ENTRYPOINT} "$@"
