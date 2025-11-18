# Development Guide

## Prerequisites
- Node.js (v18+ recommended)
- npm
- AWS CLI (configured)
- Typescript
- Docker

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/mimura-arieljr/ContactCenter
   cd ContactCenter
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure AWS credentials (if deploying):
   ```sh
   aws configure
   ```

## Running Tests
```sh
npm run test
```

## Useful Commands
- Build CDK: `npm run build`
- Deploy CDK: `cdk deploy`
- Run tests: `npm run test`

## Project Structure
See [Architecture](./architecture.md) for details.
