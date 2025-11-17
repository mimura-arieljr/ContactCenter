import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ContactCenter from '../lib/contact_center-stack';

test('Lambda Function Created', () => {
	const app = new cdk.App();
	// WHEN
	const stack = new ContactCenter.ContactCenterStack(app, 'MyTestStack');
	// THEN
	const template = Template.fromStack(stack);

	template.hasResourceProperties('AWS::Lambda::Function', {
		Handler: 'generateAedtDateTime.handler',
		Runtime: 'nodejs22.x',
		Timeout: 8
	});
});
