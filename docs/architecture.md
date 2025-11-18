# Architecture

## Overview
This project is an AWS CDK-based Contact Center solution sample. It leverages AWS Lambda for serverless compute, with supporting infrastructure defined in TypeScript using AWS CDK.

## Main Components
- **AWS CDK Stack**: Infrastructure as code, defined in `lib/contact_center-stack.ts`.
- **Lambdas**: Business logic, such as date/time generation, in `src/lambdas/`.
- **Utilities**: Shared helpers in `src/utils/`.
- **Tests**: Unit tests in `src/tests/`.

## Directory Structure
- `bin/` - CDK app entry point
- `lib/` - CDK stack definitions
- `src/lambdas/` - Lambda function handlers
- `src/utils/` - Utility modules
- `src/tests/` - Unit and mock tests
- `config/` - Configuration files

