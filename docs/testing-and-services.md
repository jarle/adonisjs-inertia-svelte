# Testing And Services

The application relies on a small service stack for local testing and for GitHub pull request validation.
That stack is defined in [`compose.yml`](../compose.yml).

## Purpose

- The service stack gives the application the external dependencies it expects during development and testing.
- The same stack shape is used locally and in GitHub Actions so pull requests are validated against the same kind of environment.
- Testing uses a dedicated environment file so local test services do not compete with a normally running application.

## Service Stack

The Docker Compose stack provides PostgreSQL, Redis, MinIO, and MailHog.
These services represent the supporting infrastructure around the AdonisJS app.

The compose file reads the same `DB_*` values as the application.
This keeps the application configuration and the database container aligned.

The stack also uses dedicated host port variables for Redis, MinIO, and MailHog.
This makes the local setup predictable while still allowing the test environment to use different ports from development.

## Test Environment

[`../.env.test`](../.env.test) defines the test runtime configuration.
Adonis loads this file automatically for test runs.

The test environment exists to isolate local tests from the normal development environment.
It uses a fixed set of non-default host ports so a developer can keep the regular application stack running while bringing up the test stack separately.
It also uses a separate Compose project name, so the test stack gets its own containers, network, and volumes instead of reusing development state.

This file is committed because it describes shared project behavior rather than machine-specific secrets.
It is part of the documented test contract for the repository.

## Local Workflow

Local test services are managed through the package scripts in [`../package.json`](../package.json).

- `services:test:up` first tears down any previous test stack, then starts the test dependency stack with `.env.test` and waits for healthy services.
- `services:test:down` stops the same stack and removes its volumes and orphaned containers.
- `test` runs the Adonis test suite without starting Docker automatically.

This separation keeps the local test command compatible with other environments, including GitHub Actions.

The intended local workflow is:

- Start the test stack with `services:test:up`.
- Run the needed test command, including the `browser` suite when working on frontend behavior.
- Stop the test stack with `services:test:down` when finished.

The test service commands are safe to rerun because they clean the previous test stack first.
If a test port is still reported as busy after that, the issue is stale local Docker state rather than the project configuration.

## GitHub Workflow

[`../.github/workflows/build.yml`](../.github/workflows/build.yml) uses the same `.env.test` file and the same Compose stack during pull request validation.

The workflow starts the dependency stack before installing dependencies and running validation.
It then runs type checking, the production build, and the test suite.

When the workflow fails, it preserves browser screenshots and always dumps Compose logs before tearing the stack down.
That makes CI failures easier to diagnose without changing the local testing model.

## Relationship Between Local And CI

Local development and GitHub Actions share the same dependency model.
Both depend on `compose.yml`.
Both use `.env.test` for the test environment.

The main difference is orchestration.
Local development keeps service startup as an explicit step.
GitHub Actions owns that step inside the workflow so pull requests always run in a prepared environment.
