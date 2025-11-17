#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { ContactCenterStack } from '../lib/contact_center-stack';

import { configuration } from '../config/config';

const {
  env,
  realm,
  repo_url,
  aws: { account, region },
} = configuration

const app = new cdk.App();

const tags = {
  'owner:name': 'Chock Mimura',
  'owner:department': 'Engineering',
  'security:classfication': 'private',
  'application:repository': `${repo_url}`,
}

new ContactCenterStack(app, `${realm}-contact-center-stack-${env}`, {
  env: { account, region },
  tags,
});
