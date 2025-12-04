---
title: "What is a YAML used for?"
date: "2025-12-04"
parent: "yaml"
order: 2
author: Noyon Rahman
category: yaml
tags: ["yaml", "getting-started"]
---

## What is a YAML used for?

YAML is often used for configuration files that are parsed and read by a programming language or framework. Its human-readable format makes it easy for developers and system administrators to understand and modify configuration settings.

Here are some of the most common use cases for YAML:

- **Configuration management (CM)** – Ansible uses yaml files to describe all CM configurations (playbooks, roles, etc.).
- **Infrastructure as code (IaC)** – [OpenTofu](https://opentofu.org), for example, can read yaml files and use them as input for different resources, data sources, and even outputs.
- **CI/CD** – Many CI/CD products rely on yaml to describe their pipelines ([GitHub Actions](https://github.com/features/actions), [GitLab CI/CD](https://docs.gitlab.com/ee/ci), [Azure DevOps](https://azure.microsoft.com/en-us/products/devops), [CircleCI](https://circleci.com))
- **Container orchestration (CO)** – [K8s](https://kubernetes.io) and [Docker Compose](https://docs.docker.com/compose) rely heavily on yaml files to describe the infrastructure resources.
- **Data serialization** – YAML can be used to describe complex data types such as lists, maps, and objects.
- **APIs** – YAML can be used in defining API contracts and specifications (e.g. [OpenAPI](https://spec.openapis.org/oas/latest.html))
