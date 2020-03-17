HOST = 192.168.1.15:5000
NS = balhau
APP = burger-builder
ARCH = arm32v7
VERSION ?= 0.0.5
ARTIFACT=$(HOST)/$(NS)/$(APP):$(ARCH)-$(VERSION)

.PHONY: build push shell run start stop rm release

build:
	docker buildx build -t $(ARTIFACT) . --platform linux/arm
push:
	docker push $(ARTIFACT)
run:
	docker run -it --rm $(ARTIFACT) bash

default: build
