# Base stage
FROM alpine:latest as base

RUN apk --no-cache add \
    curl

RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s
RUN curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b /tmp v1.56.1

# Build image
FROM golang:alpine

COPY --from=base /bin/air /bin/air
COPY --from=base /tmp/golangci-lint /usr/local/bin

RUN set -eux; \
    apk add --no-cache git \
    bash

SHELL ["/bin/bash", "-c"]
