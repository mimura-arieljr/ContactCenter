# Decision Register

| Decision | Context | Rationale | Impact |
|----------|---------|-----------|--------|
| **Use AWS Lambda with Node.js 22 via CDK** | Need for scalable, serverless compute for contact center logic | • Node.js 22 offers latest features and performance<br>• CDK enables Infrastructure as Code and repeatable deployments | • Modern, maintainable, and scalable backend<br>• Easy updates via CDK |
| **Use lambda-nodejs CDK construct** | Simplifies Lambda deployment and bundling for TypeScript/Node.js | • Provides automatic transpilation and bundling<br>• Reduces manual config | • Faster development<br>• Less boilerplate |
| **Created Amazon Connect instance and Contact Workflow directly in AWS Console** | CDK support for Amazon Connect is limited to L1 constructs; Time constraints for learning Connect | • Prioritized delivery and simplicity over full IaC for Connect resources<br>• Based on AWS documentation and forums | • Amazon Connect resources are managed manually, not in code |
| **Use TypeScript for all infrastructure and Lambda code** | Type safety and modern JS features | • Reduces runtime errors<br>• Improves maintainability | • More robust codebase |
| **Use Jest and ts-jest for testing** | Need for reliable unit testing of TypeScript code | • Jest ecosystem is mature and integrates well with TypeScript | • High test coverage<br>• Easier refactoring |

_This document will be updated as architectural or process decisions are made._
